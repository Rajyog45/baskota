import { motion } from "framer-motion";
import { progressBar } from "../utils/animation";

interface ProgressBarProps {
  label: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-blue-600 font-semibold">{value}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-blue-600 h-2 rounded-full"
          {...progressBar(value)}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
