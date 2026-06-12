# Valentine's Day Page — Plan

A two-screen React app: a soft, romantic login, then a main page where a winding "train rail" snakes down the screen with polaroid photos and little notes hung along it, while a love song plays in the background.

## Screens

### 1. Login (`/`)

- Centered card on a warm, blush-and-cream background with subtle floating hearts.
- Fields: **Your name** + **Passcode**.
- Frontend-only check: passcode hardcoded (e.g. `bemyvalentine`). Wrong code shakes the card and shows a sweet error.
- On success: store `{name, ok:true}` in `sessionStorage` and route to `/rail`.

### 2. Main rail page (`/rail`)

- **Layout:** vertical winding path — an SVG curve (gentle S-shape) running down the page, styled like a railway (two parallel lines + ties). Chosen because it reads better on mobile and gives a storybook feel.
- **Polaroids:** 6–8 placeholder photos (Unsplash romantic stock URLs) "hung" along the rail at alternating left/right anchor points, each slightly rotated, with a handwritten-style caption underneath.
- **Greeting:** "Happy Valentine's, {name} 💌" pinned at the top.
- **Background music:** fixed audio player bottom-right with play/pause + mute toggle. Starts muted (browsers block autoplay with sound); one click unmutes. Placeholder MP3 URL, easy to swap.
- **Scroll feel:** polaroids fade/slide in as they enter the viewport (CSS + IntersectionObserver, no extra libs).
- **Guard:** if `sessionStorage` flag missing, redirect to `/`.

## Design direction

- Palette: cream `#FFF6F0`, blush `#F7C8C8`, deep rose `#B23A48`, ink `#2B1B1B`.
- Try to use almond blossom (van gogh) colors on the pallet
- Type: "Caveat" (handwritten) for captions/title, "Inter" for UI.
- Polaroid: white frame, soft shadow, slight rotation per card.
- Rail: dashed center line + ties, drawn with SVG so it scales.

Make it mobile friendty to a iphone 12 screen

## Technical notes

- New routes: `src/routes/index.tsx` (login), `src/routes/rail.tsx` (main).
- New components: `Polaroid.tsx`, `Rail.tsx` (SVG path generator), `BackgroundAudio.tsx`.
- Data: `src/data/memories.ts` exports an array of `{src, caption, date}` placeholders — easy to edit later.
- Fonts: load Caveat + Inter via Google Fonts link in `__root.tsx` head.
- No backend, no Lovable Cloud. All state in `sessionStorage`.
- Update `__root.tsx` meta: title "Be My Valentine 💌", matching description and OG tags.

## Out of scope (for now)

- Real auth / accounts.
- Uploading or editing photos from the UI.
- Video background.
- After you approve, I'll build it and you can swap the placeholder photos, captions, passcode, and song URL whenever you're ready.