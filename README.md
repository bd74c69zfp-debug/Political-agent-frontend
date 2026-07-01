# YouTube Automation Uploader

## Setup
1. Create a Google Cloud project.
2. Enable YouTube Data API v3.
3. Configure OAuth consent screen.
4. Create OAuth 2.0 credentials.
5. Put credentials in `.env`.
6. Run `npm install`.
7. Run `npm start`.

## Files
- `src/index.js` main upload script
- `src/auth.js` OAuth client helper
- `src/upload.js` upload function
- `src/config.js` env config

## Notes
- Start with private uploads.
- Use a refresh token.
- Switch to resumable uploads for large files.


## Dashboard
Run `node src/app.js` to start the dashboard UI and API.


## Deployment
- Render: use render.yaml
- Heroku-style: use Procfile
- Local: npm install && node src/app.js
