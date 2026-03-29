import { useState, useEffect, useCallback } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const open = useCallback((data) => {
    setContent(data);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, close]);

  return { isOpen, content, open, close };
}
