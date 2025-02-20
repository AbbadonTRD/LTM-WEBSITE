import { ShrinkAnimation } from './ui/shrink-animation';

export const ShrinkDemo = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] gap-8">
      <ShrinkAnimation className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-32 h-32 rounded-lg flex items-center justify-center text-white font-bold">
        Hover Me
      </ShrinkAnimation>
      
      <ShrinkAnimation className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold">
        Me Too!
      </ShrinkAnimation>
    </div>
  );
};