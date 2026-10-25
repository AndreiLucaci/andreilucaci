# Andrei Lucaci / AEL Engineering

Personal portfolio and company website built with **React, TypeScript, Vite, Lucide icons, and custom CSS**. Components live in `src/components/`; typed project content lives in `src/content.ts`. Existing branding, content, images and original asset URLs are retained.

## Local development

Requires Node.js 22.12 or newer.

- `yarn install --frozen-lockfile`: install the locked dependencies
- `yarn dev`: Vite development server with fast refresh
- `yarn typecheck`: strict TypeScript validation
- `yarn build`: typecheck, optimized Vite build, then prerender React content into `dist/index.html`
- `yarn preview`: http://127.0.0.1:4173

Production HTML includes the entire portfolio for search engines and visitors without JavaScript. React hydrates the same components in the browser. The copyright year updates after hydration. Navigation, project links and the native details disclosure work without JavaScript. No backend or router is needed for the single-page site.

The first visit follows the visitor's system setting. The header control then switches directly between light and dark, and stores an explicit choice in localStorage. Dark mode adapts the Everforest Pro palette for the website, using its charcoal, warm cream, and green colors with web-specific contrast.

`public/assets/` contains only explicitly used public images. The legacy résumé is excluded from deployment; `public/robots.txt` and `public/sitemap.xml` are copied by Vite. `src/styles.css` is the active stylesheet. Legacy assets at the repository root are retained for reference but are not loaded.

Local development and Netlify both use Yarn Classic 1.22.22, pinned in `package.json`, with `yarn.lock` for reproducible dependency installation. Netlify detects Yarn and runs `yarn build`.

Netlify configuration remains in `netlify.toml`: Node 22, `yarn build`, publish `dist`. No environment variables or functions are needed. No deployment or push was performed. Confirm the existing Netlify dashboard settings before an authorized deployment; no tracked Netlify configuration existed before this redesign.

## Content and provenance

Refreshed 25 October 2026. No live GitHub API requests, changing star counters, client logos implying endorsements, or invented performance claims.

- Existing website: Fullview founding engineer / tech lead, backend and AWS architecture; GoodLeap architecture, engineering and seven-person team leadership; ZibraSport; JSONF, QR generator, Minesweeper, Scriptum Deus, studiu.net and God Mindset.
- https://github.com/AndreiLucaci: public profile: ifm moneo, Archive360 Unity, architecture practices, stack, PrayPoint, Git shortcuts and encoding utilities.
- https://ro.linkedin.com/in/lucaciandrei: corroborates Archive360 and industrial software experience.
- https://www.linkedin.com/company/ael-engineering: company services and founder relationship.
- PureKey local repository `/Users/andreilucaci/Documents/GIT/ios/PureKey/README.md`, `LICENSE`, and website documentation: English iOS keyboard, SwiftUI/UIKit, Apache 2.0, no autocorrect/predictions/automatic capitalization, precise cursor control. Light and dark keyboard images are copied from the actual simulator captures in `src/web/public/images`. Source remote: https://github.com/AndreiLucaci/PureKey. Website: https://purekey.dev.

## Owner verification before publication

- PureKey is shown as preparing for release, as instructed and documented. Confirm the release state before changing it to available. Its public GitHub visibility could not be independently verified; the source link matches the local repository remote.
- Confirm current roles, dates, company service wording and contact route. The website deliberately avoids current-employment claims, date ranges, availability claims, and numerical impact metrics.
- The legacy résumé PDF is excluded from `public/` and production output because it contains personal contact details. Historical copies can still exist in Git and on the currently deployed website until an authorized deployment removes them.
- Company formation dates differ across old résumé and LinkedIn (2022/2023); no formation date is published.
- Older personal projects are retained as historical descriptions without asserting their current availability.

## Visual and accessibility checks

Responsive layouts, semantic headings and landmarks, descriptive image alternatives, skip link, visible keyboard focus, native keyboard-operable disclosure, zoom-friendly viewport, reduced-motion support. No third-party scripts, remote fonts, trackers, forms or dead social placeholders. Check desktop and mobile in a browser before publication.

## Content refresh

Everforest Pro is a maintained fork of sainnhe/everforest-vscode. Feature descriptions and attribution were checked against the public repository and Marketplace listing. The approaching 10,000 downloads figure and upstream archival direction were supplied by the owner on 25 October 2026; the count is dated rather than presented as live data. Scriptum Deus and PrayPoint are nonprofit initiatives per the owner. studiu.net and God Mindset are hosted Bible-study and discussion projects.

Public contact uses LinkedIn. No email address, phone number, street address, résumé, or city is intentionally published in the generated page.

The current portrait was extracted and enhanced from the owner-supplied quote banner using image editing. It is a reconstructed higher-resolution asset, not an untouched high-resolution camera original. The banner text is not republished.

The selected career section highlights recent architecture and leadership work. The expandable career history covers Code4Nord, NTT DATA Romania, NetMatch, and Bettersoft using details supplied from the owner's LinkedIn experience page on 25 October 2026.
