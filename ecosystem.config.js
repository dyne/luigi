// SPDX-FileCopyrightText: 2022 Dyne.org foundation
// SPDX-FileCopyrightText: 2022 Puria Nafisi Azizi <puria@dyne.org>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

module.exports = {
  apps: [
    {
      name: 'luigi',
      time: true,
      autorestart: true,
      max_restarts: 50,
      script: "yarn",
      args: "serve --port 3050",
      listen_timeout: 12000,
      wait_ready: true,
      watch: false,
      env: {
        PORT: 3050,
      },
    },
  ],
  deploy: {
    baloo: {
      host: 'deploy_staging',
      ref: 'origin/main',
      repo: 'https://github.com/dyne/luigi',
      path: '/root/luigi',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production && pm2 save',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
