# Task

Fill out the filter.ts and filter.test.ts files to implement an entity filter of your own design.

## Context

In Pipe17, eCommerce merchants filter orders using our Advanced Filter interface (shown below). Users can:
- Filter by multiple fields (e.g., "Billing Address Address 1 equals '123 Main St'")
- Choose how conditions are evaluated (All/Any)
- Add any number of conditions

Filter Demo and Example:
![Filter Demo](filter.gif)

Plain english description of the filter above:
The user wants to see orders where ALL the following conditions are true:
* The order's shipping address' country starts with "United States"
* The order's status equals "Refunded"
* The order's currency equals "USD"

Your task is to
(1) design the data structure (type/schema) for the order filter and
(2) implement the logic to evaluate whether an order matches the filter criteria.

**Important:** The Filter is pure data (like JSON/DTO) that gets persisted to the database. You'll define the Filter type and implement `evaluateFilter` to evaluate it.

# Instructions

**Prerequisites:**
- Ensure Node.js is installed on your machine
- You can ignore files in `src/internal/` - those are internal implementation details only

1. **Install dependencies**: Run `npm install` in the project root. This installs packages needed for type hints/IntelliSense and running tests.

2. **Understand the Order structure:**
   - `src/exampleOrders.ts` - sample Order objects for reference and testing
   - `src/filter.ts` - contains `FlattenedOrderSchema` (flattened view where `billingAddress.addressLine1` is alongside `status`)
   - **Key insight**: Focus on field *types* (string, enum, number, etc.) and their valid operators, not memorizing all 32+ fields

3. Look at filter.gif to understand the user interface and discuss how you think the filter works from the user's perspective (not how it's implemented).

4. **Commands:**
   - `npm test` - Run test suite
   - `npm run compile` - Verify TypeScript types

# Tasks

1. **Understand the problem** - Discuss what the filter represents and how it works.

2. **Design the Filter type** - Discuss your design before writing code:
   - How the filter should work
   - What the data structure should look like
   - Your rationale for each design decision

   **Not familiar with TypeScript?** Use terms you know: Java interfaces/classes, Python type hints/dataclasses, Go structs, JSON schema, or psuedocode and write this in the file as a comment.

   AI can help translate your design to TypeScript in src/filter.ts if you'd like.

3. **Implement evaluateFilter** - Work incrementally by field type. For example, implement string field operators (equals, contains, etc.), write tests for strings, verify they pass with `npm test`, then move to the next field type (number, enum, date, etc.).

   For each field type:
   - **Your thoughts**: Explain your approach for this chunk
   - **AI implements**: Ask AI to write code for this chunk
   - **Discuss tests**: What tests are needed? What cases?
   - **AI writes tests**: Have AI write the tests you identified
   - **Your critique**: Review the AI code. What would you change? Why?

   **Why incremental?** Generating all code at once is harder to reason about and less likely to succeed. Small, verified chunks demonstrate ownership.

# AI Tools During Your Interview

You should use AI tools (Claude Code, Cursor, etc.) during this interview. We want to see how you think, decide, and collaborate with AI, not whether you can out-code it. We can provide an Anthropic API key if needed.

## What I'm Looking For

I'm curious about how you think and approach problems. Use the workflow above to guide your work.

## What Good Looks Like

- **Thoughtful prompting** — Clear descriptions with context and constraints
- **Your reasoning** — Explain breakdown, trade-offs, and decisions
- **Critical review** — Critique correctness, structure, naming, style
- **Ownership** — Verify, test, and understand before adopting
- **Adaptability** — Explain adjustments when things break
- **Engineering taste** — Clear, maintainable, safe code with good tests

## What to Avoid

- Asking AI to solve the entire problem in one shot
- Pasting code you don't understand
- Treating first answers as final
- Skipping edge cases or tests
- Writing all functionality first, then writing tests later

## Bottom Line

Think aloud. Use AI to accelerate, not replace understanding. I'm evaluating your judgment, communication, and engineering instincts — not just the final code.
