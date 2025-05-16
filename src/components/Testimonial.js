import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = ({ quote, author, role, image }) => {
  return (
    <TestimonialContainer>
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      <TestimonialQuote>{quote}</TestimonialQuote>
      <TestimonialAuthorInfo>
        {image && <AuthorImage src={image} alt={author} />}
        <AuthorDetails>
          <AuthorName>{author}</AuthorName>
          {role && <AuthorRole>{role}</AuthorRole>}
        </AuthorDetails>
      </TestimonialAuthorInfo>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  margin-top: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--dark-text);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-style: italic;
`;

const TestimonialAuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  margin: 0;
  font-size: 1rem;
  color: var(--dark-text);
`;

const AuthorRole = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: var(--medium-text);
`;

export default Testimonial;
