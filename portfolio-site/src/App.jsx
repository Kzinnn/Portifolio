// Importação de dependências
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import Hero3D from './components/Hero3D'
import Background3D from './components/Background3D'
import Skills from './components/Skills'
import Footer from './components/Footer'
import EasterEggs from './components/EasterEggs'

// Estilos do container principal
const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #000000;
`

// Container para todo o conteúdo com z-index para ficar acima do background 3D
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

// Wrapper para centralizar e limitar a largura do conteúdo
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 26vh;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

// Header com logo e links sociais
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`

// Logo KG com efeito de cor
const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #fff 0%, #0066cc 50%, #4d94ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 102, 204, 0.3);
  padding: 0.5rem;
  border-radius: 8px;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 30px rgba(0, 102, 204, 0.5);
    
    &:after {
      opacity: 1;
      transform: scale(1.05);
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,102,204,0.1) 100%);
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.3s ease;
  }

  span {
    background: linear-gradient(135deg, #4d94ff 0%, #0066cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(77, 148, 255, 0.3);
  }
`

// Container para os links sociais no header
const HeaderSocialLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`

// Links sociais no header com efeito hover
const HeaderSocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0066cc;
    transform: translateY(-2px);
  }
`

// Seção principal de conteúdo com animações
const ContentSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`

// Seção do título principal
const TitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
`

// Título principal
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, #fff 0%, #0066cc 50%, #4d94ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 40px rgba(0, 102, 204, 0.4);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

// Subtítulo
const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  background: linear-gradient(135deg, #fff 0%, #0066cc 50%, #4d94ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
  text-shadow: 0 0 25px rgba(0, 102, 204, 0.3);
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

// Container para os links sociais na seção principal
const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`

// Links sociais na seção principal com efeitos
const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0066cc;
    transform: translateY(-3px);
  }
`

// Container para o componente 3D de fundo
const Background3DWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`

// Componente principal
function App() {
  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  // Variantes de animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <MainWrapper>
      <EasterEggs />
      {/* Background 3D */}
      <Background3DWrapper>
        <Hero3D />
      </Background3DWrapper>
      
      <Container>
        {/* Header com Logo e Links Sociais */}
        <Header>
          <Logo>K<span>G</span></Logo>
          <HeaderSocialLinks>
            <HeaderSocialLink 
              href="https://github.com/Kzinnn" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </HeaderSocialLink>
            <HeaderSocialLink 
              href="https://www.linkedin.com/in/khayan-g-59442719b" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </HeaderSocialLink>
            <HeaderSocialLink 
              href="https://discord.gg/7nQpgEBt88" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </HeaderSocialLink>
          </HeaderSocialLinks>
        </Header>

        {/* Conteúdo Principal */}
        <ContentWrapper>
          <ContentSection
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <TitleSection>
              <Title variants={itemVariants}>
                Transformando ideias em código com paixão pela tecnologia e inovação
              </Title>
              <Subtitle variants={itemVariants}>
                Combinando criatividade e tecnologia para criar soluções que impactam positivamente a vida das pessoas
              </Subtitle>
              <SocialLinks variants={itemVariants}>
                <SocialLink 
                  href="https://github.com/Kzinnn" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink 
                  href="https://www.linkedin.com/in/khayan-g-59442719b" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </SocialLink>
                <SocialLink 
                  href="https://discord.gg/7nQpgEBt88" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord />
                </SocialLink>
              </SocialLinks>
            </TitleSection>

            {/* Seção de Habilidades */}
            <Skills />
          </ContentSection>
        </ContentWrapper>

        {/* Footer */}
        <Footer />
      </Container>
    </MainWrapper>
  )
}

export default App
