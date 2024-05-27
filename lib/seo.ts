//Reference: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object
import type {Metadata} from 'next';
import { siteConfig } from '@/site-config';

export const getSEOMetadata = ({
    title,
    description,
    keywords,
    openGraph,
}: Metadata = {}) => {

    const openGraphImage = openGraph && openGraph.images ? openGraph?.images : `${siteConfig.primaryDomain}/opengraph-image.jpg`

    return {

        title: title || siteConfig.appName,
        descrition: description || siteConfig.appDescription,
        keywords: keywords || siteConfig.keywords,
        applicationName: siteConfig.appName,

        openGraph: {
            title: openGraph?.title || siteConfig.appName,
            description: openGraph?.description || siteConfig.appDescription, 
            url: openGraph?.url || siteConfig.primaryDomain,
            siteName: openGraph?.siteName || siteConfig.appName,
            images: [
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
            images: [openGraphImage,] //Absolute URLs
        },

    }


}
