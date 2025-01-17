import Link from "next/link";

export default function Navigate({ path, text }) {
  return (
    <Link
      href={path}
      className="inline-block text-blue-600 font-bold px-4 py-2 rounded-md 
                 hover:bg-blue-600 hover:text-white 
                 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {text}
    </Link>
  );
}
