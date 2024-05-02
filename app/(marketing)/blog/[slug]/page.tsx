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

  return (
    <div>
      <PageHeroSection title={data.title} />
      <div className="container flex flex-row py-20 divide-x">
        <article id="blog-content" className="w-full pr-10">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </article>
        <aside className="w-[400px] pl-10">
          <SidebarCTA 
            image="cta-img.jpg"
            title="Download AlpacaStack Now!" 
            description="Download Alpaca Stack today and launch your knew SaaS startup blazingly fast!"
            btnText="Download Now!" 
            btnHref="https://google.com"/>
        </aside>
      </div>
    </div>
  )
}
export default PostPage
