interface FeatureTitleProps {
  children: React.ReactNode;
}

export const FeatureTitle = ({ children }: FeatureTitleProps) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};