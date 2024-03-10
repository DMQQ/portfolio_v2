import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default function Home() {
  return (
    <main>
      <article
        // mt-40
        className="flex flex-col md:flex-row w-11/12 mx-auto min-h-screen items-center py-20 gap-5"
      >
        <section className="flex-[3] flex justify-start items-center">
          <h1 className="text-white font-extrabold text-7xl lg:text-8xl">
            Hello! I&apos;m <b>Damian</b>, a{" "}
            <span className="gradient-text">Full-Stack Developer</span> bringing
            ideas to life.
          </h1>
        </section>
        <section className="flex flex-1 w-full justify-center items-center">
          <div className="grid justify-evenly justify-items-center content-evenly items-center grid-cols-3 grid-rows-2 md:grid-cols-3 gap-5 md:grid-rows-3 w-full">
            {[
              "typescript.png",
              "tailwindcss.png",
              "react.png",
              "react_native.svg",
              "nextjs.png",
              "nestjs.svg",
              "nodejs.png",
              "mysql.png",
              "redux.webp",
            ].map((tech) => (
              <Image
                key={tech}
                src={"/tech/" + tech}
                alt="Technology"
                width={70}
                height={70}
                priority
                className="align-middle w-10 md:w-[4.5rem]"
              />
            ))}
          </div>
        </section>
      </article>
      <article className="flex flex-col lg:flex-row w-11/12 mx-auto min-h-screen items-center py-20 gap-5">
        <section className="flex-1">
          <h2 className="text-7xl font-extrabold">
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
              <span className="text-purple-600 font-bold">React Native</span>{" "}
              and streamlining the process using{" "}
              <span className="text-purple-600 font-bold">Expo</span>. For web
              development, my toolbox includes React for dynamic interfaces,
              <span className="text-purple-600 font-bold">
                Tailwind CSS{" "}
              </span>{" "}
              for rapid styling,{" "}
              <span className="text-purple-600 font-bold">NextJS</span> for
              performance and SEO, and{" "}
              <span className="text-purple-600 font-bold">Typescript</span> for
              enhanced code maintainability and safety.
            </p>
            <p className="text-zinc-200 mt-2 text-lg">
              But my expertise extends beyond the frontend. I&apos;m equally
              adept at building the backend with{" "}
              <span className="text-purple-600 font-bold">NodeJS</span> and
              structuring its logic using
              <span className="text-purple-600 font-bold">NestJS</span>.
              Additionally, I leverage the power of{" "}
              <span className="text-purple-600 font-bold">MySQL</span> for data
              management and utilize{" "}
              <span className="text-purple-600 font-bold">TypeORM</span> to
              simplify interactions with the database.
            </p>
            <p className="text-zinc-200 mt-2 text-lg">
              This diverse skillset, coupled with my thirst for knowledge and
              constant learning, positions me as a valuable asset for projects
              and individuals who share my passion for technology and
              innovation. Feel free to reach out – I&apos;m excited to
              collaborate and explore new challenges!
            </p>
          </div>
        </section>
        <section className="flex-1 flex flex-shrink-0 justify-center p-5 items-center w-full">
          <Image
            src={"/13795589_5370986.svg"}
            width={900}
            height={900}
            alt=""
            className="w-10/12 h-auto flex-shrink-0"
          />
        </section>
      </article>

      <h3 className="text-start w-11/12 mx-auto px-3 text-7xl font-extrabold flex flex-col">
        <a
          href="https://github.com/DMQQ"
          rel="nofollow"
          target="_blank"
          className="text-lg text-purple-800"
        >
          <span className="text-2xl">&#x2192;</span> View Github
        </a>{" "}
        My Projects and things i{" "}
        <span className="gradient-text">contributed to</span>
      </h3>

      <article className="w-full md:w-11/12 mx-auto py-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-5">
        {projects.map((project, index) => (
          <section
            key={project.name}
            className="hover:ring-2 rounded-xl hover:ring-purple-700 p-3 transition-colors duration-300 ease-in-out"
          >
            <div className="bg-zinc-950 flex flex-col h-full px-4 pb-3 rounded-lg">
              <h3 className="text-white text-3xl font-extrabold">
                <Link
                  href={"/project/" + project.name.replaceAll(" ", "_")}
                  className="text-base text-purple-800 font-bold"
                >
                  <span className="text-2xl">&#x2192;</span> See more
                </Link>
                <br />
                {project.name}
              </h3>

              <p className="text-zinc-200 mt-2 flex-1">{project.description}</p>

              <div className="flex flex-row gap-5 mt-5 overflow-x-scroll pb-3">
                {[1, 2, 3, 4, 5].map((key) => (
                  <div
                    key={key}
                    className="w-44 h-32 bg-zinc-900 rounded-md flex-shrink-0"
                  />
                ))}
              </div>

              <div className="flex flex-row gap-5 w-full mt-5 items-center ">
                {[
                  ...project.mainStack.frontend,
                  ...project.mainStack.backend,
                ].map((src: string) =>
                  /\.(jpg|png|svg|webp)$/i.test(src) ? (
                    <Image
                      priority
                      key={src}
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
        ))}
      </article>

      <footer className="text-zinc-600 p-5">
        <a href="https://www.freepik.com/free-vector/video-game-developer-concept-illustration_13795589.htm#query=developer%20illustration&position=14&from_view=keyword&track=ais&uuid=561481ad-317f-4c32-a284-8247369f0008">
          Image by storyset
        </a>{" "}
        on Freepik
      </footer>
    </main>
  );
}
