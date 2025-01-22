import styled from 'styled-components';
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
`;

const LogoText = styled(motion.span)`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #7928ca, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(121, 40, 202, 0.3));
`;

const LogoDot = styled(motion.span)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(to right, #ff0080, #7928ca);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(255, 0, 128, 0.3));
`;

const Logo = () => {
  const containerVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  const dotVariants = {
    initial: { scale: 1 },
    hover: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <LogoContainer
      variants={containerVariants}
      whileHover="hover"
      animate={{
        filter: [
          'drop-shadow(0 0 8px rgba(121, 40, 202, 0.3))',
          'drop-shadow(0 0 12px rgba(255, 0, 128, 0.5))',
          'drop-shadow(0 0 8px rgba(121, 40, 202, 0.3))'
        ],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }}
    >
      <LogoText variants={letterVariants}>K</LogoText>
      <LogoText variants={letterVariants}>G</LogoText>
      <LogoDot variants={dotVariants}>.</LogoDot>
      <LogoText 
        style={{ fontSize: '1.8rem', opacity: 0.9 }}
        variants={letterVariants}
      >
        dev
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;
