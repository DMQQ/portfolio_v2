interface Stack {
  frontend: string[];
  backend: string[];
}

interface IProject {
  name: string;
  description: string;
  mainStack: Stack;
  additionalLibraries: Stack;
  thumbnails?: string[];

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
    name: "Visbro Personal Solutions - Website",
    description:
      "Visbro is a revolutionary recruitment platform built to connect businesses with top talent across industries. Leveraging cutting-edge technologies like Next.js, Tailwind CSS, and the Ninox Cloud API, Visbro offers a multilingual, lightning-fast experience for both businesses and candidates. Packed with features like static site generation and numerous forms, Visbro streamlines the recruitment process, empowers businesses to attract top talent, and ensures scalability for long-term success.",
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

    thumbnails: [],
  },
  {
    name: "Mobile ShoppingApp - Mobile App",
    description: `Mobile Shop app is a FullStack Project. The mobile part is made using ReactNative with Typescript and the backend part uses NestJS with NodeJS runtime. App offers plenty of features like Stripe Payments, Cart manipulations, List of favourite products with push notifications about any changes to the following offer.`,
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
  },
  {
    name: "MyLife App",
    description:
      "Multipurpose app with all you need! Funds and expense tracking. Workout scheduling, tracking exercise progress, creating your own workouts. Calendar with push notifications, event tasks and more",
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
  },
];
