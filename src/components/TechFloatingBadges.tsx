import React from 'react';
import Image from 'next/image';

interface TechItem {
  id: string;
  name: string;
  icon: string;
  positionClass: string;
  animationClass: string;
  glowColor: string;
  borderColor: string;
}

const techItems: TechItem[] = [
  // 1. React - Upper sky (left-center)
  {
    id: 'react',
    name: 'React',
    icon: '/images/tech/react.svg',
    positionClass: 'top-18 left-[31%] hidden md:flex',
    animationClass: 'animate-float-glide-1',
    glowColor: 'shadow-sky-500/20 hover:shadow-sky-500/40',
    borderColor: 'border-sky-200/90',
  },
  // 2. Next.js - Upper sky (center)
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: '/images/tech/nextjs.svg',
    positionClass: 'top-14 left-[51%] hidden lg:flex',
    animationClass: 'animate-float-glide-2',
    glowColor: 'shadow-slate-600/20 hover:shadow-slate-600/40',
    borderColor: 'border-slate-300/90',
  },
  // 3. JavaScript - Above left of head/splash
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/images/tech/javascript.svg',
    positionClass: 'top-[24%] left-[68%] hidden lg:flex',
    animationClass: 'animate-float-glide-1',
    glowColor: 'shadow-amber-400/20 hover:shadow-amber-400/40',
    borderColor: 'border-amber-200/90',
  },
  // 4. Docker - Upper sky (far right)
  {
    id: 'docker',
    name: 'Docker',
    icon: '/images/tech/docker.svg',
    positionClass: 'top-16 right-[7%] hidden xl:flex',
    animationClass: 'animate-float-glide-2',
    glowColor: 'shadow-blue-400/20 hover:shadow-blue-400/40',
    borderColor: 'border-sky-200/90',
  },
  // 5. TypeScript - Mid open area (left of splash)
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/images/tech/typescript.svg',
    positionClass: 'top-[44%] left-[41%] hidden lg:flex',
    animationClass: 'animate-float-glide-3',
    glowColor: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    borderColor: 'border-blue-200/90',
  },
  // 6. Git - Lower-mid open area
  {
    id: 'git',
    name: 'Git',
    icon: '/images/tech/git.svg',
    positionClass: 'top-[57%] left-[56%] hidden lg:flex',
    animationClass: 'animate-float-glide-1',
    glowColor: 'shadow-orange-500/20 hover:shadow-orange-500/40',
    borderColor: 'border-orange-200/90',
  },
  // 7. Python - Right side edge (above Ideas card)
  {
    id: 'python',
    name: 'Python',
    icon: '/images/tech/python.svg',
    positionClass: 'top-[50%] right-[2%] hidden 2xl:flex',
    animationClass: 'animate-float-glide-3',
    glowColor: 'shadow-blue-500/20 hover:shadow-blue-500/40',
    borderColor: 'border-blue-200/90',
  },
  // 8. PostgreSQL - Bottom floor (center-left)
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '/images/tech/postgresql.svg',
    positionClass: 'bottom-4 left-[43%] hidden lg:flex',
    animationClass: 'animate-float-glide-1',
    glowColor: 'shadow-indigo-500/20 hover:shadow-indigo-500/40',
    borderColor: 'border-indigo-200/90',
  },
  // 9. Node.js - Bottom floor (center-right)
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '/images/tech/nodejs.svg',
    positionClass: 'bottom-4 left-[56%] hidden lg:flex',
    animationClass: 'animate-float-glide-2',
    glowColor: 'shadow-emerald-500/20 hover:shadow-emerald-500/40',
    borderColor: 'border-emerald-200/90',
  },
];

export default function TechFloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {techItems.map((item) => (
        <div
          key={item.id}
          className={`absolute gpu-float ${item.positionClass} ${item.animationClass}`}
        >
          <div
            title={item.name}
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border ${item.borderColor} shadow-md ${item.glowColor} flex items-center justify-center hover:scale-110 transition-transform duration-300 pointer-events-auto cursor-pointer p-2.5 group`}
          >
            <Image
              src={item.icon}
              alt=""
              width={28}
              height={28}
              unoptimized
              className="w-7 h-7 object-contain group-hover:rotate-6 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
