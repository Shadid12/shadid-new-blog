import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="w-400 h-400 bg-gray-200 flex items-center justify-center border-2 border-black rounded-md img-box-shadow">
            <Image src="/shadid.jpg" alt="Image" width={300} height={300} />
          </div>
          <form className="mt-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Subscribe to my newsletter
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center border-2 border-black rounded-md p-2">
            <p>Hello, I am Shadid. Software engineer, writer, and creator.</p>
            <p>
              I make impactful software. Currently hacking with AI, Machine Learning and Large Language Models.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
