import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  content,
  icon,
  image,
  buttonText,
  buttonLink,
  variant = 'default',
  onClick
}) => {
  const cardContent = (
    <>
      {image && <CardImage src={image} alt={title} />}
      <CardBody>
        {icon && <CardIcon>{icon}</CardIcon>}
        {title && <CardTitle>{title}</CardTitle>}
        {content && <CardContent>{content}</CardContent>}
        {buttonText && buttonLink && (
          <CardButton to={buttonLink}>{buttonText}</CardButton>
        )}
        {buttonText && onClick && (
          <CardButtonAsButton onClick={onClick}>{buttonText}</CardButtonAsButton>
        )}
      </CardBody>
    </>
  );

  return (
    <CardContainer variant={variant}>
      {buttonLink && !onClick ? (
        <CardLinkWrapper to={buttonLink}>{cardContent}</CardLinkWrapper>
      ) : (
        cardContent
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${props => props.variant === 'transparent' ? 'transparent' : 'white'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.variant === 'transparent' ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.08)'};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: ${props => props.variant === 'transparent' ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.variant === 'transparent' ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.1)'};
  }
`;

const CardLinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--dark-text);
`;

const CardContent = styled.div`
  color: var(--medium-text);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const CardButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-green);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: var(--secondary-green);
    color: white;
  }
`;

const CardButtonAsButton = styled.button`
  display: inline-block;
  background-color: var(--primary-green);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  
  &:hover {
    background-color: var(--secondary-green);
  }
`;

export default Card;
