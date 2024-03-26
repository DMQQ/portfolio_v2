import { projects } from "../../../../projects";
import TechStackList from "@/components/TechStackList";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((post) => ({
    name: post.path,
  }));
}

const ImageGrid = {
  mobile: {
    thumbnails: "grid grid-cols-1 sm:grid-cols-3 gap-5",
    images:
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5",
  },
  web: {
    thumbnails: "flex flex-col gap-5",
    images: "grid grid-cols-1 lg:grid-cols-2 gap-5",
  },
};

export default function Project({
  params: { name },
}: {
  params: { name: string };
}) {
  const project = projects.find((project) => project.path === name);

  if (project === undefined) notFound();

  const style = ImageGrid[project.style];

  return (
    <main className="w-full h-full">
      <main className="pt-28 pb-10 flex flex-col xl:flex-row justify-center p-5 min-h-screen w-full md:w-11/12 mx-auto gap-5">
        <section className="flex-1 w-full flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project name
            </span>
            {project.name}
          </h1>

          <p className="w-full md:w-5/6 mt-2 text-zinc-300">
            {project?.description}
          </p>

          <ul className="mt-2 list-disc px-5">
            {project.bullets?.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-extrabold mt-2 mb-2 flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project stack
            </span>
          </h2>

          <div className="flex flex-row flex-wrap 2xl:flex-row gap-2">
            <TechStackList
              label="Frontend"
              list={project?.mainStack.frontend!}
            />

            <TechStackList label="Backend" list={project?.mainStack.backend!} />
          </div>

          <div className="w-full md:w-5/6 mt-2">
            <h2 className="text-2xl font-extrabold mb-2 flex flex-col">
              <span className="text-base text-purple-800 font-bold">
                <span className="text-2xl">&#x2192;</span> Used libraries
              </span>
            </h2>

            <div className="flex flex-row flex-wrap w-full gap-2">
              {[
                ...project?.additionalLibraries.frontend,
                ...project?.additionalLibraries.backend,
              ].map((text, index) => (
                <span
                  key={index}
                  className="uppercase text-sm font-medium px-3 py-1 bg-zinc-950 rounded-lg"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section
          className={
            "flex-[1] flex " +
            (project.style === "web" ? "-translate-y-10" : "translate-y-10")
          }
        >
          <div className={style.thumbnails}>
            {project?.thumbnails?.map((src, index) => (
              <Image
                quality={100}
                priority
                key={src}
                src={src}
                width={project.style === "web" ? 1400 : 400}
                height={project.style === "web" ? 900 : 900}
                alt="Project thumbnail"
                className="w-full rounded object-contain"
              />
            ))}
          </div>
        </section>
      </main>

      <main className="flex flex-col justify-center p-5 w-full md:w-11/12 mx-auto gap-5 min-h-screen mt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white flex flex-col">
          <span className="text-base text-purple-800 font-bold">
            <span className="text-2xl">&#x2192;</span> Preview
          </span>
          Project preview images
        </h1>

        <span className="text-base text-purple-800 font-bold flex flex-row items-center gap-2">
          <span className="text-2xl">&#x2192;</span> Links
        </span>
        <div className="w-full flex flex-col sm:flex-row md:w-1/2 gap-3">
          {project.links?.map((link) => (
            <a
              key={link.path}
              className="bg-zinc-900 text-zinc-300 justify-center flex flex-row items-center gap-2 rounded-xl px-5 py-3"
              target="_blank"
              href={link.path}
            >
              {link.name}
            </a>
          ))}
        </div>

        <section className={`${style.images}`}>
          {project?.images?.map((src, index) => (
            <Image
              key={src}
              src={src}
              width={project.style === "web" ? 1400 : 400}
              height={project.style === "web" ? 900 : 900}
              alt="Project photo preview"
              className={"rounded object-contain w-full "}
            />
          ))}
        </section>
      </main>
    </main>
  );
}
