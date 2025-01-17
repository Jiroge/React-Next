export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-10 bg-red-50 font-sans">
      <div className="bg-red-100 text-red-600 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold animate-pulse">กำลังโหลด...</h1>
      </div>
    </main>
  );
}
