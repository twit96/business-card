# card.tylerwittig.com

Personal business card landing page, linked via QR code on my physical business cards.

Built with React + Vite, deployed at [card.tylerwittig.com](https://card.tylerwittig.com).

## Stack

- Vite
- React
- CSS Modules

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Testing

Run smoke tests across Chromium, Firefox, and WebKit:

```bash
npx playwright test
```

To slow down test execution for local debugging:
```bash
npx playwright test --headed
```
Add `slowMo` to `playwright.config.js` `launchOptions` to slow between actions.

## Known Issues
- Photo renders with a brief scale artifact on initial load in Chrome.
  Firefox unaffected. Root cause unclear; suspected Chrome compositing
  behavior with object-fit on a grid child.
