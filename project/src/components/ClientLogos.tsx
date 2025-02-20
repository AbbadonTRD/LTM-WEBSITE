import { motion } from 'framer-motion';

const clients = [
  { name: 'Tech 1', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=50&fit=crop&auto=format' },
  { name: 'Tech 2', logo: 'https://images.unsplash.com/photo-1551434678-bf20a6494c82?w=100&h=50&fit=crop&auto=format' },
  { name: 'Tech 3', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=50&fit=crop&auto=format' },
  { name: 'Tech 4', logo: 'https://images.unsplash.com/photo-1551434678-bf20a6494c82?w=100&h=50&fit=crop&auto=format' },
];

export const ClientLogos = () => {
  const doubledClients = [...clients, ...clients]; // Double the array for continuous loop

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {doubledClients.map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 w-28 h-14 relative group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-full object-cover rounded-lg 
                filter grayscale opacity-50 
                group-hover:grayscale-0 group-hover:opacity-100 
                transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};