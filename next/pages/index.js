import Title from "./components/Title";
import Navigate from "./components/Navigate";

export default function Home() {
  return (
    <>
      <Title title="Home Page" />
      <main className="min-h-screen flex flex-col justify-center bg-gray-100 font-sans">
        <div className="container mx-auto px-10 py-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Hello, Next.js!
          </h1>

          <nav className="space-x-4 text-xl">
            <Navigate path="/about" text="Go to About Page" />
            <Navigate path="/ssr" text="Go to SSR Example" />
          </nav>
        </div>
      </main>
    </>
  );
}
