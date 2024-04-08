'use client'

import { useRouter } from 'next/navigation'

type LoginButtonProps = {
    children: React.ReactNode;
    mode?: "model" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        router.push("/login")
    }

    if (mode === "model") {
        return (
            <span>TODO: Impliment modal</span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )

}
