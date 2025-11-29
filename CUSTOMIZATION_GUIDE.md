# Customization Guide 💜

## Quick Customization Checklist

### 1. Love Notes (IMPORTANT - Personalize These!)
**File**: `app/components/LoveNotes.tsx`

The current love notes are templates. Replace them with your own heartfelt messages! Each note has:
- `title`: The heading of the note
- `content`: Your personal message

### 2. Love Reminders
**File**: `app/components/LoveReminders.tsx`

Edit the `loveMessages` array to add your own sweet reminders. Currently set to:
- Pop up every 15 seconds
- Last for 5 seconds
- 15 different messages

### 3. Goals/Bucket List
**File**: `app/components/Goals.tsx`

Current goals:
- Sushi Date 🍣
- Watch Alien vs Predator Franchise 🎬
- Complete Stardew Valley Together 🌾

Add more by adding objects to the `goals` array.

### 4. Quotes
**File**: `app/components/Quotes.tsx`

Add more quotes from your favorite movies/books. Current sources:
- The Fault in Our Stars
- Divergent
- Pride & Prejudice

### 5. Activities - Memory Timeline
**File**: `app/components/Activities.tsx`

Update the memory timeline with your actual relationship milestones:
- When you first met
- First "I Love You"
- Important moments
- Inside jokes

### 6. Activities - Shared Playlist
Add your actual favorite songs that remind you of each other.

## Suggested Additional Features

### 1. Photo Gallery
Create a new component for sharing photos:
```tsx
// app/components/PhotoGallery.tsx
- Upload and display photos of you two
- Captions for each photo
- Slideshow mode
```

### 2. Voice Messages
Add ability to record/upload voice messages for each other.

### 3. Countdown Milestones
Add special messages at certain countdown points:
- 100 days left
- 50 days left
- 1 week left
- 1 day left

### 4. Love Letter Generator
A fun tool that helps compose romantic messages using quotes and prompts.

### 5. Couple's Journal
A shared space to write daily thoughts and reflections.

### 6. Game Stats Tracker
Since you both love gaming:
- Track games played together
- Hours spent gaming
- Achievements unlocked together

### 7. Future Planning Calendar
Interactive calendar for planning:
- Future visits
- Game sessions
- Movie nights
- Important dates

### 8. "Reasons I Love You" List
An ever-growing list of reasons, can add one each day.

### 9. Virtual Date Ideas
List of activities you can do together online:
- Watch parties
- Virtual cooking together
- Online escape rooms
- Co-op game suggestions

### 10. Mood Tracker
Track both of your moods over time to see patterns and support each other better.

## Color Customization

Current theme colors in `tailwind.config.js`:
- Primary Purple: `#6B46C1`
- Dark: `#0F0F0F`
- Light: `#F5F5F5`

To change colors, edit the `colors` section in `tailwind.config.js`.

## Font Customization

Current fonts:
- Headers: Playfair Display (serif)
- Body: Inter (sans-serif)

To change fonts:
1. Update the Google Fonts import in `app/globals.css`
2. Update the `fontFamily` in `tailwind.config.js`

## Cat Customization

**File**: `app/components/CatPets.tsx`

Current cats:
- Fluffy (🐱 - grey cat) - bottom left
- Kai (🐈⬛ - tuxedo cat) - bottom right

You can:
- Change their names
- Change their messages
- Add more cats
- Use actual photos instead of emojis

## Animation Timing

### Love Reminders
- First appears: 3 seconds after page load
- Interval: Every 15 seconds
- Duration: 5 seconds

### Cat Messages
- Fluffy: Every 50 seconds
- Kai: Every 55 seconds

To change timing, edit the `setInterval` values in the respective component files.

## Adding New Pages

1. Create a new component in `app/components/`
2. Add it to the navigation in `app/components/Navigation.tsx`
3. Add the route in `app/page.tsx`

Example:
```tsx
// In Navigation.tsx
{ id: 'newpage', label: 'New Page', icon: YourIcon }

// In page.tsx
{currentPage === 'newpage' && <YourNewComponent />}
```

## Tips for Making It More Personal

1. **Use Real Photos**: Replace emoji cats with actual photos
2. **Add Inside Jokes**: Include references only you two understand
3. **Customize Messages**: Make every message authentic to your relationship
4. **Add Your Games**: List the actual games you play together
5. **Real Memories**: Replace template memories with your actual story
6. **Favorite Songs**: Add your actual playlist
7. **Future Plans**: Be specific about your dreams together

## Need Help?

- Check the README.md for basic setup
- Each component file has comments explaining its purpose
- Tailwind CSS docs: https://tailwindcss.com/docs
- Next.js docs: https://nextjs.org/docs
- Lucide icons: https://lucide.dev/icons

---

Remember: The most important thing is making this personal and meaningful to your relationship! 💜
