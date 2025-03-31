import Image from "next/image";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-center p-6 text-white">
      <Image src="/logo.png" alt="Reet Technologies Logo" width={180} height={150} className="mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Coming Soon</h1>
      <p className="text-lg max-w-lg mb-6 opacity-90">We are working hard to bring something amazing. Stay tuned for updates!</p>
      <div className="flex gap-4 bg-white p-2 rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 w-64"
        />
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Notify Me</button>
      </div>
      <footer className="mt-10 text-sm opacity-80">
        &copy; {new Date().getFullYear()} Reet Technologies. All Rights Reserved.
      </footer>
    </div>
  );
}
