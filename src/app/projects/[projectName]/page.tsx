import { projects } from "@/app/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({
  params: { projectName },
}: {
  params: {
    projectName: string;
  };
}) {
  const project = projects.find(
    ({ name }) => name === projectName.replaceAll("_", " ")
  );

  return (
    <main>
      <main className="pt-28 pb-10 flex flex-col md:flex-row justify-center p-5 w-screen md:w-11/12 mx-auto gap-5">
        <section className="flex-1 w-full flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project name
            </span>
            {projectName.replaceAll("_", " ")}
          </h1>

          <p className="w-full md:w-3/4 mt-2 text-zinc-200">
            {project?.description}
          </p>

          <h2 className="text-2xl font-extrabold mt-5 mb-2">
            Main Stack used in project
          </h2>

          <div className="flex flex-col md:flex-row gap-5">
            <ul className="flex flex-row gap-5 items-center mt-3 bg-zinc-950 rounded-full p-3 px-6 w-auto">
              {project?.mainStack.frontend.map((src) => (
                <li key={src}>
                  <Image
                    src={"/tech/" + src}
                    alt="technology"
                    width={35}
                    height={35}
                  />{" "}
                </li>
              ))}
              <span className="text-base text-zinc-500 font-bold mr-1">
                Front-end
              </span>
            </ul>

            <ul className="flex flex-row gap-5 items-center mt-3 bg-zinc-950 rounded-full p-3 px-6 w-auto">
              {project?.mainStack.backend.map((src) => (
                <li key={src}>
                  {/\.(jpg|png|svg|webp)$/i.test(src) ? (
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
                  )}
                </li>
              ))}
              <span className="text-base text-zinc-500 font-bold mr-1">
                Back-end
              </span>
            </ul>
          </div>

          <h2 className="text-2xl font-extrabold mt-5 mb-2">
            Additional Libraries
          </h2>

          <div className="flex flex-col md:flex-row gap-5">
            <ul className="grid grid-cols-2 gap-3 list-disc pl-8 items-center bg-zinc-950 rounded-xl p-3 w-auto">
              {project?.additionalLibraries.frontend.map((text) => (
                <li key={text} className="uppercase text-sm font-medium">
                  {text}
                </li>
              ))}
            </ul>

            {project?.additionalLibraries.backend.length !== 0 && (
              <ul className="grid h-full grid-cols-2 gap-3 list-disc pl-8 items-center bg-zinc-950 rounded-xl p-3 w-auto">
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
          <div className="grid grid-cols-3 md:grid-cols-3 grid-rows-1 gap-3 relative">
            {[
              "/life-app/preview/home.png",
              "/life-app/preview/calendar.png",
              "/life-app/preview/workout.png",
              // "/life-app/preview/wallet.png",
            ].map((src, index) => (
              <Image
                priority
                key={src}
                src={src}
                width={350}
                height={800}
                alt="Previw"
                className="w-full rounded-xl"
              />
            ))}
          </div>
        </section>
      </main>
      <main className="pt-28 pb-10 flex flex-col md:flex-row-reverse justify-center p-5 w-screen overflow-x-hidden md:w-11/12 mx-auto gap-5">
        <section className="flex-1 w-full flex flex-col items-start">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white flex flex-col">
            <span className="text-base text-purple-800 font-bold">
              <span className="text-2xl">&#x2192;</span> Project name
            </span>
            Home screen
          </h1>

          <p className="w-full md:w-3/4 mt-2 text-zinc-200">
            {project?.description}
          </p>
        </section>
        <section className="flex-1 flex justify-center items-center">
          <div className=" grid grid-cols-3 gap-3">
            {[
              "/life-app/preview/home.png",
              "/life-app/home-full.jpg",
              "/life-app/preview/workout.png",
              // "/life-app/preview/wallet.png",
            ].map((src, index) => (
              <Image
                priority
                key={src}
                src={src}
                width={350}
                height={800}
                alt="Previw"
                className="w-full rounded-xl object-cover h-full"
              />
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}
