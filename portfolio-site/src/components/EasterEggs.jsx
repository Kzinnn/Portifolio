import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FaGamepad } from 'react-icons/fa';

// Ícone do jogo
const GameIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #0066cc;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

// Container do jogo
const GameContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.95);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #0066cc;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 1000;
`;

const GameCanvas = styled.canvas`
  border: 1px solid #0066cc;
  background: rgba(0, 0, 0, 0.5);
  cursor: crosshair;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #0066cc;
  cursor: pointer;
  font-size: 1.5rem;
  
  &:hover {
    color: #4d94ff;
  }
`;

const ScoreDisplay = styled.div`
  color: #0066cc;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const Instructions = styled.p`
  color: #4d94ff;
  text-align: center;
  margin: 1rem 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const EasterEggs = () => {
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);
  
  // Inicializa o jogo
  const initGame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Função para desenhar uma estrela
    const drawStar = (x, y) => {
      ctx.fillStyle = '#0066cc';
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    };

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Adiciona evento de clique
    canvas.onclick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      drawStar(x, y);
      setScore(prev => prev + 1);
    };
  };

  // Efeito para iniciar/parar o jogo
  useEffect(() => {
    if (showGame && canvasRef.current) {
      initGame();
    }
    
    return () => {
      if (canvasRef.current) {
        canvasRef.current.onclick = null;
      }
    };
  }, [showGame]);

  return (
    <>
      <GameIcon onClick={() => {
        setShowGame(true);
        setScore(0);
      }}>
        <FaGamepad size={24} />
      </GameIcon>

      <GameContainer show={showGame}>
        <CloseButton onClick={() => {
          setShowGame(false);
          setScore(0);
        }}>×</CloseButton>
        <h3 style={{ color: '#0066cc', marginBottom: '1rem', textAlign: 'center' }}>Star Maker!</h3>
        <Instructions>
          Clique em qualquer lugar para criar estrelas!<br/>
          Veja quantas estrelas você consegue criar.
        </Instructions>
        <GameCanvas
          ref={canvasRef}
          width={300}
          height={400}
        />
        <ScoreDisplay>Estrelas criadas: {score}</ScoreDisplay>
      </GameContainer>
    </>
  );
};

export default EasterEggs;
