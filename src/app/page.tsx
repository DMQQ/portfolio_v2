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
          <h1 className="text-white font-extrabold text-6xl lg:text-8xl">
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
                className="align-middle w-12 md:w-[4.5rem]"
              />
            ))}
          </div>
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

      <h3 className="text-start text-5xl w-11/12 mx-auto px-3 md:text-7xl font-extrabold flex flex-col">
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

      <article
        id="projects"
        className="w-full p-5 md:w-11/12 mx-auto py-20 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-5"
      >
        {projects.map((project) => (
          <Link href={"/projects/" + project.path} key={project.name}>
            <section className="hover:ring-2  hover:ring-purple-700 md:p-3 transition-colors duration-300 ease-in-out rounded-lg">
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

                <div className="flex flex-row snap-x gap-5 mt-5 overflow-x-scroll md:overflow-auto pb-3">
                  {project.thumbnails?.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="max-w-40 max-h-24 object-contain"
                    />
                  ))}
                </div>

                <div className="flex flex-row flex-wrap gap-5 w-full mt-5 items-center ">
                  {[
                    ...project.mainStack.frontend,
                    ...project.mainStack.backend,
                  ].map((src: string, index) =>
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

      <article className="w-full p-5 md:w-11/12 mx-auto py-20 flex min-h-screen flex-col lg:flex-row justify-center items-center">
        <section className="flex-1 flex flex-col">
          <h4 className="text-white text-5xl md:text-7xl font-extrabold flex flex-col">
            <span className="text-lg text-purple-800">
              <span className="text-2xl">&#x2192;</span> Education
            </span>{" "}
            Education & <span className="gradient-text">Certificates</span>
          </h4>

          <div className="w-full lg:w-2/3">
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
        <section className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 justify-center items-center gap-5 mt-10">
          <div className="w-64 h-64 bg-zinc-900 rounded-md" />
          <div className="w-64 h-64 bg-zinc-900 rounded-md" />
          <div className="w-64 h-64 bg-zinc-900 rounded-md" />
          <div className="w-64 h-64 bg-zinc-900 rounded-md" />
        </section>
      </article>

      <article className="w-full p-5 md:w-11/12 mx-auto py-20 flex flex-col lg:flex-row justify-between items-center">
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
            className="w-[calc(100vw-2.5rem)] max-w-[28rem] flex flex-col flex-1 bg-zinc-950 p-5 rounded-lg"
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

      <footer className="text-zinc-600 p-5">
        <a href="https://www.freepik.com/free-vector/video-game-developer-concept-illustration_13795589.htm#query=developer%20illustration&position=14&from_view=keyword&track=ais&uuid=561481ad-317f-4c32-a284-8247369f0008">
          Image by storyset
        </a>{" "}
        on Freepik
      </footer>
    </main>
  );
}
