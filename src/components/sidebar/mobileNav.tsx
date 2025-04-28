'use client';

import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from '@/components/sidebar/navlink/NavLink';
import { CVButton } from '@/components/cvButton/CVButton';
import  styles  from '@/styles/modules/mobileNav.module.css';

export const MobileNav = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            // className="absolute top-16 left-0 right-0 bg-gray-900 text-white flex flex-col items-center gap-4 p-6 shadow-xl"
            className={styles.mobileNav}
          >
            <NavLink href="/" icon='🏠' name='Home' handleClick={()=>setIsOpen(false)}/>
            <NavLink href="/about" icon='🧑‍💻' name='About' handleClick={()=>setIsOpen(false)}/>
            <NavLink href="/projects" icon='📁' name='Projects' handleClick={()=>setIsOpen(false)}/>
            <NavLink href="/contacts" icon='📞' name='Contacts' handleClick={()=>setIsOpen(false)}/>

            <CVButton showOnMobile={true} cvBtnStyles={{"marginBottom": "20px"}} handleClick={()=>setIsOpen(false)}/>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
