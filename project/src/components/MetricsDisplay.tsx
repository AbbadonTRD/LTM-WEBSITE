import { motion } from 'framer-motion';

const metrics = [
  { label: 'Clients', value: '200+' },
  { label: 'Projects', value: '500+' },
  { label: 'Countries', value: '25+' },
];

export const MetricsDisplay = () => {
  return (
    <div className="flex gap-8 justify-center">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            {metric.value}
          </div>
          <div className="text-gray-600 mt-1">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};