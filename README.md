# WeddingGram

Welcome to **WeddingGram**, a simple and elegant photo gallery for sharing
wedding memories.  This project is a static site that can be hosted on
GitHub Pages or any other static hosting service.  The layout takes cues from
Instagram’s clean design—featuring a top navigation bar, responsive grid and
light modal popups—yet it remains lightweight and easy to customise.

## Features

- Responsive grid for displaying photos.  Images are presented as cards with
  soft shadows and hover effects, inspired by Instagram’s visual aesthetic【160949175500370†L61-L100】.
- Modal viewer: clicking on a photo opens a larger version with its caption
  displayed underneath, emulating the interactive experience of social media
  platforms【160949175500370†L106-L117】.
- Simple, accessible markup and styling.  Uses CSS Grid and Flexbox for
  layout, following modern web best practices【160949175500370†L93-L100】.

## Folder Structure

```
wedding_site/
├── images/        # Place your JPG/PNG images here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
├── index.html     # Main page with the gallery
├── style.css      # Styling for the site
├── script.js      # Modal interactivity
└── README.md      # This document
```

## How to Use

1. **Hosting:** fork or clone this repository into your GitHub account and enable
   GitHub Pages.  Set the source to the `main` branch (or `docs` folder if you
   prefer).  After a few minutes, your gallery will be live at
   `https://yourusername.github.io/your-repo-name/`.
2. **Adding photos:** copy your wedding images into the `images` directory and
   reference them in `index.html`.  Each photo is represented by a
   `<div class="photo-card">` block.  Duplicate an existing block and update
   the `src` attribute and caption text to match your new image.
3. **Customising:** feel free to edit `style.css` to change colours, fonts,
   spacing or other design elements.  You can also modify `script.js` to
   implement additional features like like‑buttons or comments.

## Attributions

This template was built by drawing inspiration from articles describing how to
recreate Instagram’s web interface using HTML, CSS and JavaScript.  Such guides
explain how the original platform uses a clean layout with a header, navigation
elements, a feed comprised of cards, and interactive components like
modals【160949175500370†L61-L103】.  The styling here follows similar
principles—utilising CSS Grid and Flexbox, neutral colours and intuitive
navigation—to achieve a familiar user experience.

The example photos in the `images` folder are AI‑generated placeholders and can
be replaced with your own wedding pictures.  No real people are depicted.