# Test Cases — Hello World page

Risk level: low. One static read-only screen, no writes, no roles, no error state. Coverage follows three acceptance criteria only.

## Scenario: Show greeting on default route
**Given** Guest opens default route
**When** Page loads
**Then** Page shows visible text `Hello, World!` and no other product text required by this function
**Check:** render_url
**Traceability:** HOME-001 / AC-1

## Scenario: Show only centered landing screen with no secondary UI
**Given** Guest opens default route
**When** Page loads
**Then** Page shows one centered screen and no nav, footer, login entry point, or database content
**Check:** render_url
**Traceability:** HOME-001 / AC-2

## Scenario: Keep greeting centered and readable on common viewport
**Given** Guest opens page on common mobile or desktop viewport
**When** Page loads
**Then** Greeting stays centered, readable, and page has no horizontal scroll
**Check:** measure_styles
**Traceability:** HOME-001 / AC-3
