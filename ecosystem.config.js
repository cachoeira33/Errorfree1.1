// PM2 ecosystem configuration for production deployment

module.exports = {
  apps: [
    {
      name: 'errorfree-frontend',
      script: 'npx',
      args: 'serve -s dist -l 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'errorfree-api',
      script: './public/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        STRIPE_SECRET_KEY: 'sk_live_your_secret_key_here',
        STRIPE_WEBHOOK_SECRET: 'whsec_your_webhook_secret_here'
      }
    }
  ]
};