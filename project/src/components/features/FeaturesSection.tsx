import { cn } from "../../lib/utils";
import { IconBrandYoutubeFilled } from '@tabler/icons-react';
import { Globe } from '../Globe';

const features = [
  {
    title: "Track issues effectively",
    description:
      "Track and manage your project issues with ease using our intuitive interface.",
    content: <SkeletonOne />,
    className: "lg:col-span-2",
  },
  {
    title: "Capture pictures with AI",
    description:
      "Capture stunning photos effortlessly using our advanced AI technology.",
    content: <SkeletonTwo />,
    className: "lg:col-span-2",
  },
  {
    title: "AI on YouTube",
    description:
      "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
    content: <SkeletonThree />,
    className: "lg:col-span-2",
  },
  {
    title: "Deploy in seconds",
    description:
      "With our blazing fast cloud services, you can deploy your model in seconds with enterprise-grade reliability.",
    content: <SkeletonFour />,
    className: "lg:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0.5 bg-neutral-900">
      {features.map((feature, i) => (
        <div
          key={feature.title}
          className={cn(
            "relative bg-black overflow-hidden",
            feature.className
          )}
        >
          <div className="p-8">
            <h3 className="text-[1.75rem] font-medium text-white mb-2 leading-tight">
              {feature.title}
            </h3>
            <p className="text-neutral-400 text-[0.9rem] mb-8 leading-relaxed">
              {feature.description}
            </p>
            {feature.content}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkeletonOne() {
  return (
    <div className="relative w-full">
      <img
        src="https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2940&auto=format&fit=crop"
        alt="Project management"
        className="w-full aspect-[4/3] object-cover object-left-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
    </div>
  );
}

function SkeletonTwo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="relative aspect-[3/4]">
        <img
          src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop"
          alt="AI generated 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative aspect-[3/4]">
        <img
          src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop"
          alt="AI generated 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function SkeletonThree() {
  return (
    <div className="relative w-full aspect-video group">
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
}

function SkeletonFour() {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe />
      </div>
    </div>
  );
}