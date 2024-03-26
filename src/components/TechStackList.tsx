import Image from "next/image";

export default function TechStackList(props: {
  list: string[];
  label: string;
}) {
  return props.list.length > 0 ? (
    <ul className="flex flex-row flex-wrap gap-5 items-center bg-zinc-950 rounded-xl sm:rounded-full p-3 px-6 w-auto">
      {props?.list?.map((src) => (
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
            <span key={src} className="text-sm">
              {src}
            </span>
          )}
        </li>
      ))}
      <span className="text-base text-zinc-500 font-bold mr-1">
        {props.label}
      </span>
    </ul>
  ) : null;
}
