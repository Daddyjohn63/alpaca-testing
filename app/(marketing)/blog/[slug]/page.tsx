import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { notFound } from "next/navigation";
import { CTACard } from "@/components/cta-card";
import { siteConfig } from "@/site-config";
import { Metadata } from "next";

type Params = {
  slug: string;
}

export const generateMetadata = async({params}: {params: Params}) => {

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
    return null
  }

  return {
    title: data.title,
    description: data.excerpt
  }
}


const PostPage = async({params}: {params: Params}) => {

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
