import { motion } from "framer-motion";
import SocialButton from "./SocialButton";
import Image from "next/image";
import { gen } from "culler";
import GithubSVG from "../../public/github.svg";

type Props = {
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
};

export default function ProjectModal({ selected, setSelected }: Props) {
  if (!selected) return <></>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        layoutId={`card-${selected.name}`}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-2xl cursor-auto flex-col gap-4 rounded-3xl p-10"
        style={{
          background: `linear-gradient(to bottom right, ${gen({
            type: "rgb",
            minB: 242,
            minG: 242,
            minR: 242,
          })}, ${gen({
            type: "rgb",
            minB: 242,
            minG: 242,
            minR: 242,
          })})`,
        }}
      >
        <h1 className="text-4xl font-semibold leading-snug tracking-tight">
          {selected.name}
        </h1>
        <Image
          className="w-full rounded"
          src={selected.image}
          alt={selected.name}
          width={993}
          height={745}
        />
        <p className="flex-1 text-lg">{selected.description}</p>
        <div className="relative flex flex-col items-center gap-4 justify-self-end lg:flex-row">
          <button className="rounded-full bg-black px-12 py-3 font-medium text-white">
            Visit
          </button>
          <div className="flex items-center gap-4">
            <SocialButton href={selected.github} hoverColor="github">
              <GithubSVG />
            </SocialButton>
            <SocialButton hoverColor="github" href={selected.deployment}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
