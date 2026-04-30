# Project Assets

This folder contains images and media for the portfolio projects.

## How to Add Images & Videos

1. **Add your media files** to this `/public/assets/` folder
   - **Images**: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`
   - **Videos**: `.mp4`, `.webm`
   - **Note**: `.mov` files need to be converted to `.mp4` first (use CloudConvert, HandBrake, or any video converter)
   - Recommended: Use descriptive filenames (e.g., `innerra_dashboard.png`, `museum_guide_demo.mp4`)

2. **Reference media in the code** using `/assets/filename.ext`
   - Example: `/assets/digital_ticketing.png`
   - Example: `/assets/demo_video.mp4`

## Current Project Images

### Innerra
- `innerra_1.PNG` through `innerra_5.PNG` - Innerra app screenshots

### Internal RAG Knowledge Assistant (GIC)
- `gic_1.png`, `gic_2.png` - RAG system screenshots

### Digital Ticketing Platform
- `digital_ticketing.png` - Digital ticketing interface

### AI-Powered Museum Guides
- `museum_guide_1.jpg` through `museum_guide_5.JPG` - Museum guide app screenshots
- `museum_guide.jpg` - Legacy image (can be removed)

### Adding More Images to Projects

To add multiple images to a project carousel, edit `/src/app/components/FeaturedProjects.tsx`:

```tsx
<ProjectCarousel images={[
  '/assets/image1.png',
  '/assets/image2.jpg',
  '/assets/image3.png'
]} />
```

The carousel will automatically:
- Show navigation arrows (if multiple images)
- Auto-play through images
- Show dot indicators
- Pause on hover

## Media Recommendations

### Images
- **Aspect Ratio**: 16:9 or 4:3 works best
- **Size**: Optimize images to be under 500KB for faster loading
- **Dimensions**: 1200px width minimum for best quality
- **GIFs**: Animated GIFs work great for showing interactions!

### Videos
- **Format**: Convert `.mov` files to `.mp4` (best browser support)
- **Size**: Keep under 5MB for good performance
- **Duration**: 5-15 seconds works best for demos
- **Settings**: Videos will auto-play, loop, and be muted
- **Aspect Ratio**: 16:9 recommended

## Converting .mov to .mp4

Use any of these free tools:
- **Online**: CloudConvert.com, FreeConvert.com
- **Desktop**: HandBrake, VLC Media Player
- **Mac**: QuickTime Player (File > Export As > 1080p)
