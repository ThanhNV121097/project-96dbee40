# Hello World page

## User story
As a Guest, I want open default route and see requested greeting, so I know app loaded correctly.

## In scope
- Default route landing page for `home`
- Single centered greeting with exact text `Hello, World!`
- No nav, footer, login entry points, or database-backed content
- Responsive reading on common desktop and mobile viewports

## Out of scope
- Login, accounts, or session state
- Navigation or footer content
- Any additional page beyond landing page
- Backend, database, API, or persistence

## UI scope
- One screen only: Home landing screen
- Use approved centered landing card layout from design/design-system.md
- States: default only
- No interactive controls, empty state, loading state, or error state

## Acceptance criteria
1. Given Guest opens default route, when page loads, then page shows `Hello, World!`.
2. Given Guest opens default route, when page loads, then page shows one centered screen with no nav, footer, login, or database content.
3. Given Guest opens page on common mobile or desktop viewport, when page loads, then greeting remains centered and readable without horizontal scroll.

## Dependencies
- Frontend app shell available for public landing route
- Approved design and design system stay unchanged
- No external accounts or secrets required
