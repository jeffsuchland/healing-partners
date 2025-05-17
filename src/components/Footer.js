import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>Healing Partners</FooterLogo>
            <FooterText>
              Secure your peace. Nurture the Earth. Pre-Plan your gentle return.
            </FooterText>
            <SocialIcons>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinks>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/process">Our Process</FooterLink>
              <FooterLink to="/why-choose-terramation">Why Choose Terramation</FooterLink>
              <FooterLink to="/pre-plan">Pre-Plan</FooterLink>
              <FooterLink to="/soil-options">Soil Options</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Resources</FooterHeading>
            <FooterLinks>
              <FooterLink to="/our-story">Our Story</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Contact Us</FooterHeading>
            <ContactInfo>
              <ContactItem>Phone: 509-460-9254</ContactItem>
              <ContactItem>Email: brandon@threadgillmemorial.com</ContactItem>
              <ContactItem>123 Nature Way, Greenville, CA 90210</ContactItem>
            </ContactInfo>
            <CTAButton to="/pre-plan">Get Your Free Quote</CTAButton>
          </FooterColumn>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            &copy; {currentYear} Healing Partners. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <FooterBottomLink to="/privacy-policy">Privacy Policy</FooterBottomLink>
            <FooterBottomLink to="/terms-of-service">Terms of Service</FooterBottomLink>
          </FooterBottomLinks>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--dark-brown);
  color: var(--light-text);
  padding: 4rem 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h3`
  font-family: var(--heading-font);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--light-text);
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: var(--light-text);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--light-green);
  }
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--light-text);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: var(--light-text);
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--light-green);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-green);
  color: var(--light-text);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  margin: 0;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterBottomLink = styled(Link)`
  color: var(--light-text);
  font-size: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--light-green);
  }
`;

export default Footer;
