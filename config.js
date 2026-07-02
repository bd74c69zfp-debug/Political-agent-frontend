require('dotenv').config();

module.exports = {
  clientId: process.env.YT_CLIENT_ID,
  clientSecret: process.env.YT_CLIENT_SECRET,
  redirectUri: process.env.YT_REDIRECT_URI,
  refreshToken: process.env.YT_REFRESH_TOKEN,
  videoFile: process.env.VIDEO_FILE || './video.mp4',
  title: process.env.VIDEO_TITLE || 'Automated Upload',
  description: process.env.VIDEO_DESCRIPTION || 'Uploaded by automation',
  tags: (process.env.VIDEO_TAGS || 'automation,youtube,bot').split(',').map(s => s.trim()).filter(Boolean),
  privacy: process.env.VIDEO_PRIVACY || 'private'
};