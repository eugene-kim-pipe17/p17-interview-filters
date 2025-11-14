# Task

Fill out the filters.ts and filter.test.ts files to implement an entity filter of your own design.

## Context

![Filter Demo](filter.gif)

In Pipe17, our users are eCommerce merchants who need to filter orders in our web application based on specific criteria. The image above shows our Advanced Filter interface where users can:
- Filter by multiple order fields (e.g., "Billing Address Address 1 equals '123 Main St'" and "Status equals 'Refunded'")
- Choose how conditions are evaluated.
- Add any number of conditions.
- Apply filters to view only orders that match their criteria

Your task is to design the data structure (type/schema) for this filter and implement the logic to evaluate whether an order matches the filter criteria.

**Important:** The Filter is pure data (like JSON/DTO) that gets persisted to the database. The only function you need is `evaluateFilter`, which is separate from the Filter type.

# Instructions

1. Run `npm install` to install the dependencies.

2. **Examine the flattened order schema in `src/types.ts`:**
   - We've flattened the nested Order object structure for your convenience
   - This means nested properties like `billingAddress.addressLine1` appear in the dropdown alongside top-level properties like `status`
   - For example, instead of having separate dropdowns for "billingAddress" → "addressLine1", users can directly select "billingAddress.addressLine1" as a field path
   - The `FlattenedOrderSchema` shows all available field paths, their types, and valid operators

3. Look at screenshot.png or filter.gif to understand the user interface and discuss how you think the filter works from the user's perspective (not how it's implemented).

4. You can run tests with `npm run test`.

5. You can run type checking with `npm run compile`.

6. Fill out filters.ts and filter.test.ts to implement the filter.

# Recommended Approach

1. **Understand the problem** - Discuss what the filter needs to represent and how it should work.

2. **Design the filter type** - Define the data structure (see src/filter.ts). Explain your reasoning for each field in the structure.

3. **Implement the evaluateFilter function** - Let's discuss an approach and then break the problem into discrete, verifiable steps. After each step, write tests for that chunk of work.

# Guidelines

- Work iteratively. Get small chunks of work done and then move onto the next. It should be clear to me that we're making progress. Describe what that might look like to you.

# AI Tools During Your Interview

Use AI tools freely (Claude Code, Cursor, etc.) — we want to see how you think, decide, and collaborate with AI, not whether you can out-code it. We can provide an Anthropic API key if needed.

## What I'm Looking For

I'm curious about how you think and approach problems. Here's the workflow I'd like us to follow:

### Phase 1: Type/Schema Design (Discussion First)

**Before using AI**, let's discuss:
- Your understanding of how the filter should work
- What the schema/data structure should look like
- Your rationale for each field and design decision

**Don't worry if you're not familiar with TypeScript specifically** — you can use terms you're comfortable with:
- Java interfaces or classes
- Python type hints or dataclasses
- Go structs
- JSON schema
- Or just plain English descriptions of the data structure

The key is that we come to an agreement on the design and you can explain your reasoning.

### Phase 2: Translation to TypeScript (AI Can Help)

If you need help translating your design into TypeScript syntax, AI can assist here. This is where tooling should accelerate your work, not replace your thinking.

### Phase 3: Implementation (Incremental and Verified)

This is critical: **I want to see small chunks of functionality implemented and tested incrementally.**

For each chunk of work:

1. **Your thoughts first**: Explain how you want to implement this piece. What's your approach?

2. **AI implements**: You can ask AI to write the code for that specific chunk.

3. **Discuss tests**: Talk through what tests we should write for this chunk. What cases need coverage?

4. **AI writes tests**: Have AI write the tests you identified.

5. **Your critique**: Review the code AI generated. What do you think? Would you change anything? Why?

**Why incremental?** In the real world, having AI generate all the code at once makes things harder to reason about and less likely to succeed. Small, verified chunks lead to better outcomes and demonstrate ownership.

## What Good Looks Like

- **Thoughtful prompting** — Describe problems clearly with context and constraints
- **Your reasoning** — Explain how you break down problems, evaluate trade-offs, and make decisions
- **Critical review** — Critique AI output on correctness, structure, naming, and style
- **Ownership** — Verify outputs, run tests, and understand before adopting
- **Adaptability** — When things break, explain your adjustments
- **Engineering taste** — Clear, maintainable, safe code with good test coverage

## What to Avoid

- Asking AI to solve the entire problem in one shot
- Pasting code you don't understand
- Treating first answers as final
- Skipping edge cases or tests
- Writing all functionality first, then writing tests later

## Bottom Line

Think aloud. Use AI to accelerate, not replace understanding. I'm evaluating your judgment, communication, and engineering instincts — not just the final code.
