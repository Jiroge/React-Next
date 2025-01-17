import Navigate from "./components/Navigate";
import Title from "./components/Title";

export default function About() {
  return (
    <>
      <Title title="About Page" />
      <main className="min-h-screen flex flex-col justify-center bg-gray-50 font-sans">
        <div className="container mx-auto px-10 py-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Page</h1>

          <nav className="text-xl">
            <Navigate path={"/"} text={"Go to Home Page"} />
          </nav>
        </div>
      </main>
    </>
  );
}
