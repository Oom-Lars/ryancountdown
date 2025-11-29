# Setup Instructions 🚀

## Prerequisites

Make sure you have Node.js installed on your computer:
- Download from: https://nodejs.org/
- Recommended version: 18.x or higher

## Installation Steps

### 1. Open Terminal/Command Prompt

Navigate to the project folder:
```bash
cd "E:\Github Repos\ryancountdown"
```

### 2. Install Dependencies

Run this command to install all required packages:
```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

### 3. Run Development Server

Start the development server:
```bash
npm run dev
```

### 4. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

You should see your countdown website! 🎉

## Making Changes

1. **Edit any file** in the `app/` folder
2. **Save the file**
3. **The browser will automatically refresh** with your changes

## Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Vercel will automatically deploy your site
5. You'll get a free URL like: `your-site.vercel.app`

### Option 2: Netlify

1. Go to https://netlify.com
2. Drag and drop your project folder
3. Your site will be live in minutes

### Option 3: GitHub Pages

Requires additional configuration for Next.js static export.

## Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org/

### Port 3000 already in use
- Use a different port: `npm run dev -- -p 3001`
- Or stop the other process using port 3000

### Changes not showing
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart the development server

### Styling looks broken
- Make sure Tailwind CSS is properly installed
- Check that `globals.css` is imported in `layout.tsx`

## File Structure

```
ryancountdown/
├── app/
│   ├── components/          # All React components
│   │   ├── CountdownTimer.tsx
│   │   ├── LoveReminders.tsx
│   │   ├── CatPets.tsx
│   │   ├── Navigation.tsx
│   │   ├── LoveNotes.tsx
│   │   ├── Goals.tsx
│   │   ├── Quotes.tsx
│   │   ├── Activities.tsx
│   │   └── ReasonsILoveYou.tsx (bonus)
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/
│   └── images/              # Put your images here
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Next Steps

1. **Personalize the content** - See CUSTOMIZATION_GUIDE.md
2. **Add your photos** - Put them in `public/images/`
3. **Customize colors** - Edit `tailwind.config.js`
4. **Add more features** - See suggestions in CUSTOMIZATION_GUIDE.md

## Adding the "Reasons I Love You" Page

If you want to add the bonus component:

1. Open `app/components/Navigation.tsx`
2. Add to the pages array:
```tsx
{ id: 'reasons', label: 'Reasons', icon: Heart }
```

3. Open `app/page.tsx`
4. Import the component:
```tsx
import ReasonsILoveYou from './components/ReasonsILoveYou'
```

5. Add to the page rendering:
```tsx
{currentPage === 'reasons' && <ReasonsILoveYou />}
```

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

## Tips

- **Save often** - Changes auto-refresh in development
- **Use the browser console** (F12) to debug issues
- **Test on mobile** - Use browser dev tools to test responsive design
- **Commit to Git** - Save your progress regularly

---

Enjoy building your love story! 💜✨
