import React from 'react';
import styled from 'styled-components';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  backgroundColor = 'var(--cream)', 
  textColor = 'var(--dark-text)',
  padding = '5rem 0',
  centered = false
}) => {
  return (
    <SectionContainer backgroundColor={backgroundColor} padding={padding}>
      <div className="container">
        {(title || subtitle) && (
          <SectionHeader centered={centered}>
            {title && <SectionTitle textColor={textColor}>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle textColor={textColor}>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        <SectionContent centered={centered}>
          {children}
        </SectionContent>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
  text-align: ${props => props.centered ? 'center' : 'left'};
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.textColor};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: ${props => props.textColor};
  font-size: 1.2rem;
  max-width: 800px;
  margin: ${props => props.centered ? '0 auto' : '0'};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionContent = styled.div`
  text-align: ${props => props.centered ? 'center' : 'left'};
`;

export default Section;
