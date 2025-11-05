# Slide Image Specifications for Home Page Hero Section

## Image Dimensions

### **Recommended: Single Responsive Image**
- **Width:** 1920px (minimum)
- **Height:** 1080px (16:9 aspect ratio)
- **Format:** JPG or WebP (optimized for web)
- **File Size:** Under 500KB per image (for fast loading)
- **Quality:** High quality (80-90% compression)

### Why These Dimensions?
- **Desktop:** Full width at 1920px width, 700px height (cropped from 1080px)
- **Tablet:** Responsive scaling, maintains aspect ratio
- **Mobile:** Responsive scaling, maintains aspect ratio
- The current implementation uses `bg-cover` which will automatically crop/center the image to fit all screen sizes

## Technical Details

### Current Implementation:
- **Desktop:** 1920px width × 700px height
- **Tablet:** Scales proportionally
- **Mobile:** 500px height minimum, full width

### Image Display:
- Images are used as **background images** with `cover` mode
- Images will be **centered and cropped** to fit the container
- **Important:** Keep important content/text in the **center 60%** of the image (safe zone) to avoid cropping on mobile

## Design Guidelines for Designer

### Safe Zone (Important Content Area):
- Keep all important visual elements in the **center 60%** of the image
- Avoid placing important text or graphics near the edges
- Text overlay will be added via code, so images should be background-focused

### Image Content:
- **Background:** Business/global trade related imagery
- **Style:** Professional, modern, clean
- **Colors:** Works well with dark overlay (black/70% opacity)
- **Focus:** Background imagery that doesn't compete with text overlay

## File Requirements

### Format Options:
1. **JPG** (recommended) - Best compatibility, smaller file size
2. **WebP** (preferred for modern browsers) - Better compression, same quality
3. **PNG** (only if transparency needed) - Larger file size

### Naming Convention:
- `slide-1.jpg`, `slide-2.jpg`, `slide-3.jpg`
- Or descriptive: `hero-global-trade.jpg`, `hero-verified-buyers.jpg`, `hero-trusted-partner.jpg`

## Alternative: Separate Mobile Images (Optional)

If designer wants to provide separate mobile-optimized versions:
- **Desktop:** 1920px × 1080px (16:9)
- **Mobile:** 1080px × 1920px (9:16 portrait) - for vertical mobile viewing

*Note: This requires code changes, but provides better mobile experience*

## Quick Checklist for Designer

- [ ] Width: 1920px minimum
- [ ] Height: 1080px (16:9 ratio)
- [ ] Format: JPG or WebP
- [ ] File size: Under 500KB each
- [ ] Important content in center 60% (safe zone)
- [ ] Professional, background-focused imagery
- [ ] Works well with dark overlay

