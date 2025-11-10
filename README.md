# Task
Fill out the filters.ts and filter.test.ts files to implement an entity filter of your own design.

# Instructions
1. Run `npm install` to install the dependencies.
1. Look at the screenshot.png file. Discuss how you think the filter might work from the user's perspective (not how it's implemented). The `All` option can be either `All` or `Any`.
1. Look at the order-schema-filters.json file. This is the schema that the filter will be applied to.
1. You can run tests with `npm run test`.
1. You can run type checking with `npm run compile`.
1. Fill out filters.ts and filter.test.ts to implement the filter.

# Recommended Approach
1. Understand the problem.
1. Design the filter type. Explain your reasoning for each of the fields.
1. Fill out the evaluateFilter function. Let's discuss an approach and then break the problem into discrete, verifiable steps. After each step, write tests for that chunk of work.

# Guidelines

- Work iteratively. Get small chunks of work done and then move onto the next. It should be clear to me that we're making progress. Describe what that might look like to you.

# AI Tools During Your Interview

Use AI tools freely (Claude Code, Cursor, etc.) — we want to see how you think, decide, and collaborate with AI, not whether you can out-code it. We can provide an Anthropic API key if needed.

What We're Looking For

**Thoughtful prompting** — Describe problems clearly with context and constraints. Steer the model iteratively, not with one-shot "solve it" prompts.

**Your reasoning** — Explain how you break down problems, evaluate trade-offs, and make decisions.

**Critical review** — Critique AI output on correctness, structure, naming, and style. Say what you'd change and why.

**Ownership** — Treat AI as a collaborator, not an oracle. Verify outputs, run tests, and understand before adopting.

**Adaptability** — When requirements shift or things break, explain your adjustments and trade-off reasoning.

**Engineering taste** — Code must be clear, maintainable, and safe. AI doesn't excuse poor structure or missing tests.

Good AI Usage

- Outline approach before prompting
- Use AI for scaffolding/boilerplate, not complete solutions
- Iterate and critique outputs
- Add your own refactors, tests, documentation
- Verify correctness and performance

Avoid

- Asking AI to solve the entire problem for you.
- Pasting code you don't understand
- Treating first answers as final
- Over-prompting instead of reasoning
- Skipping edge cases or tests

Bottom Line

Think aloud. Use AI to accelerate, not replace understanding. We're evaluating your judgment, communication, and engineering instincts — not just the final code.
