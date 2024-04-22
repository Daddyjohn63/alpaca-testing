import { NavItems } from "@/types";

//User Nav component navigation items
export const userNavItems: NavItems[] = [
    {
        text: "Dashboard",
        href: "/dashboard"
    },
    {
        text: "Settings",
        href: "/dashboard/settings"
    }
]

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

export const dashboardNavItems: NavItems[] = [
    {
        icon: "home",
        text: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: "user",
        text: "Something",
        href: "/dashboard/something",
    },
    {
        icon: "cog",
        text: "Settings",
        href: "/dashboard/settings",
    },
];

// ADMIN
export const adminNavItems: NavItems[] = [
    {
        icon: "home",
        text: "Dashboard",
        href: "/dashboard",
    },
    {
        icon: "dashboard",
        text: "Posts",
        href: "/admin/posts",
    },
    {
        icon: "dashboard",
        text: "Categories",
        href: "/admin/categories",
    },
];
