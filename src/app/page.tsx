import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl p-8">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Seat Height Visualiser
        </h1>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          A tool to help you visualise how different seat heights will feel based on your inseam length.
        </p>
        <Image
          src="/seat-height-visualiser.png"
          alt="Seat Height Visualiser Screenshot"
          width={800}
          height={400}
          className="rounded-lg border border-zinc-200 dark:border-zinc-700"
        />
        <button className="mt-6 rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          <Link href="/visualizer">Go to Visualizer</Link>
        </button>
      </div>
      <div>
        <form action="" className="flex flex-col align-center justify-center shadow-2xs p-8 rounded-lg bg-white dark:bg-zinc-800">
          <label htmlFor="inseam">Inseam Length:</label>
          <input type="text" name="inseam" />
          <label htmlFor="height">Height:</label>
          <input type="text" name="height" />
          <button type="submit" className="">Submit</button>
        </form>
      </div>
    </div>
  );
}
