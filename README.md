# Gradient Card Component (React)

A reusable React card component that renders details (image, title, description)
from an array of objects passed as props, with an animated gradient border.

## How to run

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (default: http://localhost:5173/).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
GradientCardComponent/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point, mounts <App />
    ├── App.jsx               # Maps cardsData array -> <Card /> components
    ├── App.css               # Page layout: dark theme, responsive grid
    ├── index.css             # Global resets / base styles
    ├── components/
    │   ├── Card.jsx          # Reusable card component (props-driven)
    │   └── Card.css          # Card styles + animated gradient border
    └── data/
        └── cardsData.js      # Array of 12 card objects (the props source)
```

## Usage

```jsx
import Card from "./components/Card.jsx";

<Card
  image="https://picsum.photos/seed/card1/300/300"
  title="Card 1"
  description="This is card 1 description"
/>
```

| Prop          | Type   | Required | Description                              |
| ------------- | ------ | -------- | ---------------------------------------- |
| `image`       | string | yes      | URL of the card image                    |
| `imageAlt`    | string | no       | Alt text (falls back to `title`)         |
| `title`       | string | yes      | Heading shown below the image            |
| `description` | string | yes      | Supporting text shown under the title    |

## Overview of decisions

1. **Vite + React 18** — lightweight, fast dev server and simple project
   structure, keeping the focus on the component itself.

2. **Props-driven reusable component** — `Card.jsx` accepts `image`, `imageAlt`,
   `title`, and `description` as props. `App.jsx` holds an array of 12 objects
   in `src/data/cardsData.js` and renders one `<Card />` per object using
   `.map()`, with `card.id` as the React `key` for stable list rendering.

3. **Gradient border technique** — CSS does not support an animatable gradient
   `border` directly, so the "border" is a 3px padding on the outer `.card`
   element whose `background` is a multi-stop `linear-gradient` cycling through
   red, blue, and green. A black `.card-content` box sits on top, leaving only
   the 3px padding visible as a gradient frame. The card body uses a fixed
   square shape (320x320 via `aspect-ratio: 1 / 1`).

4. **Animated border colors** — the gradient uses 400% `background-size` and a
   `background-position` keyframe animation (8s loop), so border colors smoothly
   cycle through the palette, matching the reference where border colors shift
   over time. A `prefers-reduced-motion` media query disables the animation for
   accessibility.

5. **Responsive grid** — CSS Grid shows 3 columns on desktop (as in the
   reference), 2 columns below 900px, and 1 column below 600px, so the page
   works on any screen size.

6. **Dark theme styling** — black page/card background and indigo/violet serif
   text with a gradient-clipped heading to match the reference design.

7. **Images** — seeded `picsum.photos` URLs are used so every card displays a
   stable, unique image without bundling binary assets. Swap the `image` values
   in `cardsData.js` to use your own images.
