# Task

Fill out the filters.ts and filter.test.ts files to implement an entity filter of your own design.

## Context

![Filter Demo](filter.gif)

In Pipe17, eCommerce merchants filter orders using our Advanced Filter interface (shown above). Users can:
- Filter by multiple fields (e.g., "Billing Address Address 1 equals '123 Main St'")
- Choose how conditions are evaluated (All/Any)
- Add any number of conditions

Your task is to design the data structure (type/schema) for this filter and implement the logic to evaluate whether an order matches the filter criteria.

**Important:** The Filter is pure data (like JSON/DTO) that gets persisted to the database. The only function you need is `evaluateFilter`, which is separate from the Filter type.

# Instructions

**Prerequisites:** Ensure Node.js is installed on your machine.

**Note:** You can ignore files in the `src/internal/` directory - those are for internal implementation details only.

1. **Install dependencies**: Run `npm install` in the project root directory (where package.json is located). This installs the packages needed for type hints/IntelliSense in your editor and for running tests.

2. **Understand the Order structure:**
   - `src/exampleOrders.ts` contains sample Order objects - use these to understand what an order looks like and for testing
   - `src/filter.ts` contains `FlattenedOrderSchema` - a flattened view where nested properties like `billingAddress.addressLine1` appear alongside top-level properties like `status`
   - Hint: **Focus on field types, not the specific fields**: There are many fields (32+), but what matters is understanding the different field types (string, enum, number, etc.) and their valid operators

3. Look at filter.gif to understand the user interface and discuss how you think the filter works from the user's perspective (not how it's implemented).

4. **Run tests**: `npm run test` (or `npm test`) runs the test suite.

5. **Type check**: `npm run compile` verifies TypeScript types without running the code.

6. **Your tasks:**
   - Define the `Filter` type in src/filter.ts
   - Implement the `evaluateFilter` function in src/filter.ts
   - Write tests in src/filter.test.ts

# Recommended Approach

1. **Understand the problem** - Discuss what the filter represents and how it works.

2. **Design the filter type** - Define the data structure (see src/filter.ts). Explain your reasoning.

3. **Implement evaluateFilter** - Discuss approach, then break into discrete steps. Write tests after each step.

# Guidelines

- Work iteratively. Get small chunks of work done and then move onto the next. It should be clear to me that we're making progress. Describe what that might look like to you.

# AI Tools During Your Interview

You'll use AI tools (Claude Code, Cursor, etc.) during this interview. We want to see how you think, decide, and collaborate with AI, not whether you can out-code it. We can provide an Anthropic API key if needed.

## What I'm Looking For

I'm curious about how you think and approach problems. Here's the workflow I'd like us to follow:

### Phase 1: Type/Schema Design (Discussion First)

**Before using AI**, discuss:
- How the filter should work
- What the data structure should look like
- Your rationale for each design decision

**Not familiar with TypeScript?** Use terms you know: Java interfaces/classes, Python type hints/dataclasses, Go structs, JSON schema, or plain English.

The key: explain your reasoning and agree on the design.

### Phase 2: Translation to TypeScript (AI Can Help)

AI can help translate your design to TypeScript syntax. Use tooling to accelerate, not replace thinking.

### Phase 3: Implementation (Incremental and Verified)

**Critical: Implement and test small chunks incrementally.**

For each chunk:

1. **Your thoughts first**: Explain your approach for this piece.

2. **AI implements**: Ask AI to write code for this chunk.

3. **Discuss tests**: What tests are needed? What cases?

4. **AI writes tests**: Have AI write the tests you identified.

5. **Your critique**: Review the AI code. What would you change? Why?

**Why incremental?** Generating all code at once is harder to reason about and less likely to succeed. Small, verified chunks demonstrate ownership.

## What Good Looks Like

- **Thoughtful prompting** — Clear problem descriptions with context and constraints
- **Your reasoning** — Explain problem breakdown, trade-offs, and decisions
- **Critical review** — Critique AI output on correctness, structure, naming, style
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
