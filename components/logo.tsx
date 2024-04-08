'use client' 

import Link from "next/link"

type LogoParams = {
  size?: string;
}

type Size = {
  width: number;
  height: number;
}

type Sizes = {
  [key: string]: Size
}

const sizes: Sizes = {
  xxs: {width: 20, height: 20},
  xs: {width: 30, height: 30},
  sm: {width: 50, height: 50},
  md: {width: 80, height: 80},
  lg: {width: 150, height: 150},
  xl: {width: 200, height: 200},
  xxl: {width: 300, height: 300},
}

export const Logo = ({size = 'sm'}: LogoParams) => {

  //TODO: Add color variation
  const {width, height} = sizes[size] || sizes.sm

    return (
        <>
         <Link
            href={"/"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
              width={width}
              height={height}
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </Link> 
        </>
    )
}
