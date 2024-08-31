import { cn } from '@/lib/utils';

type TSectionHeaderProps = {
  headingSpanOne: string;
  headingSpanTwo: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  className,
  headingSpanOne,
  headingSpanTwo,
  description,
}: TSectionHeaderProps) {
  return (
    <header
      className={cn(
        'max-w-2xl mx-auto my-12 text-center px-4 md:px-0',
        className
      )}
    >
      <h1 className="md:text-4xl text-2xl mb-4">
        <span className="block font-heading font-light text-gray-600 ">
          {headingSpanOne}
        </span>
        <span className="block text-3xl md:text-5xl font-body font-bold bg-gradient-to-r from-sky-600 via-emerald-500 to-indigo-400 text-transparent bg-clip-text mt-3">
          {headingSpanTwo}
        </span>
      </h1>
      <p className="text-gray-800 mt-3 md:text-lg text-md max-w-4xl mx-auto">
        {description}
      </p>
    </header>
  );
}
