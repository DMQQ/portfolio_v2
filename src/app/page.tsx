import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { projects } from "../../projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damian's Portfolio",
  description: `Hi there! As a 20-year-old student from Poland, my passion for
  building things for the web blossomed during my five years in a
  programming-focused high school. While I gained foundational
  knowledge there, my self-driven nature pushed me to delve deeper.`,
  authors: [{ name: "Damian", url: "https://github.com/DMQQ" }],
  creator: "Damian",
  keywords:
    "Fullstack, Developer, React, NextJS, TailwindCSS, Typescript, NodeJS, NestJS, MySQL, Redux, React Native, React Native, Rest, Graphql ,Junior, Poland, Olsztyn",
};

import mysql from "../../public/tech/mysql.png";
import nestjs from "../../public/tech/nestjs.svg";
import nextjs from "../../public/tech/nextjs.png";
import nodejs from "../../public/tech/nodejs.png";
import react from "../../public/tech/react.png";
import react_native from "../../public/tech/react_native.svg";
import redux from "../../public/tech/redux.webp";
import tailwindcss from "../../public/tech/tailwindcss.png";
import typescript from "../../public/tech/typescript.png";

export default function Home() {
  return (
    <main>
      <article
        // mt-40
        className="flex flex-col justify-center w-11/12 mx-auto min-h-screen py-20 items-center gap-5"
      >
        <div className="flex flex-col lg:flex-row">
          <section className="lg:flex-[3] flex justify-start items-center">
            <h1 className="text-white font-extrabold text-5xl xs:text-6xl md:text-6xl lg:text-7xl 2xl:text-8xl">
              Hello! I&apos;m <b>Damian</b>, a{" "}
              <span className="gradient-text">Full-Stack Developer</span>{" "}
              bringing ideas to life.
            </h1>
          </section>
          <section className="flex lg:flex-1 w-full justify-center items-center">
            <div className="grid mt-2 justify-evenly justify-items-center content-evenly items-center grid-cols-5 grid-rows-2 lg:grid-cols-3 gap-5 lg:grid-rows-3 w-full">
              {(
                [
                  mysql,
                  nestjs,
                  nextjs,
                  nodejs,
                  react,
                  react_native,
                  redux,
                  tailwindcss,
                  typescript,
                ] as StaticImageData[]
              ).map((tech, index) => (
                <Image
                  key={index}
                  src={tech.src}
                  alt="Technology"
                  width={50}
                  height={50}
                  priority
                  blurDataURL={tech.blurDataURL}
                  className={`align-middle w-10 h-auto lg:w-[4.5rem] select-none `}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="flex flex-col 2xs:flex-row 2xs:items-center 2xs:justify-center w-full gap-3 mt-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DMQQ"
            className="bg-zinc-950 text-zinc-300 justify-center flex flex-row items-center gap-2 rounded-xl px-5 py-3"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png"
              alt="GH icon"
              className="w-6 h-6 inline-block mr-1 invert"
            />
            Github
          </a>
          <a
            className="bg-zinc-950 text-zinc-300 justify-center flex flex-row items-center gap-2 rounded-xl px-5 py-3"
            href="mailto:damianderlecki04@gmail.com"
          >
            Message me via email
          </a>
        </section>
      </article>
      <article
        id="overview"
        className="flex flex-col lg:flex-row w-11/12 mx-auto min-h-screen items-center py-20 gap-5"
      >
        <section className="flex-1">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-lg text-purple-800">
              <span className="text-2xl">&#x2192;</span> About me
            </span>{" "}
            <br />
            The Developer Behind <span className="gradient-text">the Code</span>
          </h2>

          <div className="w-full">
            <p className="text-zinc-200 mt-2 text-lg">
              Hi there! As a 20-year-old student from Poland, my passion for
              building things for the web blossomed during my five years in a
              programming-focused high school. While I gained foundational
              knowledge there, my self-driven nature pushed me to delve deeper.
              Today, I&apos;m equipped with a diverse tech stack that allows me
              to navigate both mobile and web development landscapes. In the
              mobile realm, I&apos;m comfortable crafting engaging applications
              with{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                React Native
              </span>{" "}
              and streamlining the process using{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                Expo
              </span>
              . For web development, my toolbox includes React for dynamic
              interfaces,
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                Tailwind CSS
              </span>{" "}
              for rapid styling,{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                NextJS
              </span>{" "}
              for performance and SEO, and{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                Typescript
              </span>{" "}
              for enhanced code maintainability and safety.
            </p>
            <p className="text-zinc-200 mt-2 text-lg">
              But my expertise extends beyond the frontend. I&apos;m equally
              adept at building the backend with{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                NodeJS
              </span>{" "}
              and structuring its logic using{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                NestJS
              </span>
              . Additionally, I leverage the power of{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                MySQL
              </span>{" "}
              for data management and utilize{" "}
              <span className="bg-purple-800 text-white px-2 rounded-full text-base py-0.5">
                TypeORM
              </span>{" "}
              to simplify interactions with the database.
            </p>
          </div>
        </section>
        <section className="flex-1 flex flex-shrink-0 justify-center items-center w-full">
          <Image
            src={"/13795589_5370986.svg"}
            width={900}
            height={900}
            alt=""
            className="w-10/12 h-auto flex-shrink-0"
          />
        </section>
      </article>

      <h3 className="text-start text-5xl w-11/12 mx-auto px-3 md:text-7xl font-extrabold flex flex-col ">
        <a
          href="https://github.com/DMQQ"
          rel="nofollow"
          target="_blank"
          className="text-lg text-purple-800"
        >
          <span className="text-2xl">&#x2192;</span> View Github
        </a>{" "}
        <span className="gradient-text">
          <span className="text-white">My</span> Projects
        </span>
      </h3>

      <article
        id="projects"
        className="w-full p-5 md:w-11/12 mx-auto py-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-5"
      >
        {projects.map((project) => (
          <Link href={"/projects/" + project.path} key={project.name}>
            <section className="hover:ring-2 h-full hover:ring-purple-700 md:p-3 transition-colors duration-300 ease-in-out rounded-lg">
              <div className="bg-zinc-950 flex flex-col h-full px-4 pb-3 rounded-lg">
                <h3 className="text-white text-3xl font-extrabold">
                  <span className="text-base text-purple-800 font-bold">
                    <span className="text-2xl">&#x2192;</span> Project name
                  </span>
                  <br />
                  {project.name}
                </h3>

                <p className="text-zinc-200 mt-2 flex-1">
                  {project.description}
                </p>

                {/* <div className="flex flex-row snap-x gap-5 mt-5 overflow-scroll md:overflow-hidden  pb-3">
                  {project.thumbnails?.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="max-w-40 max-h-24 object-contain"
                    />
                  ))}
                </div> */}

                <span className="text-base text-purple-800 font-bold my-2">
                  <span className="text-xl">&#x2192;</span> Tech stack
                </span>

                <div className="flex flex-row flex-wrap gap-5 w-full items-center ">
                  {Array.from(
                    new Set([
                      ...project.mainStack.frontend,
                      ...project.mainStack.backend,
                    ])
                  ).map((src: string, index) =>
                    /\.(jpg|png|svg|webp)$/i.test(src) ? (
                      <Image
                        priority
                        key={src + index}
                        src={"/tech/" + src}
                        width={35}
                        height={30}
                        alt="Technology"
                        className="object-contain"
                      />
                    ) : (
                      <span key={src}>{src}</span>
                    )
                  )}
                </div>
              </div>
            </section>
          </Link>
        ))}
      </article>

      <article
        id="education"
        className="w-full p-5 md:w-11/12 mx-auto py-20 flex min-h-screen flex-col xl:flex-row justify-center items-center"
      >
        <section className="flex-1 flex flex-col">
          <h4 className="text-white text-5xl md:text-7xl font-extrabold flex flex-col">
            <span className="text-lg text-purple-800">
              <span className="text-2xl">&#x2192;</span> Education
            </span>{" "}
            Education & <span className="gradient-text">Expirience</span>
          </h4>

          <div className="w-full mt-5 xl:w-2/3">
            <h5 className="text-xl">
              Zespół szkół elektronicznych i telekomunikacyjnych in Olsztyn,
              Poland <br /> (2019-2024)
            </h5>

            <p className="text-zinc-300 flex-1 mt-2">
              I graduated from a programming-focused high school, where I
              learned the basics of programming and software development. This
              experience laid the foundation for my future in technology and
              provided me with the knowledge and skills to pursue my passion.
            </p>

            <h5 className="text-xl mt-5">
              Internship at{" "}
              <span className="text-purple-600 font-bold">ARTNEO</span> (2022) 1
              month
            </h5>
            <p className="text-zinc-300 flex-1 mt-2">
              As part of my internship, I worked on a project that involved the
              development of a web application for a learning purposes using
              NextJS and Tailwind CSS. This experience allowed me to gain a deep
              understanding of the development process and the importance of
              collaboration and communication in a professional setting.
            </p>

            <h5 className="text-xl mt-5">
              Internship at{" "}
              <span className="text-purple-600 font-bold">
                Wirtualna Polska (WP Media S.A.)
              </span>{" "}
              (2022) 1 month
            </h5>
            <p className="text-zinc-300 flex-1 mt-2">
              During my intership i learned a lot about linux and it&apos;s
              enviroment. We were taught how to set zabix monitoring system and
              how to use it. I also learned about the importance of security and
              how to secure a server.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 justify-center font-bold items-center gap-5 mt-10">
          <div className="h-56 bg-zinc-950 rounded-md flex justify-center items-center">
            INF.03 - 2021
          </div>
          <div className="h-56 bg-zinc-950 rounded-md flex justify-center items-center">
            INF.04 - 2024
          </div>
          <div className="h-56 bg-zinc-950 rounded-md flex justify-center items-center text-center p-5">
            Multiple online courses <br /> and tutorials
          </div>
          <div className="h-56 bg-zinc-950 rounded-md flex justify-center items-center text-center">
            Many fullstack projects
          </div>
        </section>
      </article>

      <article className="w-full hidden p-5 md:w-11/12 mx-auto py-20 flex flex-col lg:flex-row justify-between items-center">
        <section className="flex-1 flex flex-col">
          <h4 className="text-white text-5xl md:text-7xl font-extrabold flex flex-col">
            <span className="text-lg text-purple-800">
              <span className="text-2xl">&#x2192;</span> Contact
            </span>{" "}
            Contact <br /> <span className="gradient-text">me!</span>
          </h4>

          <div className="w-full lg:w-3/4">
            <p className="text-zinc-200 flex-1 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo consequatur quidem animi modi repellendus ab, quasi,
              labore facilis officiis quo atque fugit ratione, sequi
              consequuntur aut corporis nobis provident incidunt.
            </p>
            <p className="text-zinc-200 flex-1 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo consequatur quidem animi modi repellendus ab, quasi,
              labore facilis officiis quo atque fugit ratione, sequi
              consequuntur aut corporis nobis provident incidunt.
            </p>
            <p className="text-zinc-200 flex-1 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo consequatur quidem animi modi repellendus ab, quasi,
              labore facilis officiis quo atque fugit ratione, sequi
              consequuntur aut corporis nobis provident incidunt.
            </p>
          </div>
        </section>
        <section className="mt-10">
          <form
            action=""
            className="w-full max-w-[28rem] flex flex-col flex-1 bg-zinc-950 p-5 rounded-lg"
          >
            <h5 className="text-white text-5xl md:text-7xl font-extrabold flex flex-col mb-5">
              <span className="text-lg text-purple-800">
                <span className="text-2xl">&#x2192;</span> Message me
              </span>{" "}
            </h5>
            <div className="flex flex-col">
              <label htmlFor="subject" className="font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                id="subject"
                className="bg-zinc-900 rounded-md p-2 text-purple-600 ring-2 focus:ring-purple-800 outline-none ring-zinc-800"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="email" className="font-bold mb-2">
                Your email
              </label>
              <input
                type="email"
                required
                id="email"
                className="bg-zinc-900 rounded-md p-2 text-purple-600 ring-2 focus:ring-purple-800 outline-none ring-zinc-800"
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="message" className="font-bold mb-2">
                Message
              </label>
              <textarea
                rows={10}
                required
                id="message"
                className="bg-zinc-900 rounded-md p-2 text-purple-600 ring-2 focus:ring-purple-800 outline-none ring-zinc-800 resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-3 rounded-md bg-purple-950 hover:bg-purple-900 transition-colors ease-in-out duration-150 mt-5 w-full"
            >
              Send message
            </button>
          </form>
        </section>
      </article>

      <footer className="text-zinc-600 p-5 flex flex-wrap flex-row justify-between">
        <p className="">Damian Derlecki</p>
        <p className="">Olsztyn, Poland</p>

        <a href="mailto:damianderlecki04@gmail.com">
          Email damianderlecki04@gmail.com
        </a>
        <a href="https://github.com/DMQQ">Github: DMQQ</a>
        <p>
          <a href="https://www.freepik.com/free-vector/video-game-developer-concept-illustration_13795589.htm#query=developer%20illustration&position=14&from_view=keyword&track=ais&uuid=561481ad-317f-4c32-a284-8247369f0008">
            Image by storyset
          </a>{" "}
          on Freepik
        </p>
      </footer>
    </main>
  );
}
