//Reference: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object
import type {Metadata} from 'next';
import { siteConfig } from '@/site-config';

export const getSEOMetadata = ({
    title,
    description,
    keywords,
    openGraph,
}: Metadata = {}) => {

    const openGraphImage = openGraph?.images ? openGraph?.images : `${process.env.NEXT_PUBLIC_PRIMARY_DOMAIN}/opengraph-image.jpg`

    return {

        title: title || siteConfig.appName,
        descrition: description || siteConfig.appDescription,
        keywords: keywords || siteConfig.keywords,
        applicationName: siteConfig.appName,

        openGraph: {
            title: openGraph?.title || siteConfig.appName,
            description: openGraph?.description || siteConfig.appDescription, 
            url: openGraph?.url || siteConfig.primaryDomainName,
            siteName: openGraph?.siteName || siteConfig.appName,
            image: [
                {
                    url: openGraphImage, // Absolute URL
                    width: 800,
                    height: 600,
                }
            ],
            locale: 'en_US',
            type: 'website',
        },

        twitter: {
            title: openGraph?.title || siteConfig.appName,
            description: openGraph?.description || siteConfig.appDescription, 
            card: 'summary_large_image', 
            creator: '@alpaca_stack',
            image: [openGraphImage,] //Absolute URLs
        },

    }


}
