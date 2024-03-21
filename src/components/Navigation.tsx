export default function Navigation() {
  return (
    <section className="w-full h-full fixed top-0 left-0 bg-black flex justify-center items-center">
      <nav className="flex flex-1">
        <ul className="flex flex-col justify-center text-3xl w-full flex-1 gap-5 items-center">
          {["Overview", "Projects", "Education \n & \n Certificates"].map(
            (label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-purple-400 hover:text-purple-600 transition-colors"
                >
                  #{label}
                </a>
              </li>
            )
          )}
          <li>
            <button className="px-5 py-3 rounded-full !text-2xl  bg-purple-950 text-purple-200 hover:bg-purple-900 hover:text-purple-100 transition-colors">
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
