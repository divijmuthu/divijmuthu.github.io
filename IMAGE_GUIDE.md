# Image Placement Guide

## Where to Put Images

All images should be placed in the `/public/images/` directory.

### Current Image Structure:
```
/public/images/
  ├── profile.jpg          # Your profile picture (headshot)
  ├── ddos-research.png    # DDoS ML research thumbnail
  ├── sensor-research.png  # IEEE MEMS 2026 research thumbnail (TODO: add this)
  └── sensor-project.png   # Real-Time Sensor Simulation project thumbnail (TODO: add this)
```

## Image Requirements

### Profile Image
- **Path**: `/public/images/profile.jpg` (or `.png`)
- **Recommended size**: 400x400px or larger (square)
- **Format**: JPG or PNG
- **Current**: Already set up from your existing screenshot

### Research/Project Thumbnails
- **Path**: `/public/images/[project-name].png`
- **Recommended size**: 400x300px or similar (landscape)
- **Format**: PNG or JPG
- **Usage**: These appear in the ProjectCard components on the right side

### Adding New Images

1. **Place the image file** in `/public/images/`
2. **Update the path** in `/data/content.ts`:
   ```typescript
   thumbnail: "/images/your-image-name.png"
   ```
   Note: Use `/images/` (not `/public/images/`) - Next.js serves files from `/public` automatically.

3. **For the sensor project**, add your image as:
   - `/public/images/sensor-project.png`
   - The path is already configured in `content.ts`

## Image Optimization Tips

- Keep file sizes reasonable (< 500KB per image)
- Use PNG for images with transparency
- Use JPG for photos
- Consider compressing images before adding them
- The Next.js Image component will handle optimization during build

## Current Status

✅ Profile image: Set up  
✅ DDoS research image: Set up  
⏳ Sensor research image (IEEE MEMS 2026): **TODO - Add image for `/public/images/sensor-research.png`**  
⏳ Sensor project image: **TODO - Add image for `/public/images/sensor-project.png`**

