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

  imagesDisplayType?: "list" | "grid";

  images?: string[];

  content?: [
    {
      heading: string;
      content: string;
      images: string[];
    }
  ];
}

export const projects: IProject[] = [
  {
    path: "visbro",
    name: "Recruiting website",
    description:
      "Recruiting company website - A NextJS Typescript project with serverless functions! App offers 10 native translations for many languages like Polish, German, English, Arabic and more. Many forms with Formik & Yup validation to offer the best User expirience. Images are well uptimized using next/image library and compressed to modern formats to decrease page size. Everything is connected with Ninox Low-Code platform using REST-API to safely keep the form data and to manage job offers",
    mainStack: {
      frontend: ["nextjs.png", "tailwindcss.png", "react.png"],
      backend: ["NINOX"],
    },
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
    description: `React Native Shop App - FullStack project made in React Native with Expo and NestJS with MySQL database for server side. Ap has many features like authentication, account managment, in-app payments using Stripe API, product's cart managment, following product status and viewing recent purchases. Everything is handled via GraphQL/REST-API provided by my backend server.`,
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
      "/mobile-shop/product.jpg",
    ],
    images: [
      "/mobile-shop/home.jpg",
      "/mobile-shop/home2.jpg",
      "/mobile-shop/product.jpg",
      "/mobile-shop/search.jpg",
      "/mobile-shop/cart.jpg",
      "/mobile-shop/fav.jpg",
    ],
  },
  {
    path: "life",
    name: "MyLife App",
    description:
      "Multipurpose app with all you need! Funds and expense tracking. Workout scheduling, tracking exercise progress, creating your own workouts. Calendar with push notifications, event tasks and more. App made in React-Native with Expo on mobile side and NestJS and MySQL on server side. As a http client app uses GraphQL.",
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
      "/life-app/preview/home.png",
      "/life-app/home-full.jpg",
      "/life-app/preview/workout.png",
      "/life-app/auth-register.jpg",
      "/life-app/calendar-item.jpg",
      "/life-app/wallet-sheet.jpg",
      "/life-app/workout.jpg",
    ],
  },
  {
    name: "Market sale web-app",
    path: "marketsale",
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
    description: `Market sale web-app is a fullstack project made in NextJS with TailwindCSS and NestJS with MySQL database. App offers many features like authentication, account managment, in-app payments using Stripe API, product's cart managment, following product status and viewing recent purchases. Everything is handled via REST-API provided by my backend server.`,
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
        "react.png",
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
      "/marketsale/active.png",
    ],
    thumbnails: [
      "/marketsale/home1.png",
      "/marketsale/home2.png",
      "/marketsale/search.png",
      "/marketsale/watchlist.png",
      "/marketsale/checkout.png",
    ],
  },
];
