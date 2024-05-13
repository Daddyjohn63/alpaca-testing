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
        href: "/#pricing-section",
    },
    {
        text: "Demo",
        href: "#demo",
    },
    {
        text: "Reviews",
        href: "/#reviews",
    },
    {
        text: "Blog",
        href: "/blog",
    },
];

//FOOTER Component Navigation
export const interestingNavItems: NavItems[] = [
    {
        text: "Pricing",
        href: "/#pricing-section",
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
]
export const boringNavItems: NavItems[] = [
    {
        text: "Terms & Conditions",
        href: "/terms-conditions"
    },
    {
        text: "Privacy Policy",
        href: "/privacy-policy"
    },
        {
        text: "Contact Us",
        href: "/contact-us"
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
        href: "/admin",
    },
    {
        icon: "post",
        text: "Posts",
        href: "/admin/posts",
    },
    {
        icon: "category",
        text: "Categories",
        href: "/admin/categories",
    },
    {
        icon: "media",
        text: "Media",
        href: "/admin/media",
    },
    {
        icon: "user",
        text: "Users",
        href: "/admin/users",
    },
];
