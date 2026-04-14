# Contributing to Kubetail Docs

Thank you for your interest in contributing to the Kubetail documentation! Whether you're fixing a typo, improving an explanation, or writing a new guide, we'd love your help making our docs better.

This document will guide you through the contribution process.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Writing and Editing Docs](#writing-and-editing-docs)
- [Running the Site Locally](#running-the-site-locally)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Branch Naming Guidelines](#branch-naming-guidelines)
- [Editor Configuration](#editor-configuration)
- [Automation](#bots-and-automation)
- [AI Policy](#ai-policy)
- [Community](#community)

## Getting Started

Prerequisites:

- [Node.js](https://nodejs.org/) v22+
- [pnpm](https://pnpm.io/) (version managed via `packageManager` in `package.json`)

Clone the repo, install dependencies, then run the dev site:

```bash
git clone https://github.com/kubetail-org/kubetail-docs.git
cd kubetail-docs
pnpm install
pnpm dev
```

## Project Structure

This site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/). Documentation content lives in `src/content/docs/`:

```
src/content/docs/
├── concepts/          # Architecture, security, and other conceptual docs
├── guides/            # How-to guides (cluster, dashboard, desktop, docker)
├── reference/         # CLI, API, Helm chart, and config reference
├── tutorials/         # Step-by-step tutorials (e.g., quickstart)
├── index.mdx          # Landing page
├── de/                # German translations
├── es/                # Spanish translations
├── fr/                # French translations
├── ja/                # Japanese translations
├── ko/                # Korean translations
├── pt/                # Portuguese translations
└── zh-cn/             # Simplified Chinese translations
```

### Quick Reference

| Working on...             | Go to                                   |
|---------------------------|-----------------------------------------|
| English docs (primary)    | `src/content/docs/` (top-level folders) |
| Translations              | `src/content/docs/<locale>/`            |
| Site configuration        | `astro.config.mjs`                      |
| Custom components/layouts | `src/components/`                       |

## Writing and Editing Docs

All documentation pages are written in [MDX](https://mdxjs.com/) (Markdown with JSX support). Each page has YAML frontmatter at the top:

```mdx
---
title: Page Title
description: A brief description of the page.
---

Page content goes here...
```

### Style Tips

- Write in clear, concise language
- Use second person ("you") when addressing the reader
- Include code examples where helpful
- Use Starlight's built-in components (e.g., `<Tabs>`, `<Aside>`) for richer formatting — see the [Starlight docs](https://starlight.astro.build/guides/components/)

### Translations

Translations mirror the English content structure under locale directories (e.g., `src/content/docs/es/`). If you're adding a new English page, you don't need to add translations — those can follow later.

## Running the Site Locally

```bash
# Start the dev server
pnpm dev
```

Then visit http://localhost:4321 in your browser. The dev server supports hot reload so your changes appear instantly.

### Running Checks

Before submitting, make sure your changes pass lint and build:

```bash
# Run linter
pnpm lint

# Build the site (catches broken links, invalid frontmatter, etc.)
pnpm build
```

## Commit Guidelines

Keep commits minimal and focused. Multiple commits in a PR are fine if they represent logical, well-separated steps that make the change easier to review.

### Format

We follow the [Conventional Commits](https://www.conventionalcommits.org) format:

```
<type>[optional scope]: commit title goes here (all lowercase)

[optional body]

Signed-off-by: Your Name <you@example.com>
```

**Types:**

- `docs` - Content changes (new pages, edits, fixes)
- `feat` - New site features (components, plugins, config)
- `fix` - Bug fixes (broken links, rendering issues)
- `build` - Build system or dependency changes
- `chore` - Routine maintenance (dependency updates, configs)
- `ci` - CI configuration changes
- `refactor` - Code restructuring without behavior changes
- `style` - Formatting changes (whitespace, punctuation)

## Pull Request Guidelines

### Before Submitting

1. **Check for duplicates**: Review existing [issues](https://github.com/kubetail-org/kubetail-docs/issues) and [pull requests](https://github.com/kubetail-org/kubetail-docs/pulls)
2. **Run checks**: Run `pnpm lint` and `pnpm build` and ensure they pass
3. **Clean commits**: Ensure each commit is minimal, focused, and follows our [commit format](https://www.conventionalcommits.org)

### PR Title Format

Add an emoji to indicate the PR type:

- 🎣 Bug fix
- 🐋 New feature
- 📜 Documentation
- ✨ General improvement

### PR Description

Your PR should include:

- Link to related issue: `Fixes #123`
- **Summary**: Explain the goal of your PR
- **Key Changes**: List the specific key changes made

### PR Checklist

- [ ] Add the correct emoji to the PR title
- [ ] Related issue linked above, if any
- [ ] Commit messages use [conventional commit](https://www.conventionalcommits.org) format
- [ ] Changes are minimal and focused

## Branch Naming Guidelines

Use descriptive branch names. As a suggestion, you can use this pattern:

```
<type>/<short-description>
```

## Editor Configuration

### AI-Assisted Editors

For AI-assisted editors like Claude Code, Codex, Cursor or GitHub Copilot, refer to the [`CLAUDE.md`](./CLAUDE.md) file for guidance on working with this codebase.

### Visual Studio Code

Recommended extensions:
- **MDX**: `unifiedjs.vscode-mdx`
- **Astro**: `astro-build.astro-vscode`
- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`

## Bots and Automation

### GitHub Actions

Our CI pipeline automatically runs on every pull request:

- **Linting**: Code formatting and style checks
- **Build**: Ensures the site builds successfully

You can see the status of these checks in your PR. If any checks fail, review the logs and fix the issues before requesting a review.

### CLA Assistant

If this is your first contribution, our [CLA (Contributor License Agreement)](https://cla-assistant.io/) assistant will prompt you to sign the CLA when you create your pull request. This is a one-time requirement.

## AI Policy

As a contributor you're encouraged to use AI tools in your workflow just as you would use classic tools such as search engines, language servers, linters, debuggers, documentation, or books. These tools are an invaluable resource and can help you write better content and explore ideas more efficiently.

That said, AI tools are different than classic tools because they can blur the line between helping you to do the work and doing the work for you. And when that line becomes blurry, it can limit opportunities to build the deep understanding that comes from writing and reasoning through content yourself.

As an open source project, Kubetail is not only committed to building the most user-friendly logging platform for Kubernetes but also to helping our contributors grow as engineers. We invest a lot of time and effort into quality, thoughtful reviews, and well-defined specs. We do so happily because we enjoy it but also because it's our responsibility to the community.

In return, we ask that contributions be authored by you. While AI tools can support your workflow, submitted content should reflect your own understanding and intent. To keep our focus on meaningful collaboration within the community, we do not accept contributions authored entirely by LLMs.

When you use an AI tool, include an Assisted-by tag in the following format:

```
Assisted-by: AGENT_NAME:MODEL_VERSION
```

Where:

    `AGENT_NAME` is the name of the AI tool or framework
    `MODEL_VERSION` is the specific model version used

Example:

```
git commit -a -s --trailer "Assisted-by: Claude:claude-opus-4.6" -m "<message>"
```

## Community

We'd love to hear from you! Here's how to connect with the Kubetail community.

### Communication Channels

- **[Discord](https://discord.gg/CmsmWAVkvX)**: Join for real-time discussions, questions, and community chat
- **[Slack](https://kubernetes.slack.com/archives/C08SHG1GR37)**: Connect with us on the Kubernetes workspace

### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/kubetail-org/.github/blob/main/CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

---

Thanks for contributing to Kubetail Docs! 🐋
