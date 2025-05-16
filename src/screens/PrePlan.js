import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck, FaShieldAlt, FaLeaf, FaHeart } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const PrePlan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    alert('Thank you for your interest! A planning specialist will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Plan Ahead. Live Fully. Leave a Legacy of Life."
        subtitle="Secure your terramation with Healing Partners through our simple, affordable pre-payment plans. Give yourself peace of mind and your loved ones a lasting gift."
        height="70vh"
      />
      
      <Section padding="5rem 0">
        <WhyPrePlanContainer>
          <SectionHeading>Why Pre-Planning is Essential</SectionHeading>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>
                <FaShieldAlt />
              </BenefitIcon>
              <BenefitTitle>Lock in Today's Pricing</BenefitTitle>
              <BenefitDescription>
                Protect yourself from the inevitable rise in end-of-life costs, especially cremation, 
                which is tied to escalating fossil fuel prices. Our pre-payment plans guarantee today's rates.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaHeart />
              </BenefitIcon>
              <BenefitTitle>Alleviate Future Burdens</BenefitTitle>
              <BenefitDescription>
                Ensure your family isn't faced with difficult decisions and unexpected expenses during a time of grief. 
                A simple phone call is all it takes for them to activate your plan.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitTitle>Guarantee Your Wishes</BenefitTitle>
              <BenefitDescription>
                Make your preference for a natural, gentle return to the earth clear and legally binding. 
                Your detailed wishes will be documented and honored when the time comes.
              </BenefitDescription>
            </BenefitCard>
            
            <BenefitCard>
              <BenefitIcon>
                <FaLeaf />
              </BenefitIcon>
              <BenefitTitle>The Responsible Choice</BenefitTitle>
              <BenefitDescription>
                For your finances, your family, and the planet. Pre-planning terramation is a thoughtful decision 
                that reflects care for those you love and the world they'll inherit.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
        </WhyPrePlanContainer>
      </Section>
      
      <Section backgroundColor="var(--cream)" padding="5rem 0">
        <PlansContainer>
          <SectionHeading>Our Pre-Payment Plans</SectionHeading>
          <PlansSubheading>Clear, Simple Options with No Hidden Fees</PlansSubheading>
          
          <PlansGrid>
            <PlanCard>
              <PlanName>Single Payment Plan</PlanName>
              <PlanPrice>$4,995</PlanPrice>
              <PlanDescription>One-time payment, complete peace of mind</PlanDescription>
              <PlanFeatures>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>All-inclusive terramation process</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Choice of soil remains delivery</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Price guaranteed - no hidden fees</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>5% discount from standard pricing</FeatureText>
                </PlanFeature>
              </PlanFeatures>
              <PlanButton to="#quote-form">Select This Plan</PlanButton>
            </PlanCard>
            
            <PlanCard featured>
              <FeaturedTag>Most Popular</FeaturedTag>
              <PlanName>3-Year Plan</PlanName>
              <PlanPrice>$149<PlanPriceSmall>/month</PlanPriceSmall></PlanPrice>
              <PlanDescription>Affordable monthly payments for 36 months</PlanDescription>
              <PlanFeatures>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>All-inclusive terramation process</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Choice of soil remains delivery</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Price guaranteed - no hidden fees</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>No interest or financing charges</FeatureText>
                </PlanFeature>
              </PlanFeatures>
              <PlanButton to="#quote-form" featured>Select This Plan</PlanButton>
            </PlanCard>
            
            <PlanCard>
              <PlanName>5-Year Plan</PlanName>
              <PlanPrice>$99<PlanPriceSmall>/month</PlanPriceSmall></PlanPrice>
              <PlanDescription>Our most flexible payment option</PlanDescription>
              <PlanFeatures>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>All-inclusive terramation process</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Choice of soil remains delivery</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Price guaranteed - no hidden fees</FeatureText>
                </PlanFeature>
                <PlanFeature>
                  <FeatureIcon><FaCheck /></FeatureIcon>
                  <FeatureText>Lowest monthly payment option</FeatureText>
                </PlanFeature>
              </PlanFeatures>
              <PlanButton to="#quote-form">Select This Plan</PlanButton>
            </PlanCard>
          </PlansGrid>
        </PlansContainer>
      </Section>
      
      <Section padding="5rem 0">
        <HowToStartContainer>
          <SectionHeading>How to Get Started</SectionHeading>
          <StepsContainer>
            <Step>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Get Your Free Quote</StepTitle>
                <StepDescription>
                  Answer a few simple questions online or call us for a no-obligation quote.
                </StepDescription>
              </StepContent>
            </Step>
            
            <Step>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Choose Your Plan</StepTitle>
                <StepDescription>
                  Select the payment option that works best for you.
                </StepDescription>
              </StepContent>
            </Step>
            
            <Step>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Complete Your Arrangements</StepTitle>
                <StepDescription>
                  We'll guide you through the simple paperwork.
                </StepDescription>
              </StepContent>
            </Step>
            
            <Step>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Rest Assured</StepTitle>
                <StepDescription>
                  Your plan is in place. We'll send you a confirmation and your loved ones will only need to make one simple phone call when the time comes.
                </StepDescription>
              </StepContent>
            </Step>
          </StepsContainer>
        </HowToStartContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <SoilOptionsContainer>
          <SoilOptionsContent>
            <SectionHeading>Your Transformed Essence, Returned with Care</SectionHeading>
            <SoilOptionsDescription>
              As part of your pre-plan, you can decide how much of the nutrient-rich soil you would like returned for memorialization.
            </SoilOptionsDescription>
            
            <SoilOptionsGrid>
              <SoilOption>
                <SoilOptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Full Amount" />
                <SoilOptionName>Full Amount</SoilOptionName>
                <SoilOptionDescription>
                  (Approx. 1-1.5 cubic yards) – Ideal for significant memorial plantings or distribution among loved ones.
                </SoilOptionDescription>
              </SoilOption>
              
              <SoilOption>
                <SoilOptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Large Burlap Bag" />
                <SoilOptionName>Large Burlap Bag</SoilOptionName>
                <SoilOptionDescription>
                  (Approx. 25 gallons) – Perfect for planting a memorial tree or creating a small garden bed.
                </SoilOptionDescription>
              </SoilOption>
              
              <SoilOption>
                <SoilOptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Medium Burlap Bag" />
                <SoilOptionName>Medium Burlap Bag</SoilOptionName>
                <SoilOptionDescription>
                  (Approx. 10 gallons) – Suitable for larger potted plants or enriching a special spot.
                </SoilOptionDescription>
              </SoilOption>
              
              <SoilOption>
                <SoilOptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Small Burlap Bag" />
                <SoilOptionName>Small Burlap Bag</SoilOptionName>
                <SoilOptionDescription>
                  (Approx. 5 gallons) – For smaller memorial gestures or sharing.
                </SoilOptionDescription>
              </SoilOption>
              
              <SoilOption>
                <SoilOptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Mini Burlap Bag" />
                <SoilOptionName>Mini Burlap Bag</SoilOptionName>
                <SoilOptionDescription>
                  (Approx. 1 gallon) – A token amount for personal remembrance.
                </SoilOptionDescription>
              </SoilOption>
            </SoilOptionsGrid>
            
            <SoilOptionsButton to="/soil-options">Learn More About Soil Options</SoilOptionsButton>
          </SoilOptionsContent>
        </SoilOptionsContainer>
      </Section>
      
      <Section padding="5rem 0">
        <TrustContainer>
          <TrustContent>
            <SectionHeading>Trust & Security</SectionHeading>
            <TrustDescription>
              <p>
                When you pre-plan with Healing Partners, your funds are secure. All pre-payments are placed in a state-regulated trust 
                fund or backed by an insurance policy, ensuring they'll be available when needed.
              </p>
              <p>
                Our commitment to you and your family extends beyond the financial. We promise transparent communication, 
                respectful service, and unwavering dedication to honoring your wishes.
              </p>
            </TrustDescription>
            <TrustBadges>
              <TrustBadge>
                <TrustBadgeIcon>
                  <FaShieldAlt />
                </TrustBadgeIcon>
                <TrustBadgeName>Secure Trust Fund</TrustBadgeName>
              </TrustBadge>
              <TrustBadge>
                <TrustBadgeIcon>
                  <FaCheck />
                </TrustBadgeIcon>
                <TrustBadgeName>State Regulated</TrustBadgeName>
              </TrustBadge>
              <TrustBadge>
                <TrustBadgeIcon>
                  <FaLeaf />
                </TrustBadgeIcon>
                <TrustBadgeName>Certified Green</TrustBadgeName>
              </TrustBadge>
            </TrustBadges>
          </TrustContent>
        </TrustContainer>
      </Section>
      
      <Section backgroundColor="var(--primary-green)" textColor="var(--light-text)" padding="5rem 0">
        <QuoteFormContainer id="quote-form">
          <QuoteFormContent>
            <SectionHeading>Take the First Step Towards Peace of Mind Today</SectionHeading>
            <QuoteForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
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
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="message">Questions or Comments</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4"
                />
              </FormGroup>
              <FormSubmit type="submit">Get Your Personalized Pre-Plan Quote</FormSubmit>
            </QuoteForm>
            <QuoteContact>
              <QuoteContactText>Or call us directly:</QuoteContactText>
              <QuoteContactPhone>(555) 123-4567</QuoteContactPhone>
            </QuoteContact>
          </QuoteFormContent>
        </QuoteFormContainer>
      </Section>
    </>
  );
};

const WhyPrePlanContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1.5rem;
`;

const BenefitTitle = styled.h3`
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  line-height: 1.6;
`;

const PlansContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PlansSubheading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: -2rem;
  margin-bottom: 3rem;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const PlanCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  transform: ${props => props.featured ? 'scale(1.05)' : 'none'};
  border: ${props => props.featured ? '2px solid var(--primary-green)' : 'none'};
  z-index: ${props => props.featured ? '1' : '0'};
  
  @media (max-width: 960px) {
    transform: none;
    margin-bottom: ${props => props.featured ? '2rem' : '0'};
  }
`;

const FeaturedTag = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background-color: var(--primary-green);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--primary-green);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const PlanPriceSmall = styled.span`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
`;

const PlanDescription = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--medium-text);
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.span`
  color: var(--primary-green);
  margin-right: 0.75rem;
  font-size: 1.1rem;
`;

const FeatureText = styled.span`
  line-height: 1.4;
`;

const PlanButton = styled(Link)`
  display: block;
  background-color: ${props => props.featured ? 'var(--primary-green)' : 'white'};
  color: ${props => props.featured ? 'white' : 'var(--primary-green)'};
  border: 2px solid var(--primary-green);
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.featured ? 'var(--secondary-green)' : 'var(--primary-green)'};
    color: white;
    transform: translateY(-2px);
  }
`;

const HowToStartContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--primary-green);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 2rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary-green);
`;

const StepDescription = styled.p`
  line-height: 1.6;
`;

const SoilOptionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SoilOptionsContent = styled.div`
  text-align: center;
`;

const SoilOptionsDescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const SoilOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SoilOption = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SoilOptionImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const SoilOptionName = styled.h4`
  padding: 1rem 1rem 0.5rem;
  margin: 0;
`;

const SoilOptionDescription = styled.p`
  padding: 0 1rem 1rem;
  font-size: 0.9rem;
  color: var(--medium-text);
`;

const SoilOptionsButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-green);
  color: white;
  padding: 0.8rem 1.5rem;
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

const TrustContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const TrustContent = styled.div`
  text-align: center;
`;

const TrustDescription = styled.div`
  margin-bottom: 3rem;
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const TrustBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrustBadgeIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
`;

const TrustBadgeName = styled.h4`
  margin: 0;
`;

const QuoteFormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const QuoteFormContent = styled.div``;

const QuoteForm = styled.form`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--dark-text);
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
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
  }
`;

const QuoteContact = styled.div`
  text-align: center;
`;

const QuoteContactText = styled.p`
  margin-bottom: 0.5rem;
  color: var(--light-text);
`;

const QuoteContactPhone = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--light-text);
`;

export default PrePlan;
