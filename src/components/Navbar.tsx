import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-4 filter backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
          <span className="text-sm font-semibold tracking-widest">
            SHAWA.DEV
          </span>
        </div>
        <div className="text-md flex gap-12 text-zinc-400">
          <Link className="font-medium text-black" href="#">
            Home
          </Link>
          <Link href="#"> Projects </Link>
          <Link href="#"> Contact </Link>
        </div>
      </div>
    </nav>
  );
}
