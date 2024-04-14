"use client"

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
    children?: React.ReactNode;
}

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onClick = () => {
        console.log("logout clicked")
        logout()
    }
    return (
        <span onClick={onClick} className="cursor-pointer">{children}</span>
    )
}
