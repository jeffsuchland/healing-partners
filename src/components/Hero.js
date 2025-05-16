import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText, 
  secondaryButtonLink,
  overlay = true,
  height = '80vh'
}) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} height={height}>
      {overlay && <Overlay />}
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        <ButtonContainer>
          {primaryButtonText && (
            <PrimaryButton to={primaryButtonLink}>
              {primaryButtonText}
            </PrimaryButton>
          )}
          {secondaryButtonText && (
            <SecondaryButton to={secondaryButtonLink}>
              {secondaryButtonText}
            </SecondaryButton>
          )}
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  height: ${props => props.height};
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 80px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: var(--light-text);
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  color: var(--light-text);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-green);
  color: var(--light-text);
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
    color: var(--light-text);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: var(--light-text);
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border: 2px solid var(--light-text);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    color: var(--light-text);
  }
`;

export default Hero;
