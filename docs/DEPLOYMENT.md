# Deployment Documentation

## Hosting
The ReCYCLE 2027 website is a Next.js application that compiles into a statically generated site with a single Server Action (for the contact form). 
**Recommended Hosting:** Vercel

## Environment Variables
The following environment variables MUST be provided in the production environment:
- `SMTP_HOST`: Mail server host (e.g., `smtp.gmail.com`)
- `SMTP_PORT`: Mail server port (e.g., `465` or `587`)
- `SMTP_USER`: Email address for authentication
- `SMTP_PASSWORD`: Application password for authentication
- `EMAIL_FROM`: The address that the inquiry emails appear to come from
- `EMAIL_TO`: (Optional) Where the inquiries should be sent

## Build Command
`npm run build`

## Deployment Flow
1. Push changes to the main repository branch.
2. Ensure Vercel (or equivalent CI/CD) picks up the push.
3. Next.js will generate static versions of all pages.
4. The deployment will automatically go live.

## Asset Requirements
- No external databases are required.
- All images are tracked inside the `public/images/` repository and served directly.

## Common Deployment Failure Points
- **Missing Nodemailer variables:** Contact form will fail at runtime.
- **Icon Naming Collisions:** If `lucide-react` updates, sometimes components named `Map` might collide with the DOM `Map`. (Already fixed in `InteractiveMap.tsx`).
