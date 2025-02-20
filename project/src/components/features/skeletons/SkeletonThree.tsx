import { IconBrandYoutubeFilled } from '@tabler/icons-react';

export const SkeletonThree = () => {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2940&auto=format&fit=crop"
        alt="AI Video"
        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <IconBrandYoutubeFilled className="w-16 h-16 text-red-500" />
      </div>
    </div>
  );
};