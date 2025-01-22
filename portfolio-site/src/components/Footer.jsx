// Importação de dependências
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDiscord, FaHeart } from 'react-icons/fa'

// Container do footer com fundo gradiente
const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  backdrop-filter: blur(10px);
`

// Wrapper para o conteúdo do footer
const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

// Parte superior do footer
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 102, 204, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`

// Informações do footer
const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

// Logo do footer
const FooterLogo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #0066cc, #4d94ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

// Tagline do footer
const FooterTagline = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`

// Links do footer
const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

// Link individual do footer
const FooterLink = styled(motion.a)`
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

// Parte inferior do footer
const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`

// Navegação do footer
const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

// Link de navegação do footer
const FooterNavLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`

// Texto de copyright
const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

// Links sociais
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

// Links de navegação
const navLinks = [
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contato', href: '#contact' }
]

// Componente principal do Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterInfo>
            <FooterLogo
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KG
            </FooterLogo>
            <FooterTagline>
              Transformando ideias em realidade através do código
            </FooterTagline>
          </FooterInfo>

          <FooterLinks>
            {socialLinks.map((link, index) => (
              <FooterLink
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
              </FooterLink>
            ))}
          </FooterLinks>
        </FooterTop>

        <FooterBottom>
          <FooterNav>
            {navLinks.map((link) => (
              <FooterNavLink
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </FooterNavLink>
            ))}
          </FooterNav>

          <Copyright>
            <span> 2024 Khayan G.</span>
            <span>Feito com</span>
            <FaHeart style={{ color: '#0066cc' }} />
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
