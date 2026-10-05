# Stenvaller Entreprenad AB – hemsida och adminpanel

Hemsidan för Stenvaller Entreprenad AB (fastighetsskötsel, utemiljö och markservice i Stenungsund med omnejd) med
adminpanel. Byggd på samma grund som Markmontage-hemsidan.

- Innehållet (texter, tjänster, sidor, bilder, färger, typsnitt, företagsuppgifter) ligger i `content/baseline.json`;
  formatet beskrivs i `lib/site/schema.ts`. Kör `node scripts/sync-shared.mjs` efter ändringar i den eller i `lib/site`.
- Bilderna i `public/photos` är tillfälliga platshållare tills riktiga foton finns. Kör `npm run photos` efter att ha
  lagt till eller bytt ett foto.
- `SETUP.md` beskriver hur adminpanelen kopplas till Supabase.
