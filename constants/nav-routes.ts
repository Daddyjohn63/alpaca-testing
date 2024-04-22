import { Icons } from "@/components/icons";
import { NavItems } from "@/types";
//MARKETING
//Header & Mobile Header Navigation
export const marketingNavItems: NavItems[] = [
    {
        text: "Pricing",
        href: "#pricing",
    },
    {
        text: "Demo",
        href: "#demo",
    },
    {
        text: "Reviews",
        href: "#reviews",
    },
    {
        text: "Blog",
        href: "/blog",
    },
];

//FOOTER Component Navigation
export const interestingNavItems: NavItems[] = [
    {
        text: "Terms & Conditions",
        href: "/"
    },
    {
        text: "Privacy Policy",
        href: "/"
    }
]
export const boringNavItems: NavItems[] = [
    {
        text: "Terms & Conditions",
        href: "/"
    },
    {
        text: "Privacy Policy",
        href: "/"
    }
]

// DASHBOARD
//User Nav component navigation items
export const userNavItems: NavItems[] = [
    {
        text: "Dashboard",
        href: "/dashboard"
    },
    {
        text: "Profile",
        href: "/dashboard/profile"
    },
    {
        text: "Settings",
        href: "/dashboard/settings"
    }
]

export const dashboardNavItems: NavItems[] = [
    {
        icon: "home",
        text: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: "user",
        text: "Profile",
        href: "/dashboard/profile",
    },
    {
        icon: "cog",
        text: "Settings",
        href: "/dashboard/settings",
    },
];
