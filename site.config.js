const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'umgbhalla',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'devops engineer',
    bio: 'I like rust and write shit ton of yaml.',
    email: 'umg.bhalla18@gmail.com',
    linkedin: 'umgbhalla',
    github: 'umgbhalla',
    instagram: 'umgbhalla',
  },
  projects: [
    {
      name: `umgbhalla's blog`,
      href: 'https://umgbhalla.xyz'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'shitty blog',
    description: 'welcome to shitty-log!',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://blog.umgbhalla.xyz',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion','umang bhalla','umgbhalla','Umang','Bhalla'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'umgbhalla/forked-morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
