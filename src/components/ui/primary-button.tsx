type PrimaryButtonProps = {
  text: string;
  handleOnClick?: () => void;
};

export default function PrimaryButton({
  text,
  handleOnClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className=" rounded px-6 py-2 overflow-hidden group bg-emerald-500 relative hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-emerald-400 transition-all ease-out duration-300"
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative text-lg capitalize font-semibold">{text}</span>
    </button>
  );
}
