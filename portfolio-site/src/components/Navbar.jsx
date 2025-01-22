import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  
  span {
    background: linear-gradient(90deg, #0066cc, #4d94ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

const SocialLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 102, 204, 0.1);
  border: 1px solid rgba(0, 102, 204, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    color: #fff;
    background: rgba(0, 102, 204, 0.2);
    border-color: rgba(0, 102, 204, 0.3);
    transform: translateY(-2px);
  }
`

const socialLinks = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/Kzinnn',
    name: 'GitHub'
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/khayan-godinho-2a3a3a2b7/',
    name: 'LinkedIn'
  },
  {
    icon: <FaDiscord />,
    url: 'https://discord.gg/7nQpgEBt88',
    name: 'Discord'
  }
]

const Navbar = () => {
  return (
    <Nav>
      <Logo
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>KG</span>
      </Logo>

      <SocialLinks>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.1 } 
            }}
          >
            {link.icon}
          </SocialLink>
        ))}
      </SocialLinks>
    </Nav>
  )
}

export default Navbar
