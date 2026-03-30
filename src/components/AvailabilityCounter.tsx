import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock } from 'lucide-react';

export default function AvailabilityCounter() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-none border-4 border-black shadow-[12px_12px_0px_#000] overflow-hidden">
      {/* Header */}
      <div className="bg-black p-4 text-white border-b-4 border-black">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-container" />
            <span className="font-display text-2xl tracking-wide uppercase">TECHNICIAN COVERAGE</span>
          </div>
          <div className="flex items-center gap-2 font-display text-lg tracking-wider text-primary-container">
            <Clock className="w-4 h-4" />
            {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>

      {/* Available Count */}
      <div className="p-12 bg-surface text-center">
        <div className="font-display text-3xl text-black mb-2 uppercase">TECHNICIANS AVAILABLE NOW</div>
        <motion.div
           animate={{ scale: [1, 1.05, 1], textShadow: ["0px 0px 0px transparent", "0px 4px 20px rgba(0,0,0,0.2)", "0px 0px 0px transparent"] }}
           transition={{ repeat: Infinity, duration: 3 }}
           className="text-[8rem] md:text-[10rem] font-display leading-none text-black"
        >
          12
        </motion.div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-black border-t-4 border-black text-center text-white">
        <p className="font-display text-2xl tracking-wide">
          ESTIMATED ARRIVAL: <span className="text-black bg-primary-container inline-block px-3 py-1 ml-2">15 MINS</span>
        </p>
      </div>
    </div>
  );
}
