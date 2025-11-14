import { z } from "zod";

export const AddressSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  addressLine1: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/),
  country: z.string().default("US"),
  phone: z.string().regex(/^\+?[\d\s-()]+$/),
});

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  productId: z.string(),
  sku: z.string(),
  name: z.string(),
  quantity: z.number().int().positive(),
  unitPrice: z.number().positive(),
  totalPrice: z.number().positive(),
});

export const PaymentInfoSchema = z.object({
  method: z.enum([
    "credit_card",
    "debit_card",
    "paypal",
    "stripe",
    "apple_pay",
    "google_pay",
  ]),
  status: z.enum([
    "pending",
    "authorized",
    "captured",
    "failed",
    "refunded",
    "partially_refunded",
  ]),
  amount: z.number().positive(),
});

export const ShippingInfoSchema = z.object({
  method: z.string(),
  trackingNumber: z.string().optional(),
  trackingUrl: z.string().url().optional(),
  shippingCost: z.number().nonnegative(),
});

export const CustomerInfoSchema = z.object({
  id: z.string(),
  email: z.string().email(),
});

export enum AutoEngUpdateStatus {
  PENDING = "pending",
  UPDATED = "updated",
  FAILED = "failed",
}

export const OrderSchema = z
  .object({
    id: z.string().uuid(),
    automationEngineUpdateStatus: z.nativeEnum(AutoEngUpdateStatus),
    status: z.enum([
      "pending",
      "confirmed",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
      "refunded",
    ]),
    customer: CustomerInfoSchema.optional(),
    items: z.array(OrderItemSchema).min(1),
    billingAddress: AddressSchema,
    shippingAddress: AddressSchema,
    payment: PaymentInfoSchema,
    shipping: ShippingInfoSchema,
    subtotal: z.number().positive(),
    total: z.number().positive(),
    currency: z.string().length(3).default("USD"),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
  })
  .refine(
    (data) => {
      const calculatedTotal = data.subtotal + data.shipping.shippingCost;
      return Math.abs(data.total - calculatedTotal) < 0.01;
    },
    {
      message:
        "Order total does not match calculated amount (subtotal + shipping)",
    },
  );

export type Address = z.infer<typeof AddressSchema>;
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
export type ShippingInfo = z.infer<typeof ShippingInfoSchema>;
export type CustomerInfo = z.infer<typeof CustomerInfoSchema>;
export type Order = z.infer<typeof OrderSchema>;
