import { Order, AutoEngUpdateStatus } from "./schemas/orders";

/**
 * Sample orders for testing your filter implementation.
 */

export const basicOrder: Order = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  automationEngineUpdateStatus: AutoEngUpdateStatus.UPDATED,
  status: "shipped",
  customer: {
    id: "CUST001",
    email: "john.doe@example.com",
  },
  items: [
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      productId: "PROD001",
      sku: "SKU-001",
      name: "Widget",
      quantity: 2,
      unitPrice: 25.0,
      totalPrice: 50.0,
    },
  ],
  billingAddress: {
    firstName: "John",
    lastName: "Doe",
    addressLine1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "US",
    phone: "+1-555-0100",
  },
  shippingAddress: {
    firstName: "John",
    lastName: "Doe",
    addressLine1: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "US",
    phone: "+1-555-0100",
  },
  payment: {
    method: "credit_card",
    status: "captured",
    amount: 55.0,
  },
  shipping: {
    method: "standard",
    trackingNumber: "1Z999AA10123456784",
    trackingUrl: "https://tracking.example.com/1Z999AA10123456784",
    shippingCost: 5.0,
  },
  subtotal: 50.0,
  total: 55.0,
  currency: "USD",
  createdAt: "2025-01-15T10:30:00Z",
  updatedAt: "2025-01-15T14:20:00Z",
};

export const expensiveOrder: Order = {
  id: "223e4567-e89b-12d3-a456-426614174001",
  automationEngineUpdateStatus: AutoEngUpdateStatus.PENDING,
  status: "processing",
  customer: {
    id: "CUST002",
    email: "jane.smith@company.org",
  },
  items: [
    {
      id: "550e8400-e29b-41d4-a716-446655440002",
      productId: "PROD002",
      sku: "SKU-002",
      name: "Premium Widget",
      quantity: 5,
      unitPrice: 200.0,
      totalPrice: 1000.0,
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440003",
      productId: "PROD003",
      sku: "SKU-003",
      name: "Deluxe Gadget",
      quantity: 2,
      unitPrice: 150.0,
      totalPrice: 300.0,
    },
  ],
  billingAddress: {
    firstName: "Jane",
    lastName: "Smith",
    addressLine1: "456 Oak Avenue",
    city: "San Francisco",
    state: "CA",
    postalCode: "94102",
    country: "US",
    phone: "+1-555-0200",
  },
  shippingAddress: {
    firstName: "Jane",
    lastName: "Smith",
    addressLine1: "456 Oak Avenue",
    city: "San Francisco",
    state: "CA",
    postalCode: "94102",
    country: "US",
    phone: "+1-555-0200",
  },
  payment: {
    method: "paypal",
    status: "authorized",
    amount: 1320.0,
  },
  shipping: {
    method: "express",
    shippingCost: 20.0,
  },
  subtotal: 1300.0,
  total: 1320.0,
  currency: "USD",
  createdAt: "2025-02-01T08:15:00Z",
  updatedAt: "2025-02-01T09:00:00Z",
};

export const cancelledOrder: Order = {
  id: "323e4567-e89b-12d3-a456-426614174002",
  automationEngineUpdateStatus: AutoEngUpdateStatus.FAILED,
  status: "cancelled",
  customer: {
    id: "CUST003",
    email: "bob.jones@test.com",
  },
  items: [
    {
      id: "550e8400-e29b-41d4-a716-446655440004",
      productId: "PROD004",
      sku: "SKU-004",
      name: "Basic Item",
      quantity: 1,
      unitPrice: 15.0,
      totalPrice: 15.0,
    },
  ],
  billingAddress: {
    firstName: "Bob",
    lastName: "Jones",
    addressLine1: "789 Elm Street",
    city: "Austin",
    state: "TX",
    postalCode: "78701",
    country: "US",
    phone: "+1-555-0300",
  },
  shippingAddress: {
    firstName: "Bob",
    lastName: "Jones",
    addressLine1: "789 Elm Street",
    city: "Austin",
    state: "TX",
    postalCode: "78701",
    country: "US",
    phone: "+1-555-0300",
  },
  payment: {
    method: "debit_card",
    status: "failed",
    amount: 20.0,
  },
  shipping: {
    method: "standard",
    shippingCost: 5.0,
  },
  subtotal: 15.0,
  total: 20.0,
  currency: "USD",
  createdAt: "2024-12-20T16:45:00Z",
  updatedAt: "2024-12-21T10:30:00Z",
};

export const deliveredOrder: Order = {
  id: "423e4567-e89b-12d3-a456-426614174003",
  automationEngineUpdateStatus: AutoEngUpdateStatus.UPDATED,
  status: "delivered",
  customer: {
    id: "CUST004",
    email: "alice.williams@gmail.com",
  },
  items: [
    {
      id: "550e8400-e29b-41d4-a716-446655440005",
      productId: "PROD005",
      sku: "SKU-005",
      name: "Standard Product",
      quantity: 3,
      unitPrice: 40.0,
      totalPrice: 120.0,
    },
  ],
  billingAddress: {
    firstName: "Alice",
    lastName: "Williams",
    addressLine1: "321 Pine Road",
    city: "Seattle",
    state: "WA",
    postalCode: "98101",
    country: "US",
    phone: "+1-555-0400",
  },
  shippingAddress: {
    firstName: "Alice",
    lastName: "Williams",
    addressLine1: "321 Pine Road",
    city: "Seattle",
    state: "WA",
    postalCode: "98101",
    country: "US",
    phone: "+1-555-0400",
  },
  payment: {
    method: "stripe",
    status: "captured",
    amount: 130.0,
  },
  shipping: {
    method: "express",
    trackingNumber: "1Z999AA10987654321",
    trackingUrl: "https://tracking.example.com/1Z999AA10987654321",
    shippingCost: 10.0,
  },
  subtotal: 120.0,
  total: 130.0,
  currency: "USD",
  createdAt: "2025-01-10T12:00:00Z",
  updatedAt: "2025-01-12T18:30:00Z",
};

export const sampleOrders = [
  basicOrder,
  expensiveOrder,
  cancelledOrder,
  deliveredOrder,
];
