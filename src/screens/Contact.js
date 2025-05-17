import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { InlineWidget } from "react-calendly";

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log(formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Connect with Healing Partners"
        height="50vh"
      />
      
      <Section padding="5rem 0">
        <ContactContainer>
          <ContactInfo>
            <InfoHeading>Get in Touch</InfoHeading>
            <InfoText>
              We're here to answer your questions about terramation, pre-planning, and how we can help you make arrangements 
              that align with your values. Reach out through any of the methods below or fill out the contact form.
            </InfoText>
            
            <ContactMethods>
              <ContactMethod>
                <ContactMethodIcon>
                  <FaPhone />
                </ContactMethodIcon>
                <ContactMethodContent>
                  <ContactMethodLabel>Phone</ContactMethodLabel>
                  <ContactMethodValue>509-460-9254</ContactMethodValue>
                </ContactMethodContent>
              </ContactMethod>
              
              <ContactMethod>
                <ContactMethodIcon>
                  <FaEnvelope />
                </ContactMethodIcon>
                <ContactMethodContent>
                  <ContactMethodLabel>Email</ContactMethodLabel>
                  <ContactMethodValue>brandon@threadgillmemorial.com</ContactMethodValue>
                </ContactMethodContent>
              </ContactMethod>
              
              <ContactMethod>
                <ContactMethodIcon>
                  <FaMapMarkerAlt />
                </ContactMethodIcon>
                <ContactMethodContent>
                  <ContactMethodLabel>Address</ContactMethodLabel>
                  <ContactMethodValue>123 Nature Way, Greenville, CA 90210</ContactMethodValue>
                </ContactMethodContent>
              </ContactMethod>
            </ContactMethods>
            
            <SocialHeading>Connect With Us</SocialHeading>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>
            
            <p>
            <InlineWidget url="https://calendly.com/mikemp109/30min" />
            </p>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormHeading>Send Us a Message</FormHeading>
            <FormGroup>
              <FormLabel htmlFor="name">Full Name *</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="email">Email Address *</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject *</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message *</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="6" 
                required 
              />
            </FormGroup>
            
            <FormSubmit type="submit">Send Message</FormSubmit>
          </ContactForm>
        </ContactContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="4rem 0">
        <FAQPreviewContainer>
          <FAQPreviewHeading>Frequently Asked Questions</FAQPreviewHeading>
          <FAQPreviewText>
            Find answers to common questions about terramation, pre-planning, and our services.
          </FAQPreviewText>
          <FAQPreviewButton to="/faq">View All FAQs</FAQPreviewButton>
        </FAQPreviewContainer>
      </Section>
    </>
  );
};

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 960px) {
    order: 2;
  }
`;

const InfoHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactMethodIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactMethodContent = styled.div``;

const ContactMethodLabel = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 1rem;
`;

const ContactMethodValue = styled.p`
  margin: 0;
  color: var(--medium-text);
`;

const SocialHeading = styled.h3`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: var(--primary-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
  }
`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MapText = styled.p`
  color: var(--medium-text);
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 960px) {
    order: 1;
  }
`;

const FormHeading = styled.h2`
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const FormSubmit = styled.button`
  background-color: var(--primary-green);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
  }
`;

const FAQPreviewContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQPreviewHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FAQPreviewText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FAQPreviewButton = styled.a`
  display: inline-block;
  background-color: var(--primary-green);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
    color: white;
  }
`;

export default Contact;
