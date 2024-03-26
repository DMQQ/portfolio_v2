interface Stack {
  frontend: string[];
  backend: string[];
}

interface IProject {
  name: string;
  path: string;
  description: string;
  mainStack: Stack;
  additionalLibraries: Stack;
  thumbnails?: string[];

  bullets?: string[];

  imagesDisplayType?: "list" | "grid";

  images?: string[];

  content?: [
    {
      heading: string;
      content: string;
      images: string[];
    }
  ];

  style: "mobile" | "web";

  links?: {
    path: string;
    name: string;
  }[];
}

export const projects: IProject[] = [
  {
    path: "visbro",
    name: "Recruiting company website",
    description:
      "This project, developed with Next.js, Tailwind CSS, and Formik, incorporates multiple forms to enhance user interaction. Utilizing Next Intl for language translations in ten different languages, it ensures inclusivity and accessibility for a diverse audience. Leveraging the Ninox Cloud API as the backend service, the website caters to a German recruiting company with operations across various fields. The platform seamlessly integrates modern frontend technologies with robust backend solutions to deliver a user-centric experience tailored to the needs of a dynamic recruiting environment.",
    mainStack: {
      frontend: [
        "nextjs.png",
        "tailwindcss.png",
        "react.png",
        "Next INTL",
        "AXIOS",
      ],
      backend: [],
    },

    links: [
      {
        path: "http://srv18.mikr.us:40202/en",
        name: "Live",
      },
      {
        path: "https://github.com/DMQQ/visbro-web",
        name: "Code",
      },
    ],

    style: "web",

    bullets: [
      "10 native translations",
      "Formik & Yup validation",
      "Optimized images with next/image",
      "REST-API with Ninox",
    ],

    additionalLibraries: {
      frontend: [
        "next-intl",
        "react-leaflet",
        "yup",
        "zod",
        "react-select",
        "react-phone-number-input",
        "limiter",
        "formik",
        "axios",
      ],
      backend: [],
    },

    imagesDisplayType: "list",

    thumbnails: [
      "/visbro-web/home.png",
      "/visbro-web/home-2.png",
      //  "/visbro-web/home3.png",
    ],
    images: [
      "/visbro-web/home.png",
      "/visbro-web/home-2.png",
      "/visbro-web/home3.png",
      "/visbro-web/home4.png",
      "/visbro-web/collab.png",
      "/visbro-web/about.png",
      "/visbro-web/career.png",
      "/visbro-web/offers.png",
      "/visbro-web/services.png",
      "/visbro-web/car-rental.png",
    ],
  },
  {
    path: "shop",
    name: "Mobile Shopping app",

    style: "mobile",

    links: [
      {
        path: "https://github.com/DMQQ/shop-server",
        name: "Backend Code",
      },
      {
        path: "https://github.com/DMQQ/shop-mobile",
        name: "Code",
      },
    ],

    bullets: [
      "Authentication with email activation",
      "Account managment",
      "In-app payments using Stripe API",
      "Product's cart managment",
      "Following product status",
      "Viewing recent purchases",
      "GraphQL/REST-API provided by backend server",
    ],
    description: `This project is a React Native application with a NestJS backend, offering seamless integration of features. It incorporates Stripe for in-app purchases, along with essential functionalities like a cart, watchlist, and purchase history. Robust account authentication ensures security and personalization for users. The modern, dark-themed design, crafted by me, enhances user experience and aesthetic appeal. This comprehensive solution merges cutting-edge technology with intuitive design for a dynamic user experience.`,
    mainStack: {
      frontend: [
        "typescript.png",
        "react_native.svg",
        "redux.webp",
        "expo.png",
        "graphql.png",
      ],
      backend: [
        "nestjs.svg",
        "nodejs.png",
        "mysql.png",
        "graphql.png",
        "typeorm.png",
      ],
    },
    additionalLibraries: {
      frontend: [
        "@redux/toolkit",
        "@apollo/client",
        "graphql",
        "@react-navigation",
        "@stripe",
        "Expo",
        "Expo-secure-store",
        "React native reanimated",
        "yup",
        "formik",
      ],
      backend: [
        "@nestjs/apollo",
        "@sendgrid",
        "jwt",
        "stripe",
        "bcrypt",
        "class-transformer",
        "class-validator",
        "@nestjs/schedule",
      ],
    },
    thumbnails: [
      "/mobile-shop/home.jpg",
      "/mobile-shop/home2.jpg",
      "/mobile-shop/detailsmain.jpg",
    ],
    images: [
      "/mobile-shop/home3.jpg",
      "/mobile-shop/homeside.jpg",
      "/mobile-shop/detailsmain.jpg",
      "/mobile-shop/detailstext.jpg",
      "/mobile-shop/details.jpg",
      "/mobile-shop/cart.jpg",
      "/mobile-shop/checkout.jpg",
      "/mobile-shop/checkoutpay.jpg",
      "/mobile-shop/history.jpg",
      "/mobile-shop/settings.jpg",
      "/mobile-shop/login.jpg",
      "/mobile-shop/register.jpg",
      "/mobile-shop/review.jpg",
      "/mobile-shop/watchlist.jpg",
    ],
  },
  {
    path: "life",
    name: "MyLife App",

    style: "mobile",

    links: [
      {
        path: "https://github.com/DMQQ/app-server",
        name: "Backend Code",
      },
      {
        path: "https://github.com/DMQQ/life-mobile-app",
        name: "Mobile Code",
      },
    ],

    bullets: [
      "User authentication",
      "Creating reminders with tasks and images",
      "Expense tracking",
      "Creating secured notes",
      "Creating your own workouts and tracking your progress",
    ],
    description:
      "This mobile app project integrates React Native for the frontend with a NestJS backend using GraphQL to interface with a MySQL database, ensuring efficient data management and retrieval. Offering an array of functionalities, it includes a calendar reminder with tasks and push notifications, a notes page for securely storing important information, a wallet feature to track expenses, and a workout screen for creating and monitoring fitness routines. With its seamless integration and robust features, this app provides users with a comprehensive and dynamic mobile experience tailored to their productivity and wellness needs.",
    mainStack: {
      backend: [
        "nestjs.svg",
        "graphql.png",
        "typeorm.png",
        "typescript.png",
        "nodejs.png",
      ],
      frontend: [
        "expo.png",
        "react_native.svg",
        "typescript.png",
        "react.png",
        "redux.webp",
        "graphql.png",
      ],
    },
    additionalLibraries: {
      backend: [
        "Bcrypt",
        "JWT",
        "@apollo/client",
        "@nestjs/schedule",
        "expo-push-notifications-sdk",
        "graphql",
      ],
      frontend: [
        "@shopify/calendar",
        "@reduxjs/toolkit",
        "expo-secure-store",
        "expo-authentication",
      ],
    },
    thumbnails: [
      "/life-app/preview/home.png",
      "/life-app/preview/calendar.png",
      "/life-app/preview/workout.png",
    ],
    images: [
      "/life-app/auth-register.jpg",
      "/life-app/calendar.jpg",
      "/life-app/calendar-item.jpg",
      "/life-app/home-full.jpg",
      "/life-app/wallet.jpg",
      "/life-app/wallet-sheet.jpg",
      "/life-app/workout.jpg",
      "/life-app/workout-page.jpg",
      "/life-app/workout-page-sheet.jpg",
      "/life-app/workout-paused.jpg",
      "/life-app/workout-running.jpg",
    ],
  },
  {
    name: "Marketplace web-app",
    path: "marketplace",

    style: "web",

    links: [
      {
        path: "https://github.com/ZSEIT-Praktyki/Backend",
        name: "Backend Code",
      },
      {
        path: "https://github.com/ZSEIT-Praktyki/Frontend",
        name: "Frontend Code",
      },
      {
        path: "http://srv25.mikr.us:30163/",
        name: "Live",
      },
    ],

    bullets: [
      "Authentication ",
      "Account managment",
      "In-app payments using Stripe API",
      "Product's cart managment",
      "Following product status",
      "Viewing recent purchases",
      "Selling products",
    ],
    additionalLibraries: {
      backend: [
        "nestjs",
        "mysql",
        "typeorm",
        "jwt",
        "bcrypt",
        "class-validator",
        "class-transformer",
        "@nestjs/schedule",
      ],
      frontend: [
        "NextJS 12",
        "TailwindCSS",
        "React",
        "Formik",
        "Yup",
        "Axios",
        "React-Query",
        "Stripe",
      ],
    },
    description: `This web application, developed using NEXT.js for the frontend and NestJS for the backend, incorporates TypeORM and REST API to efficiently interact with a MySQL database. Integrated with Stripe for secure payment processing, it facilitates smooth offer creation, sale, and management. Its responsive design and contemporary aesthetics ensure a user-friendly experience across various devices. With reliable user authentication, intuitive offer management features, and advanced search and filtering capabilities, this platform offers a comprehensive solution for seamless e-commerce interactions.
    `,
    mainStack: {
      backend: [
        "nestjs.svg",
        "typeorm.png",
        "typescript.png",
        "nodejs.png",
        "mysql.png",
      ],
      frontend: [
        "react.png",
        "typescript.png",
        "redux.webp",
        "RTK query",
        "nextjs.png",
      ],
    },
    images: [
      "/marketsale/home1.png",
      "/marketsale/home2.png",
      "/marketsale/search.png",
      "/marketsale/watchlist.png",
      "/marketsale/checkout.png",
      "/marketsale/listing.png",
      "/marketsale/login.png",
      "/marketsale/active.png",
    ],
    thumbnails: ["/marketsale/home1.png", "/marketsale/home2.png"],
  },
];
