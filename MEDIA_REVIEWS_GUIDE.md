# Media Reviews Guide

## How to Add Media Reviews

Edit `/data/content.ts` and add entries to the `mediaReviews` array.

### Review Structure

```typescript
{
  title: "Movie/Show/Book/Game Title",
  type: "Movie" | "TV Show" | "Book" | "Game" | "Album" | "Podcast" | "Band" | "Music" | "Other",
  icon: "/images/media/your-icon.png", // Optional - placeholder emoji used if not provided
  rating: 8, // Optional - 1-10 scale
  review: "Your review text here. Write as much as you want!",
  date: "2025-01-15", // Optional - when you watched/read/played it
  span: 1 | 2 | 3, // Optional - card width: 1 = 1/3 width (default), 2 = 2/3 width, 3 = full width
}
```

### Example Entries

**Short Review (1/3 width):**
```typescript
{
  title: "Dune: Part Two",
  type: "Movie",
  icon: "/images/media/dune2.jpg",
  rating: 9,
  review: "Absolutely stunning cinematography and world-building.",
  date: "2025-01-20",
  // span defaults to 1 if not specified
}
```

**Medium Review (2/3 width):**
```typescript
{
  title: "Inception",
  type: "Movie",
  rating: 10,
  review: "A mind-bending masterpiece that explores dreams within dreams. Christopher Nolan's direction is flawless, and the score by Hans Zimmer is iconic.",
  span: 2,
}
```

**Long Review (Full width):**
```typescript
{
  title: "The Lord of the Rings Trilogy",
  type: "Movie",
  rating: 10,
  review: "An epic fantasy trilogy that set the standard for all fantasy films to come. Peter Jackson's adaptation of Tolkien's masterpiece is nothing short of perfect. The attention to detail, the practical effects mixed with CGI, the incredible score by Howard Shore, and the phenomenal performances from the entire cast make this a timeless classic. Each film stands on its own while contributing to a larger narrative that feels both intimate and grand in scale.",
  span: 3,
}
```

### Adding Icons

1. Place media icons/images in `/public/images/media/`
2. Reference them as `/images/media/filename.jpg` in the `icon` field
3. If no icon is provided, a placeholder emoji (🎬) will be shown

### Layout

- Reviews display in a flexible 3-column grid on desktop
- Each card shows: Icon (left) + Title, Rating, Type, Date, Review (right)
- Cards are responsive and stack on mobile
- **Width Control**: Use the `span` property to control card width:
  - `span: 1` (default) - Takes 1/3 of the row width
  - `span: 2` - Takes 2/3 of the row width
  - `span: 3` - Takes full row width (great for longer reviews!)
- Full-width cards automatically get larger icons and text for better readability

## Tips

- Write reviews in your own voice
- Include what you liked/disliked
- Mention standout elements (acting, cinematography, writing, etc.)
- Keep it authentic and personal!

