export default function Buttons(props: { mobile: string; backend: string }) {
  return (
    <div className="w-full mt-10 flex flex-row gap-3 md:w-2/3">
      <a
        className="bg-zinc-950 text-white p-3 px-5 rounded-full w-full text-center"
        target="_blank"
        href="https://github.com/DMQQ/life-mobile-app"
      >
        Github (Mobile)
      </a>
      <a
        href="https://github.com/DMQQ/app-server"
        className="bg-zinc-950 text-white p-3 px-5 rounded-full w-full text-center"
        target="_blank"
      >
        Github (Backend)
      </a>

      <a
        href=""
        className="bg-zinc-950 text-white p-3 px-5 rounded-full w-full text-center"
        target="_blank"
      >
        Live
      </a>
    </div>
  );
}
