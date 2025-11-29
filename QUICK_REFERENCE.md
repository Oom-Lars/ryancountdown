# Quick Reference Guide 💜

## Common Tasks

### Change the Countdown Date
**File**: `app/components/CountdownTimer.tsx`
**Line**: Look for `new Date('2025-12-20T00:00:00')`
**Change to**: Your desired date

### Edit Love Notes
**File**: `app/components/LoveNotes.tsx`
**Edit**: The `notes` array with your personal messages

### Change Love Reminder Timing
**File**: `app/components/LoveReminders.tsx`
- Pop-up interval: Line with `setInterval(showReminder, 15000)` - change `15000` (15 seconds)
- Display duration: Line with `setTimeout(() => setShowMessage(false), 5000)` - change `5000` (5 seconds)

### Add/Edit Goals
**File**: `app/components/Goals.tsx`
**Edit**: The `goals` array in the `useState`

### Add More Quotes
**File**: `app/components/Quotes.tsx`
**Edit**: The `quotes` array

### Change Cat Names/Messages
**File**: `app/components/CatPets.tsx`
**Edit**: 
- Cat names: Look for "Fluffy" and "Kai" text
- Messages: Edit `catMessages` object

### Change Theme Colors
**File**: `tailwind.config.js`
**Edit**: The `colors` section under `extend`

Current colors:
- `divergent-purple`: '#6B46C1'
- `divergent-dark`: '#0F0F0F'
- `divergent-light`: '#F5F5F5'

### Change Fonts
**File**: `app/globals.css`
**Line**: The `@import` statement at the top
**Also edit**: `tailwind.config.js` fontFamily section

## Component Locations

| Feature | File |
|---------|------|
| Countdown Timer | `app/components/CountdownTimer.tsx` |
| Love Reminders | `app/components/LoveReminders.tsx` |
| Cat Pets | `app/components/CatPets.tsx` |
| Navigation | `app/components/Navigation.tsx` |
| Love Notes | `app/components/LoveNotes.tsx` |
| Goals/Bucket List | `app/components/Goals.tsx` |
| Quotes | `app/components/Quotes.tsx` |
| Activities | `app/components/Activities.tsx` |
| Reasons I Love You | `app/components/ReasonsILoveYou.tsx` |
| Main Page | `app/page.tsx` |
| Global Styles | `app/globals.css` |

## Timing Reference

| Feature | Timing |
|---------|--------|
| Love Reminders - First Appearance | 3 seconds after load |
| Love Reminders - Interval | Every 15 seconds |
| Love Reminders - Duration | 5 seconds |
| Fluffy Messages | Every 50 seconds |
| Kai Messages | Every 55 seconds |
| Cat Message Duration | 4 seconds |

## Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Purple | #6B46C1 | Main theme color |
| Pink | #EC4899 | Hearts, accents |
| White | #FFFFFF | Text, highlights |
| Black | #0F0F0F | Background, contrast |
| Indigo | #6366F1 | Secondary accents |

## Icon Reference

Using Lucide React icons: https://lucide.dev/icons

Common icons in the project:
- `Heart` - Love, romance
- `Sparkles` - Magic, special moments
- `Calendar` - Dates, events
- `MessageCircle` - Messages, communication
- `Target` - Goals, objectives
- `Quote` - Quotes, text
- `Music` - Songs, playlist
- `Image` - Photos, gallery
- `Cookie` - Treats, rewards
- `CheckCircle2` - Completed items

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## Browser Testing

- **Chrome/Edge**: F12 for DevTools
- **Firefox**: F12 for DevTools
- **Safari**: Cmd+Option+I for DevTools

Test responsive design:
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select different device sizes

## File Size Limits

- Keep images under 1MB for fast loading
- Optimize images before adding to `public/images/`
- Use WebP format for better compression

## Best Practices

1. **Always test after changes** - Run `npm run dev` and check in browser
2. **Save frequently** - Changes auto-refresh in development
3. **Use meaningful names** - When adding new content
4. **Keep backups** - Commit to Git regularly
5. **Test on mobile** - Many users will view on phones

## Common Customizations

### Add a New Page
1. Create component in `app/components/YourComponent.tsx`
2. Add to navigation in `Navigation.tsx`
3. Import and add route in `page.tsx`

### Change Background
**File**: `app/layout.tsx`
**Edit**: The `className` on the `<body>` tag

### Add Custom Animation
**File**: `tailwind.config.js`
**Add to**: `animation` and `keyframes` sections

### Change Card Style
**File**: `app/globals.css`
**Edit**: `.romantic-card`, `.love-note-card`, or `.quote-card` classes

## Emoji Reference

Used in the project:
- 💜 Purple heart (main theme)
- 🐱 Grey cat (Fluffy)
- 🐈⬛ Tuxedo cat (Kai)
- 🍣 Sushi
- 🎬 Movies
- 🌾 Stardew Valley
- 🎮 Gaming
- 💍 Forever/marriage
- ✨ Sparkles/magic
- 💕 Love
- 🏡 Home/future

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Lucide Icons**: https://lucide.dev

---

Keep this handy for quick edits! 💜
