# Do Not Break

This project has reached production status. Future developers MUST adhere to the following strict constraints:

- **Do NOT duplicate conference data:** If conference data (speakers, dates, themes) needs to be used in multiple places, read it from the `data/` directory. Do not hardcode data into JSX.
- **Do NOT reinstate Supabase:** The site was deliberately migrated away from Supabase to a fully static data architecture. Do not re-add database clients or types.
- **Do NOT replace approved assets casually:** The hero images and overall aesthetic have been approved. Do not swap them out unless explicitly directed by the organizers.
- **Preserve responsive behavior:** The site relies heavily on `md:`, `lg:`, and `xl:` breakpoints. Do not remove or alter these layout classes without rigorous cross-device testing.
- **Preserve the motion system:** All entrance animations are handled by `framer-motion` through components in `components/motion/`. Do not introduce ad-hoc CSS animations or change motion configurations.
- **Preserve the contact delivery:** The contact form in `lib/public/actions.ts` uses `nodemailer`. Do not break this integration or introduce unnecessary third-party form providers.
- **Verify image references before deleting:** If you want to delete an image in `public/images/`, ensure it is truly unused by grepping the entire repository first.
