// Importação de dependências
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

// Container principal
const ExperienceContainer = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

// Título da seção
const ExperienceTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #0066cc 0%, #4d94ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

// Timeline container
const Timeline = styled(motion.div)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background: rgba(0, 102, 204, 0.2);
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`

// Item da timeline
const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 2rem 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 0;

    &:nth-child(odd) {
      align-self: flex-start;
      padding-left: 45px;
    }
  }
`

// Conteúdo do item
const TimelineContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  width: 100%;
  max-width: 500px;

  &:hover {
    border-color: rgba(0, 102, 204, 0.3);
    background: rgba(0, 102, 204, 0.1);
  }
`

// Ícone do item
const TimelineIcon = styled(motion.div)`
  position: absolute;
  background: #0066cc;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  left: -50px;
  top: 0;

  @media (max-width: 768px) {
    left: -60px;
  }
`

// Data do item
const TimelineDate = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
`

// Título do item
const TimelineTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

// Empresa/Instituição
const TimelineCompany = styled.h4`
  color: #0066cc;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

// Descrição do item
const TimelineDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
`

// Array de experiências
const experiences = [
  {
    type: 'work',
    date: 'Jan 2023 - Presente',
    title: 'Desenvolvedor Full Stack Senior',
    company: 'Tech Solutions Inc.',
    description: 'Desenvolvimento de soluções escaláveis usando React, Node.js e AWS. Liderança técnica de equipe e mentoria de desenvolvedores júnior.'
  },
  {
    type: 'education',
    date: '2019 - 2022',
    title: 'Bacharelado em Ciência da Computação',
    company: 'Universidade Federal do Rio de Janeiro',
    description: 'Foco em desenvolvimento de software, algoritmos e estruturas de dados. Participação em projetos de pesquisa em IA.'
  },
  {
    type: 'work',
    date: 'Jun 2021 - Dez 2022',
    title: 'Desenvolvedor Full Stack Pleno',
    company: 'Digital Innovations',
    description: 'Desenvolvimento de aplicações web com foco em performance e escalabilidade. Implementação de CI/CD e práticas ágeis.'
  },
  {
    type: 'work',
    date: 'Jan 2020 - Mai 2021',
    title: 'Desenvolvedor Front-end',
    company: 'Creative Web',
    description: 'Desenvolvimento de interfaces responsivas e acessíveis. Implementação de designs complexos e animações.'
  }
]

// Componente principal
const Experience = () => {
  // Variantes de animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
        damping: 10
      }
    }
  }

  return (
    <ExperienceContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ExperienceTitle variants={itemVariants}>
        Experiência & Formação
      </ExperienceTitle>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            variants={itemVariants}
          >
            <TimelineContent>
              <TimelineIcon>
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </TimelineIcon>
              <TimelineDate>{exp.date}</TimelineDate>
              <TimelineTitle>{exp.title}</TimelineTitle>
              <TimelineCompany>{exp.company}</TimelineCompany>
              <TimelineDescription>{exp.description}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  )
}

export default Experience
