# Media Reviews Guide

## How to Add Media Reviews

Edit `/data/content.ts` and add entries to the `mediaReviews` array.

### Review Structure

```typescript
{
  title: "Movie/Show/Book/Game Title",
  type: "Movie" | "TV Show" | "Book" | "Game" | "Album" | "Podcast" | "Other",
  icon: "/images/media/your-icon.png", // Optional - placeholder emoji used if not provided
  rating: 8, // Optional - 1-10 scale
  review: "Your review text here. Write as much as you want!",
  date: "2025-01-15", // Optional - when you watched/read/played it
}
```

### Example Entry

```typescript
{
  title: "Dune: Part Two",
  type: "Movie",
  icon: "/images/media/dune2.jpg",
  rating: 9,
  review: "Absolutely stunning cinematography and world-building. Denis Villeneuve continues to deliver masterful adaptations. The sound design alone is worth the price of admission.",
  date: "2025-01-20",
}
```

### Adding Icons

1. Place media icons/images in `/public/images/media/`
2. Reference them as `/images/media/filename.jpg` in the `icon` field
3. If no icon is provided, a placeholder emoji (🎬) will be shown

### Layout

- Reviews display in a 3-column grid on desktop
- Each card shows: Icon (left) + Title, Rating, Type, Date, Review (right)
- Cards are responsive and stack on mobile

## Tips

- Write reviews in your own voice
- Include what you liked/disliked
- Mention standout elements (acting, cinematography, writing, etc.)
- Keep it authentic and personal!

