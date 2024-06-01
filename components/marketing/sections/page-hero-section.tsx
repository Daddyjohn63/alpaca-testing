'use client'

import { siteConfig } from "@/site-config";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  bgImagePath?: string;
  className?: string;
}

export function PageHeroSection(props: Props) {

  const {title, subtitle, bgImagePath, className} = props;

  const backgroundImageUrl = bgImagePath ? `url('${siteConfig.fileStorage.bucketUrl}/${bgImagePath}')` : undefined;

  return (
    <section className={cn("bg-muted bg-center", className)} style={{backgroundImage: backgroundImageUrl}}>
      <div className={`w-full h-full ${backgroundImageUrl && 'bg-background/90'}`}>
        <div className="container py-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black capitalize md:leading-normal">{title}</h1>
          {subtitle && (
            <p className="text-lg">{subtitle}</p>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}
