import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface CTAButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const CTAButton = ({ primary = true, children, onClick }: CTAButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={primary ? "default" : "secondary"}
        size="lg"
        onClick={onClick}
        className={`font-semibold backdrop-blur-lg ${
          primary 
            ? 'bg-white/20 hover:bg-white/30 text-white border border-white/10' 
            : 'bg-white/10 hover:bg-white/15 text-white/80 border border-white/5'
        }`}
      >
        {children}
      </Button>
    </motion.div>
  );
};