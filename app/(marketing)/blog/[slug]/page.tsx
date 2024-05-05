import { db } from "@/lib/db"
import { PageHeroSection } from "@/components/marketing/sections/page-hero-section"
import { notFound } from "next/navigation";
import { SidebarCTA } from "@/components/marketing/blog-cta";
type Params = {
  slug: string;
}


const PostPage = async({params}: {params: Params}) => {

  const {slug} = params

  const data = await db.post.findFirst({
    where: {
      slug: slug
    }
  })

  if(!data) {
    return notFound()
  }

  const bgImagePath = data.imagePath;

  return (
    <div>
      <PageHeroSection title={data.title} bgImagePath={bgImagePath}  />
      <div className="container grid md:grid-cols-7 gap-10 py-20">
        <article id="blog-content" className="md:col-span-5">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </article>
        <aside className="md:col-span-2 self-start sticky top-2">
          <SidebarCTA 
            image="cta-img.jpg"
            title="Download AlpacaStack Now!" 
            description="Download Alpaca Stack today and launch your knew SaaS startup blazingly fast!"
            btnText="Download Now!" 
            btnHref="/"/>
        </aside>
      </div>
    </div>
  )
}
export default PostPage
