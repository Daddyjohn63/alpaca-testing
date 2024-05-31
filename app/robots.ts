import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {

  const domain = process.env.NEXT_PUBLIC_PRIMARY_DOMAIN
  const isStagingSite = process.env.STAGING_ENV

  let rules = []

  if(isStagingSite){
    rules = [
      {
        userAgent: '*',
        disallow: ['/'],
      },
    ]
  } else {
    rules = [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/dashboard', '/admin'],
      },
    ]
  }

  return {
    rules: rules,
    sitemap: `${domain}/sitemap.xml`,
  }
}
