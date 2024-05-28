import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { notFound } from "next/navigation";
import { CTACard } from "@/components/cta-card";
import { siteConfig } from "@/site-config";
import { getSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

type Props = {
  params: {slug: string};
  searchParams?: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = async({params}: Props): Promise<Metadata> => {

  const {slug} = params;

  const data = await db.post.findFirst({
    where: {
      slug: slug
    },
    include: {
      media: {
        select: {
          imagePath: true,
        },
      },
    },
  })

  if(!data) {
    return getSEOMetadata()
  }

  let postImage = ''

  if(data.media){
    postImage = `${siteConfig.fileStorage.bucketUrl}/${data.media.imagePath}`;
  }

  return getSEOMetadata({
    title: data.title,
    description: data.excerpt,
    canonicalUrlRelative: `/blog/${data.slug}`,
    ogImageUrl: postImage,
    openGraph: {
      title: data.title,
      description: data.excerpt || '',
      url: `/blog/${data.slug}`,
    }
  })
}


const PostPage = async({params}: Props) => {

  const isBlogPublic = siteConfig.isBlogPublic;

  if(!isBlogPublic) {
    return notFound()
  }

  const {slug} = params

  const data = await db.post.findFirst({
    where: {
      slug: slug
    },
    include: {
      media: {
        select: {
          imagePath: true,
        },
      },
    },
  })


  if(!data) {
    return notFound()
  }

  const bgImagePath = data.media?.imagePath;

  return (
    <div>
      <PageHeroSection title={data.title} bgImagePath={bgImagePath}  />
      <div className="container grid md:grid-cols-7 gap-10 py-20">
        <article id="blog-content" className="md:col-span-5">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </article>
        <aside className="md:col-span-2 self-start sticky top-2">
          <CTACard 
            image="cta-img.jpg"
            title="Download AlpacaStack Now!" 
            description="Download Alpaca Stack today and launch your knew SaaS startup blazingly fast!"
            btnText="Download Now!" 
            btnHref="/#pricing-section"/>
        </aside>
      </div>
    </div>
  )
}
export default PostPage
