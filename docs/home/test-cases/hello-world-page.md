# Test Cases — Hello World page

Risk level: low. Single static read-only page. Coverage stays to written acceptance criteria; no speculative cases.

## Scenario 1: Show greeting on default route
**Given** Guest opens default route
**When** page loads
**Then** response serves landing page with visible text `Hello, World!` on `/` and no redirect
**Check:** fetch_url

## Scenario 2: Show only centered screen with no nav, footer, login, or database content
**Given** Guest opens default route
**When** page loads
**Then** browser shows one centered screen with visible text `Hello, World!` and no navigation, footer, login entry points, or database-backed content anywhere in rendered page
**Check:** render_url

## Scenario 3: Keep greeting centered and readable on common mobile and desktop viewports
**Given** Guest opens default route on common mobile and desktop viewport sizes
**When** page loads
**Then** greeting remains centered and readable and page has no horizontal scroll at those viewport sizes
**Check:** manual
