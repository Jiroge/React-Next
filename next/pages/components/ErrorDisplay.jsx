import Navigate from "./Navigate";

export default function ErrorDisplay({ message }) {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-10 bg-gray-100 font-sans">
      <div className="bg-red-100 text-red-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold">{message}</h1>
      </div>
      <nav className="mt-8">
        <Navigate path={"/"} text={"Go to Home Page"} />
      </nav>
    </main>
  );
}
