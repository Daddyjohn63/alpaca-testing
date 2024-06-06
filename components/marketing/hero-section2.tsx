import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSection2Props {
  children?: React.ReactNode;
  className?: string;
  title: string;
  subTitle: string;
  btnText1?: string;
  btnHref1?: string;
  btnText2?: string;
  btnHref2?: string;
  imageUrl?: string;
  bgCover?: boolean;
  backgroundImageUrl?: string;
}

export function HeroSection2(props: HeroSection2Props) {

  const {className, title, subTitle, btnText1, btnHref1, btnText2, btnHref2, imageUrl, backgroundImageUrl, bgCover} = props;

  return (
      <section className={`relative bg-cover bg-center bg-no-repeat ${cn(className)}`} style={{backgroundImage: `url('${backgroundImageUrl}')`}}>
      {bgCover && <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-85 z-10"></div>}
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center gap-10 relative z-20">
          <div className="space-y-5 mx-auto text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-black">{title}</h1>
            <p className="text-lg">{subTitle}</p>
          <div className="flex justify-center sm:justify-start gap-4">
          {!!btnHref1 && (
            <Button size="lg" asChild>
              <Link href={btnHref1}>{btnText1}</Link>
            </Button>
          )}
          {!!btnHref2 && (
            <Button variant="outline" size="lg" asChild className="border border-muted-foreground bg-transparent">
              <Link href={btnHref2}>{btnText2}</Link>
            </Button>
          )}
          </div>
          </div>
        <div>
          {!!imageUrl && <Image alt="hero Image" src={imageUrl} width={510} height={400} className="w-full mx-auto rounded-md" />}
        </div>
        </div>
      </section>
  )
}
