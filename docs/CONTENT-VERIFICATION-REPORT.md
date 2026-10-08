# Content Verification Report

## Final Audit Report

- **Date Check**: Replaced "12 May 2027" with "20th May 2027" on Programme page and Home page. Updated "31st January 2027", "15th March 2027", and "31st March 2027" in important dates. All dates match source of truth.
- **Name Check**: Changed "RECYCLE27" and "Recycle 2027" in various about and timeline fields to exactly match "Recycle 2027" wording where specified, retaining "6th International Conference on Waste Management".
- **About Text Match**: Verified and replaced the entire "About RECYCLE", "About IITG", and "About WMRG" blocks in `app/about/page.tsx` and `app/page.tsx` with verbatim text from source of truth. The previous AI-generated text was discarded.
- **Committee Check**: Cross-referenced all members. Verified patron, chairmen, convenors, and members. Fixed affiliation for Dr. Izharul Haq to "Dr. B. Lal Institute of Biotechnology".
- **Theme Check**: Overrode all 10 theme titles in `data/themes.ts` to exactly match the long-form text provided in the source doc (e.g., "Solid Waste Management: Generation, Collection, Segregation, Storage, and Transportation").
- **Registration Check**: Removed dynamic GST formatting and reverted to the explicit string representation: `INR 7500/- + 18% GST`. Fixed "MTech & BTech" to "MTech and BTech". Fixed Foreign National categories to "All Categories: 150 USD". Fixed includes array to match exactly "access to technical sessions", "conference kit", etc.
- **Programme Check**: The codebase originally hardcoded 3 days (12-14 May) with fabricated events. Replaced it entirely with the authoritative 2-day schedule (20th and 21st May 2027) matching the high-level description provided in the source of truth, removing all fake times.
- **Venue & Travel Check**: Corrected airport distance (22-25 km) and removed fabricated Tour details (Kaziranga, Umananda, Kamakhya) substituting them with "Will be updated soon".
- **Accommodation Check**: Replaced the fabricated UI features for accommodation (various guest houses, hostels, nearby hotels details) with the exact high-level information from the document.
- **Contact Check**: Removed extra fake phone numbers from `data/contact.ts`, retaining only the single official phone number: `+91 9535533933`.

All public-facing content is now in exact alignment with `Website Details.docx`. No hallucinated text remains.
