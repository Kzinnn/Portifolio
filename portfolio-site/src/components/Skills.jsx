// Importação de dependências
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaGitAlt, FaDocker, FaPython, FaHtml5, FaCss3Alt, FaAws, FaApple } from 'react-icons/fa'
import { SiFlask, SiPostgresql, SiLua } from 'react-icons/si'

// Container principal da seção de habilidades
const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`

// Título da seção com gradiente
const SkillsTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #0066cc 0%, #4d94ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

// Grid responsivo para os cards de habilidades
const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  width: 100%;
`

// Card individual de habilidade com efeitos hover
const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0, 102, 204, 0.1);
    border-color: rgba(0, 102, 204, 0.3);
  }
`

// Ícone da habilidade com mudança de cor no hover
const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #0066cc;
  transition: color 0.3s ease;

  ${SkillCard}:hover & {
    color: #4d94ff;
  }
`

// Nome da habilidade
const SkillName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
`

// Barra de progresso da habilidade
const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(90deg, #0066cc, #4d94ff);
    border-radius: 2px;
  }
`

// Array de habilidades com seus respectivos ícones e níveis
const skills = [
  { name: 'Docker', icon: FaDocker, level: 85 },
  { name: 'Python', icon: FaPython, level: 90 },
  { name: 'SQL', icon: SiPostgresql, level: 85 },
  { name: 'Flask', icon: SiFlask, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 90 },
  { name: 'HTML', icon: FaHtml5, level: 95 },
  { name: 'CSS', icon: FaCss3Alt, level: 90 },
  { name: 'AWS', icon: FaAws, level: 85 },
  { name: 'Lua', icon: SiLua, level: 80 },
  { name: 'macOS', icon: FaApple, level: 90 }
]

// Componente principal de Skills
const Skills = () => {
  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Variantes de animação para os itens individuais
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
    <SkillsContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SkillsTitle variants={itemVariants}>
        Habilidades Técnicas
      </SkillsTitle>
      <SkillsGrid>
        {/* Mapeia o array de habilidades para criar os cards */}
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SkillIcon as={skill.icon} />
            <SkillName>{skill.name}</SkillName>
            <SkillLevel level={skill.level} />
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  )
}

export default Skills
