# Images Folder

Place any custom images here that you want to use in your countdown website.

## Suggested Images

- Photos of you two together
- Screenshots from games you play together
- Favorite movie posters (Divergent, The Fault in Our Stars, Alien vs Predator)
- Cat photos (if you want to use real photos of grey and tuxedo cats)
- Places you want to visit together
- Sushi restaurant photos

## Usage

To use images in your components, import them like this:

```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>
```

Or use as background:

```tsx
<div style={{ backgroundImage: 'url(/images/your-image.jpg)' }}>
  Content here
</div>
```
