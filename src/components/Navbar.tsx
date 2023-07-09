import Link from "next/link";
import { gen } from "culler";

export default function Navbar() {
  return (
    <nav className="py-4 filter backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-5 w-5 rounded-full"
            style={{
              background: `linear-gradient(to bottom right, ${gen({
                type: "rgb",
                minB: 202,
                minG: 202,
                minR: 202,
              })}, ${gen({
                type: "rgb",
                minB: 222,
                minG: 222,
                minR: 222,
              })})`,
            }}
          ></div>
          <span className="text-sm font-semibold tracking-widest">
            SHAWA.DEV
          </span>
        </div>
        <div className="text-md flex gap-12 text-zinc-400">
          <Link className="font-medium text-black" href="#">
            Home
          </Link>
          <Link href="#"> Projects </Link>
          <Link href="/contact"> Contact </Link>
        </div>
      </div>
    </nav>
  );
}
