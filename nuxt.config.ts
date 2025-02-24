// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import path from 'path';
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/<repository-name>/'
        }
      }
    : {}

    const faceBookAdScriptContent = fs
    .readFileSync(path.join(__dirname, 'static/facebook-ad.js'))
    .toString();
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          innerHTML: faceBookAdScriptContent,
        },
      ]
    }
  },
  ...routerBase,
})
