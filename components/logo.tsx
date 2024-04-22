'use client'

import Link from "next/link"
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: string;
  variant?: string;
  className?: string;
}

type Size = {
  width: number;
  height: number;
}

type Sizes = {
  [key: string]: Size
}

const sizes: Sizes = {
  xxs: { width: 150, height: 20 },
  xs: { width: 200, height: 30 },
  sm: { width: 255, height: 50 },
  md: { width: 80, height: 80 },
  lg: { width: 150, height: 150 },
  xl: { width: 200, height: 200 },
  xxl: { width: 300, height: 300 },
}

type Variants = {
  [key: string]: string
}

const variants: Variants = {
  light: "logo_horizontal_light.svg",
  dark: "logo_horizontal_dark.svg"
}

export const Logo = (props: LogoProps) => {

  const { size = "sm", variant = "light", className } = props

  const { width, height } = sizes[size] || sizes.sm
  const logo_variant = variants[variant] || variants.light

  return (
      <Link
        href={"/"}
        target="_blank"
      className={cn(className)}
      >
        <Image priority alt="Logo" src={logo_variant} width={width} height={height} />
      </Link>
  )
}
