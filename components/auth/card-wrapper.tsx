"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { Logo } from "@/components/logo";

type CardWrapperProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  title,
  subtitle,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
    <div className="mt-5 flex justify-center">
      <Logo size="sm"/>
    </div>
      <CardHeader>
        <Header title={title} subtitle={subtitle} />
        <CardContent className="p-2">{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter className="pb-0">
          <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};
