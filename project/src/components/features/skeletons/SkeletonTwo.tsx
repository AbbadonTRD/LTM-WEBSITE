export const SkeletonTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative aspect-[0.75] rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop"
          alt="AI generated 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative aspect-[0.75] rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop"
          alt="AI generated 2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};