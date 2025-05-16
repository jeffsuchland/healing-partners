import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(allowMultiple ? [] : null);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index) 
          : [...prev, index]
      );
    } else {
      setOpenItems(openItems === index ? null : index);
    }
  };

  const isItemOpen = (index) => {
    if (allowMultiple) {
      return openItems.includes(index);
    }
    return openItems === index;
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader 
            onClick={() => toggleItem(index)}
            isOpen={isItemOpen(index)}
          >
            <AccordionTitle>{item.title}</AccordionTitle>
            <AccordionIcon>
              {isItemOpen(index) ? <FaChevronUp /> : <FaChevronDown />}
            </AccordionIcon>
          </AccordionHeader>
          <AccordionContent isOpen={isItemOpen(index)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background-color: ${props => props.isOpen ? 'var(--light-green)' : 'white'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.isOpen ? 'var(--light-green)' : 'rgba(163, 190, 140, 0.1)'};
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: var(--dark-text);
  font-weight: 500;
`;

const AccordionIcon = styled.div`
  font-size: 1rem;
  color: var(--primary-green);
`;

const AccordionContent = styled.div`
  padding: ${props => props.isOpen ? '1.25rem' : '0 1.25rem'};
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  line-height: 1.6;
`;

export default Accordion;
