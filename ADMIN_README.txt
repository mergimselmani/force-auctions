Force Auctions · Admin & Dashboard MVP Pack

1) Voeg AL deze bestanden toe aan je bestaande repo (map-structuur behouden).
2) Zet in Vercel een Environment Variable:
   - Key: ADMIN_SECRET
   - Value: een sterke geheime string
   - Environments: Production/Preview/Development
3) Redeploy in Vercel.

Admin login:
- Ga naar /admin/login en vul je ADMIN_SECRET in.
- Daarna kun je /admin, /admin/listings, /admin/auctions, /admin/tools gebruiken.

API:
- /api/admin/listings  (GET lijst, POST nieuw)
- /api/admin/auctions  (GET lijst, POST nieuw)

Database:
- Als je nog NIET de SQL migraties hebt gedraaid (listings/auctions tabellen), voer die dan eerst uit in Supabase → SQL.
