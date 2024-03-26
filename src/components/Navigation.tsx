export default function Navigation() {
  return (
    <section className="w-full h-full fixed top-0 z-40 left-0 bg-black flex justify-center items-center">
      <nav className="flex flex-1">
        <ul className="flex flex-col justify-center text-3xl w-full flex-1 gap-5 items-center">
          {["Overview", "Projects", "Education"].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase()}`}
                className="text-orange-600  transition-colors"
              >
                #{label}
              </a>
            </li>
          ))}
          <li>
            <button className="px-5 py-3 rounded-full !text-2xl  bg-orange-800 text-purple-200 hover:bg-purple-900 hover:text-purple-100 transition-colors">
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
