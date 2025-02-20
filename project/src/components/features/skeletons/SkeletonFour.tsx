import { Globe } from '../../Globe';

export const SkeletonFour = () => {
  return (
    <div className="relative w-full aspect-[1.2] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe />
      </div>
    </div>
  );
};