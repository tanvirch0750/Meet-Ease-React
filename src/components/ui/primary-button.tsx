type PrimaryButtonProps = {
  text: string;
};

export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <button className=" rounded px-12 py-3 overflow-hidden group bg-emerald-500 relative hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300">
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative text-xl capitalize font-semibold">{text}</span>
    </button>
  );
}
