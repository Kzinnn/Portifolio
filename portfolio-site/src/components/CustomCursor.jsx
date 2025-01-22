import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: #7928ca;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorRing = styled(motion.div)`
  width: 32px;
  height: 32px;
  border: 2px solid #ff0080;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const checkPointer = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (element) {
        const cursor = window.getComputedStyle(element).cursor;
        setIsPointer(cursor === 'pointer');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousemove', checkPointer);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousemove', checkPointer);
    };
  }, [mousePosition.x, mousePosition.y]);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
    },
  };

  const ringVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    },
  };

  return (
    <>
      <CursorDot
        variants={variants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <CursorRing
        variants={ringVariants}
        animate={isPointer ? 'pointer' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;
