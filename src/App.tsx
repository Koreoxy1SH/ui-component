import { SiYoutube, SiGithub } from "react-icons/si";
import { Section } from "./components/site/Section";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="w-full sticky top-0 z-50 border-b bg-white">
        <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44">
          <div className="mx-auto w-full max-w-3xl space-y-20">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center justify-start">
                <a
                  href="/"
                  className="inline-flex h-10 items-center justify-center text-lg font-bold text-gray-800"
                >
                  Koreoxy
                </a>
              </div>

              <div className="flex flex-1 items-center justify-end">
                <nav className="flex items-center space-x-1">
                  <a
                    href="https://www.youtube.com/@1sh1sh"
                    className="h-10 w-10 p-2 text-gray-800 hover:text-[#ff0000]"
                  >
                    <SiYoutube className="h-full w-full" />
                  </a>
                  <a
                    href="https://www.github.com/koreoxy"
                    className="h-10 w-10 p-2 text-gray-800 hover:text-[#8400ff]"
                  >
                    <SiGithub className="h-full w-full" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="p-10 sm:px-16 lg:px-44">
        <div className="mx-auto max-w-3xl space-y-20">
          {/* CONTENT CONTAINER */}
          <header>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
              Component Name
            </h1>

            <p className="mt-2 text-lg text-gray-800">Component Descrption</p>
          </header>

          <div className="space-y-10 md:space-y-16">
            {/* CONTENT SECTION */}

            <Section
              title="NEW Section heading"
              description="Section description text"
            >
              <div className="bg-blue-500/50 p-3">component 1</div>
              <div className="bg-blue-500/50 p-3">component 1</div>
            </Section>

            {/* CONTENT SECTION */}
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
