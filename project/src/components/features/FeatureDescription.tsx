import { cn } from "../../lib/utils";

interface FeatureDescriptionProps {
  children: React.ReactNode;
}

export const FeatureDescription = ({ children }: FeatureDescriptionProps) => {
  return (
    <p className={cn(
      "text-sm md:text-base max-w-4xl text-left mx-auto",
      "text-neutral-400 font-normal",
      "text-left max-w-sm mx-0 md:text-sm my-2"
    )}>
      {children}
    </p>
  );
};