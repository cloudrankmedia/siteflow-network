# SiteFlow Network — Landing Page

Next.js 14 landing page with GoHighLevel webhook integration, Tailwind CSS, and Vercel deployment.

---

## Quick Start

### 1. Prerequisites
- [Node.js 18+](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free)
- A [GoHighLevel](https://www.gohighlevel.com/) account with webhook access

---

### 2. Add your logo

Place your logo file at:
```
public/images/siteflow-logo.png
```

This is referenced throughout the app in Navbar, Footer, and Thank You page.

---

### 3. Install dependencies

```bash
cd siteflow-network
npm install
```

---

### 4. Set up environment variables

Copy the example env file:
```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your GoHighLevel webhook URL:
```
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_TRIGGER_ID
```

**How to get your GHL Webhook URL:**
1. Log into GoHighLevel
2. Go to **Settings → Integrations → Webhooks**
3. Click **+ Add Webhook**
4. Set the trigger event (e.g. "Contact Created" or use a custom inbound webhook)
5. Copy the webhook URL and paste it into `.env.local`

---

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment to Vercel

### Option A — Deploy via Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect Next.js and configure everything.

### Option B — Deploy via GitHub + Vercel dashboard

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/siteflow-network.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

### Add environment variables to Vercel

After deploying, add your env variable in the Vercel dashboard:
1. Go to your project → **Settings → Environment Variables**
2. Add:
   - **Name:** `GHL_WEBHOOK_URL`
   - **Value:** your full GHL webhook URL
   - **Environment:** Production (and Preview if desired)
3. Click **Save** then **Redeploy**

---

## Adding a Custom Domain

Once you have a domain:
1. Go to Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `siteflownetwork.com`)
3. Follow the DNS instructions Vercel provides (usually a CNAME or A record)
4. Vercel provisions SSL automatically — no extra setup needed

---

## Project Structure

```
siteflow-network/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── globals.css         # Tailwind base styles
│   ├── page.tsx            # Main landing page
│   ├── thank-you/
│   │   └── page.tsx        # Post-submission confirmation page
│   └── api/
│       └── submit-lead/
│           └── route.ts    # GoHighLevel webhook handler (serverless)
├── components/
│   ├── Navbar.tsx          # Sticky nav with scroll-to-form CTA
│   ├── Hero.tsx            # Hero section (headline + stats)
│   ├── LeadForm.tsx        # Form with validation + GHL submission
│   ├── Benefits.tsx        # 6-service grid
│   ├── Segments.tsx        # 4 customer segment cards
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Testimonials.tsx    # 3 testimonial cards
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── CTABand.tsx         # Bottom CTA section
│   └── Footer.tsx          # Footer with links
├── public/
│   └── images/
│       └── siteflow-logo.png   ← PUT YOUR LOGO HERE
├── .env.local.example      # Env variable template
├── .env.local              # Your actual env vars (never commit this)
├── tailwind.config.ts      # Brand colors + fonts configured
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## GoHighLevel Integration Notes

The form submits to `/api/submit-lead` which POSTs to your GHL webhook with:

```json
{
  "firstName": "John",
  "lastName": "Martinez",
  "email": "j.martinez@gcfirm.com",
  "phone": "(555) 000-0000",
  "customField": {
    "project_type": "Civil / Earthwork"
  },
  "tags": ["siteflow-lead", "project-civil-earthwork"],
  "source": "SiteFlow Network Landing Page"
}
```

**In GHL, you should:**
- Create a pipeline for SiteFlow leads (e.g. "SiteFlow Inbound")
- Set up an automation triggered by the webhook tag `siteflow-lead`
- Route leads to the correct sub-pipeline stage based on the `project_type` custom field
- Set up an immediate SMS/email follow-up sequence for new contacts

**Custom field mapping:**
If your GHL account uses specific custom field keys, update the `customField` object in:
```
app/api/submit-lead/route.ts
```

---

## Customization

### Brand colors
Edit `tailwind.config.ts`:
```ts
colors: {
  navy: { DEFAULT: "#222E50" },
  brand: { orange: "#F58D39" }
}
```

### Copy / testimonials
All page copy lives in the component files under `components/`. Each component has its data defined at the top as a constant array — easy to find and edit.

### Adding new FAQ items
Open `components/FAQ.tsx` and add to the `FAQS` array:
```ts
{
  q: "Your question here?",
  a: "Your answer here.",
},
```

---

## A/B Testing (Future)

To run A/B tests on headlines or CTAs:
- Use [Vercel Edge Config](https://vercel.com/docs/storage/edge-config) for flag-based variants
- Or integrate [PostHog](https://posthog.com/) (free tier available) for full feature flags + analytics

---

## Performance Notes

- Fonts load via `next/font/google` — zero layout shift, cached at edge
- Images use `next/image` — automatic WebP conversion and lazy loading
- The API route is a Vercel serverless function — cold starts are negligible for this use case
- Target Lighthouse score: 90+ on all metrics
