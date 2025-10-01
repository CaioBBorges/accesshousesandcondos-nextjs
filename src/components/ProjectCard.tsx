'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  status: string;
  image: string;
  link: string;
  description?: string;
}

const ProjectCard = ({ title, status, image, link, description }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#3078e4] text-white px-3 py-1 rounded-full text-sm font-medium">
            {status}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {description && (
              <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {description}
              </p>
            )}
            <Link
              href={link}
              className="inline-block bg-[#3078e4] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;