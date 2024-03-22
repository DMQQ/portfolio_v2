import { projects } from "@/app/projects";
import TechStackList from "@/components/TechStackList";
import Image from "next/image";

export default function VisbroPage() {
  const projectName = "Recruiting website";

  const project = projects.find(
    ({ name }) => name === projectName.replaceAll("_", " ")
  );

  return (
    <main>
      <main className="pt-28 pb-10 flex flex-col md:flex-row justify-center p-5 w-screen md:w-11/12 mx-auto gap-5">
        <section className="flex-1 w-full flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white flex flex-col ">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project name
            </span>
            {projectName.replaceAll("_", " ")}
          </h1>

          <p className="w-full md:w-3/4 mt-2 text-zinc-200">
            {project?.description}
          </p>

          <ul className="list-disc p-5">
            <li>Translations for 10 languages</li>
            <li>Multiple application forms</li>
            <li>Ninox Cloud as backend service</li>
            <li>Image optimalization</li>
            <li>High Light house score</li>
          </ul>

          <div className="w-full mt-5 flex flex-row gap-3 md:w-2/3">
            <a
              className="bg-zinc-950 text-white p-3 px-5 rounded-full w-full text-center"
              target="_blank"
              href="https://github.com/DMQQ/visbro-web"
            >
              Github (Mobile)
            </a>

            <a
              href="http://srv25.mikr.us:40032/"
              className="bg-zinc-950 text-white p-3 px-5 rounded-full w-full text-center"
              target="_blank"
            >
              Live
            </a>
          </div>

          <h2 className="text-2xl font-extrabold mt-5 mb-2 flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project stack
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-5">
            <TechStackList
              label="Frontend"
              list={project?.mainStack.frontend!}
            />

            <TechStackList label="Backend" list={project?.mainStack.backend!} />
          </div>

          <h2 className="text-2xl font-extrabold mt-5 mb-2 flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Used libraries
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-5 w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-8 items-center bg-zinc-950 rounded-xl p-3 w-auto">
              {project?.additionalLibraries.frontend.map((text) => (
                <li key={text} className="uppercase text-sm font-medium">
                  {text}
                </li>
              ))}
            </ul>

            {project?.additionalLibraries.backend.length !== 0 && (
              <ul className="grid h-full grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-8 items-center bg-zinc-950 rounded-xl p-3 w-auto">
                {project?.additionalLibraries.backend.map((text) => (
                  <li key={text} className="uppercase text-sm font-medium">
                    {text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        <section className="flex-[1] justify-center items-center flex mt-16">
          <div className="w-full flex flex-col gap-5 relative md:-translate-y-20">
            {project?.thumbnails?.map((src, index) => (
              <Image
                priority
                key={src}
                src={src}
                width={1100}
                height={800}
                alt="Previw"
                className="w-full max-w-screen-md"
              />
            ))}
          </div>
        </section>
      </main>
      <main className="pt-28 pb-10 flex  flex-col md:flex-row-reverse justify-center p-5 w-screen md:w-11/12 mx-auto gap-5">
        <div className={`grid grid-cols-1 md:grid-cols-2 w-full gap-5`}>
          {project?.images?.map((src, index) => (
            <Image
              priority
              key={src}
              src={src}
              width={1200}
              height={800}
              alt={src + " Preview"}
              className="w-full rounded-md"
            />
          ))}
        </div>
      </main>
    </main>
  );
}
