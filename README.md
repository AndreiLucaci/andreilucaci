# Andrei Lucaci / AEL Engineering

Personal portfolio and company website. Dependency-free HTML, CSS, and a small progressive-enhancement script. The content, navigation, contact links and project details work without JavaScript. Existing image assets and the older résumé are retained; the old Bootstrap/jQuery assets are no longer loaded.

## Local development

Requires Node.js 22 or newer. No dependency installation needed.

- `npm run dev` — http://127.0.0.1:4173
- `npm run build` — copies the static production website to `dist/`
- `npm run preview` — serves `dist/` on the same port (stop the dev server first)

Netlify configuration is explicit in `netlify.toml`: Node 22, `npm run build`, publish `dist`. No environment variables, functions, or client-side routing are needed. No deployment was performed as part of the redesign. Check the existing Netlify dashboard settings before the next authorized deployment; no prior tracked Netlify configuration existed.

## Content and provenance

Refreshed 25 October 2026. No live GitHub API requests, changing star counters, client logos implying endorsements, or invented performance claims.

- Existing website: Fullview founding engineer / tech lead, backend and AWS architecture; GoodLeap architecture, engineering and seven-person team leadership; ZibraSport; JSONF, QR generator, Minesweeper, Scriptum Deus, studiu.net and God Mindset.
- https://github.com/AndreiLucaci — public profile: ifm moneo, Archive360 Unity, architecture practices, stack, PrayPoint, Git shortcuts and encoding utilities.
- https://ro.linkedin.com/in/lucaciandrei — corroborates Archive360 and industrial software experience.
- https://www.linkedin.com/company/ael-engineering — company services and founder relationship.
- PureKey local repository `/Users/andreilucaci/Documents/GIT/ios/PureKey/README.md`, `LICENSE`, and website documentation — English iOS keyboard, SwiftUI/UIKit, Apache 2.0, no autocorrect/predictions/automatic capitalization, precise cursor control. Keyboard image copied from its actual simulator capture at `src/web/public/images/keyboard-light.jpg`. Source remote: https://github.com/AndreiLucaci/PureKey. Website: https://purekey.dev.
- Email retained from the existing site's contact source and résumé: lucaciandrei@outlook.com.

## Owner verification before publication

- PureKey is shown as preparing for release, as instructed and documented. Confirm the release state before changing it to available. Its public GitHub visibility could not be independently verified; the source link matches the local repository remote.
- Confirm current roles, dates, company service wording and contact email. The website deliberately avoids current-employment claims, date ranges, availability claims, and numerical impact metrics.
- The old résumé PDF remains at its original URL, but is not promoted because it is from 2024. Replace it before adding a CV call to action.
- Company formation dates differ across old résumé and LinkedIn (2022/2023); no formation date is published.
- Older personal projects are retained as historical descriptions without asserting their current availability.

## Visual and accessibility checks

Responsive layouts, semantic headings and landmarks, descriptive image alternatives, skip link, visible keyboard focus, native keyboard-operable disclosure, zoom-friendly viewport, reduced-motion support. No third-party scripts, remote fonts, trackers, forms or dead social placeholders. Check desktop and mobile in a browser before publication.
