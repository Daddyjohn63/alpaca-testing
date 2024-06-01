import { PageHeroSection } from "@/components/marketing/sections/page-hero-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sectionArray = [
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
]

const componentsArray = [
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
  {
    title: "Some page",
    description: "This is some description here",
    image: "someimagename.jpg",
    href: "#"
  },
]

const DemoPage = () => {
  return (
    <div className="py-16 space-y-16">
      <section className=""> 
        <div className="container text-center">
          <div className="space-y-2 pb-16">
            <h1 className="text-3xl sm:text-5xl font-black capitalize md:leading-normal">Demo</h1>
            <p className="text-lg">df sfdsfds fds fs f</p>
          </div>
        </div>
        <div className="container">
          <div className="flex gap-10 justify-center">
            <div className="space-y-5 text-center">
              <div className="w-[400px] h-[250px] bg-red-500">
              </div>
              <Button asChild>
                <Link href="#">View Dark Demo</Link>
              </Button>
            </div>
            <div className="space-y-5 text-center">
              <div className="w-[400px] h-[250px] bg-red-500">
              </div>
              <Button asChild>
                <Link href="#">View Light Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section> 
        <div className="container text-center">
          <div className="space-y-2 pb-10">
            <h1 className="text-3xl sm:text-5xl font-black capitalize md:leading-normal">Pages</h1>
            <p className="text-lg">df sfdsfds fds fs f</p>
          </div>
          <div>
            <ul className="flex justify-center gap-5">
              {sectionArray.map((item,i) => {
                return (
                  <li key={i}>
                    <div className="space-y-4">
                      <div className="bg-white w-[300px] h-[200px]">
                        Image
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section> 
        <div className="container text-center">
          <div className="space-y-2 pb-10">
            <h1 className="text-3xl sm:text-5xl font-black capitalize md:leading-normal">Components</h1>
            <p className="text-lg">df sfdsfds fds fs f</p>
          </div>
          <div>
            <ul className="flex justify-center gap-5">
              {sectionArray.map((item,i) => {
                return (
                  <li key={i}>
                    <div className="space-y-4">
                      <div className="bg-white w-[300px] h-[200px]">
                        Image
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

    </div>

  )
}
export default DemoPage;
