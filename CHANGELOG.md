# Changelog

## 2026-09-30

- Rebuilt the acquisition page: typographic hero (no full-bleed photo), price on request, asset facts, and a real inquiry that opens a prefilled email.
- Removed the self-issued 5-star review and the $0 offer from structured data. Schema is now WebSite, Organization, WebPage, and Product without a fake rating.
- Added `/guide/` for internal linking and a straight buyer explanation. Sitemap picks it up via the Astro integration.
- Added a light/dark theme, a collapsible mobile menu, 48px controls, and a desktop-only exit note that requests the brief (no fake countdown or discount).
- Dropped the Font Awesome stylesheet and the hero image so the first paint is text, not a remote asset.
- Security headers now include HSTS, a tight content-security policy, and `X-Robots-Tag` behavior already enforced by the Worker canonical redirect.
