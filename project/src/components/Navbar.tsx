'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, MenuItem, HoveredLink } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const handleClose = () => {
    setActive(null);
    setIsVisible(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 150) {
        setIsVisible(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      } else {
        // Only hide if not hovering over the menu
        if (!active) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 1000);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [active]);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services" onClose={handleClose}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#services">Our Services</HoveredLink>
            <HoveredLink href="/#features">Features</HoveredLink>
            <HoveredLink href="/#global">Global Reach</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog" onClose={handleClose}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog">All Posts</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Career" onClose={handleClose}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/careers">Open Positions</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" onClose={handleClose}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Get in Touch</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}