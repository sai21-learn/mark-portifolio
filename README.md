# Mark Zuckerberg Portfolio

A modern, responsive portfolio website built with Next.js 15, inspired by cto.new with calm colors, smooth animations, and dark/light theme support.

## Features

- 🎨 **Modern Design**: Calm, soft color palette with a soft blue accent - no gradients
- 🌓 **Dark/Light Mode**: Theme toggle with persistent preference via next-themes
- ✨ **Smooth Animations**: Minimal framer-motion animations with reduced motion support
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: High contrast, keyboard navigation, ARIA labels, and semantic HTML
- 🚀 **Performance**: Built with Next.js 15 App Router for optimal performance
- 📧 **Contact Form**: Integrated with Resend API for email delivery
- 📰 **Newsletter**: Supabase integration for newsletter subscriptions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Email**: Resend
- **Database**: Supabase

## Project Structure

```
├── app/
│   ├── actions/
│   │   └── subscribe.ts          # Newsletter subscription server action
│   ├── api/
│   │   └── contact/
│   │       └── route.ts           # Contact form API endpoint
│   ├── layout.tsx                 # Root layout with theme provider
│   ├── page.tsx                   # Main page with all sections
│   └── globals.css                # Global styles and CSS variables
├── components/
│   ├── sections/                  # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── timeline.tsx
│   │   ├── media.tsx
│   │   ├── gallery.tsx
│   │   ├── contact.tsx
│   │   └── newsletter.tsx
│   ├── shared/                    # Shared components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── theme-provider.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── container.tsx
│   │   ├── section-header.tsx
│   │   ├── social-links.tsx
│   │   ├── project-card.tsx
│   │   ├── timeline-item.tsx
│   │   ├── press-item.tsx
│   │   └── lightbox.tsx
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── animations.ts              # Framer Motion animation variants
│   └── utils.ts                   # Utility functions
└── public/
    ├── images/                    # Image assets
    ├── cv/                        # CV/Resume files
    └── og.png                     # Open Graph image
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mark-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO=moulisai2109@gmail.com
CONTACT_FROM=portfolio@yourdomain.com
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Configuration

### Email (Resend)

The contact form uses Resend for email delivery. If `RESEND_API_KEY` is not configured, the form will still work in demo mode and log submissions to the console.

To set up Resend:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add the key to your `.env` file
4. Configure `CONTACT_FROM` with a verified domain email
5. Set `CONTACT_TO` to the email where you want to receive messages

### Newsletter (Supabase)

The newsletter signup uses Supabase for storing email addresses. If Supabase is not configured, the form will show an informative message.

To set up Supabase:

1. Create a project at [supabase.com](https://supabase.com)
2. Create a table named `newsletter_subscribers`:

```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Add your Supabase URL and anon key to `.env`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

### Environment Variables on Vercel

Add the following environment variables in your Vercel project settings:

- `RESEND_API_KEY`
- `CONTACT_TO`
- `CONTACT_FROM`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## Sections

### Hero
Large title, subtitle, call-to-action buttons, and social links with smooth entrance animations.

### About/Bio
Personal introduction with avatar and biographical information.

### Highlighted Projects
Card-based project showcase featuring Facebook, Meta AI, and Reality Labs.

### Timeline/Career
Vertical timeline of career milestones and achievements.

### Media/Press
List of press items, interviews, and media appearances with external links.

### Gallery
Responsive image grid with lightbox functionality and keyboard navigation.

### Contact
Contact form with validation and email delivery via Resend.

### Newsletter/CV
Email subscription form and CV download button.

## Accessibility

- Semantic HTML elements
- ARIA labels and attributes
- Keyboard navigation support
- High contrast colors
- Focus indicators
- Reduced motion support via `prefers-reduced-motion`
- Screen reader friendly

## SEO

- Optimized metadata
- Open Graph tags
- Twitter Card support
- Semantic HTML structure
- Sitemap ready

## License

MIT

## Author

Mark Zuckerberg

## Contact

- Email: moulisai2109@gmail.com
- Instagram: [@whysooraj](https://instagram.com/whysooraj)
- LinkedIn: [Mouli Sai Santhosh Sooraj M](https://www.linkedin.com/in/mouli-sai-santhosh-sooraj-m-9b28b1334)
- X/Twitter: [@whysooraj](https://x.com/whysooraj)
- GitHub: [@sai21-learn](https://github.com/sai21-learn)
