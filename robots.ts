//https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {

  const isStagingEnv = process.env.STAGING_ENV === 'true'

  if(isStagingEnv) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  } else {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/admin/'],
      },
      sitemap: 'https://alpacastack.com/sitemap.xml',
    }
  }
}
