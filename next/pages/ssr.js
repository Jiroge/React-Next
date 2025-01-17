import { useState, useEffect } from "react";

import Navigate from "./components/Navigate";
import ErrorDisplay from "./components/ErrorDisplay";
import Loading from "./components/Loading";
import Title from "./components/Title";

const DISPLAY_LOADING_TIME = 2000;

export default function SSR({ todos, error }) {
  const [showLoadingMessage, setShowLoadingMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setShowLoadingMessage(false);
      setIsLoading(false);
    }, DISPLAY_LOADING_TIME);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (showLoadingMessage || isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <>
      <Title title="SSR Example" />
      <main className="min-h-screen flex flex-col items-center p-10 bg-gray-100 font-sans">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Server-side Rendering Example
          </h1>

          <nav className="mb-8">
            <Navigate path={"/"} text={"Go to Home Page"} />
          </nav>

          <ul className="space-y-3 w-full">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="bg-white p-4 rounded-lg shadow-sm text-left
                         hover:bg-gray-50 transition-colors duration-200"
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const todos = await res.json();
    return { props: { todos } };
  } catch (error) {
    return { props: { error: "เกิดข้อผิดพลาดในการดึงข้อมูล" } };
  }
}
