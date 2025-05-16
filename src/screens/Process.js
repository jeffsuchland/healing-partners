import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';

const Process = () => {
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="The Journey of Terramation: A Gentle Transition to Earth"
        height="60vh"
      />
      
      <Section padding="5rem 0">
        <ProcessIntro>
          <ProcessIntroText>
            Terramation is a natural, respectful process that transforms human remains into nutrient-rich soil. 
            This gentle method honors both the individual and the earth, creating a meaningful legacy of life.
          </ProcessIntroText>
        </ProcessIntro>
        
        <ProcessSteps>
          <ProcessStep>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>The Beginning</StepTitle>
              <StepDescription>
                The journey begins with a respectful preparation. The body is placed in a vessel designed specifically for the terramation process. 
                Personal, biodegradable mementos such as flowers, notes from loved ones, and organic keepsakes can be included, becoming part of this return to earth.
              </StepDescription>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>The Transformation</StepTitle>
              <StepDescription>
                The vessel is surrounded by organic materials like wood chips, alfalfa, and straw, creating the perfect environment for natural microbial activity. 
                These microorganisms gently transform the body through a controlled process that optimizes temperature, moisture, and aeration. 
                This phase typically takes 30-45 days, allowing nature to work at its own respectful pace.
              </StepDescription>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>The Resting</StepTitle>
              <StepDescription>
                After the initial transformation, the resulting material enters a curing phase. During this time, the soil continues to stabilize and mature. 
                This important step ensures that the final soil is rich, healthy, and ready for its next purpose. 
                The entire process is monitored with care and respect throughout.
              </StepDescription>
            </StepContent>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>The Return</StepTitle>
              <StepDescription>
                The final step is the screening process, where any remaining bone fragments are respectfully reduced to a fine powder and incorporated back into the soil. 
                No DNA or identifiable bone fragments remain in the final soil; they become part of the nutrient-rich whole. 
                The completed soil is then prepared according to the family's wishes, ready to nourish new life.
              </StepDescription>
            </StepContent>
          </ProcessStep>
        </ProcessSteps>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <SoilResultContainer>
          <SoilResultContent>
            <SectionHeading>The Result: Nutrient-Rich Soil</SectionHeading>
            <SoilDescription>
              <p>
                The terramation process yields over a cubic yard of healthy, living soil. This nutrient-rich medium is perfect for gardens, 
                tree planting, or scattering in a meaningful natural place.
              </p>
              <p>
                This soil represents a true presence, allowing loved ones to connect with you in a living, healing way. 
                Many families choose to use the soil to plant memorial trees or gardens, creating a growing legacy that continues to give life.
              </p>
              <p>
                We offer various options for returning the soil to families, from small keepsake amounts to the full volume. 
                Learn more about our soil return options and how families have used them to create meaningful memorials.
              </p>
              <SoilOptionsButton to="/soil-options">Explore Soil Options</SoilOptionsButton>
            </SoilDescription>
          </SoilResultContent>
          <SoilImageContainer>
            {/* Placeholder for soil image - replace with actual image */}
            <SoilImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Nutrient-rich soil" />
          </SoilImageContainer>
        </SoilResultContainer>
      </Section>
      
      <Section padding="5rem 0">
        <CarbonImpactContainer>
          <CarbonImpactHeading>Carbon Negative Impact Explained</CarbonImpactHeading>
          <CarbonImpactContent>
            <CarbonIcon>
              <FaLeaf />
            </CarbonIcon>
            <CarbonDescription>
              <p>
                Our process is inherently low-impact, using minimal energy and producing no harmful emissions. 
                But the true carbon benefit comes from the final soil. When used to enrich gardens, forests, or conservation lands, 
                this soil actively sequesters carbon from the atmosphere, making terramation the only truly carbon-negative end-of-life option.
              </p>
              <p>
                Unlike cremation, which releases carbon dioxide and other pollutants, or traditional burial, which uses resources 
                and prevents natural decomposition, terramation works with nature's cycles to create a positive environmental impact.
              </p>
              <p>
                By choosing terramation, you're not just reducing harm to the environment – you're actively contributing to its healing.
              </p>
            </CarbonDescription>
          </CarbonImpactContent>
        </CarbonImpactContainer>
      </Section>
      
      <Section backgroundColor="var(--primary-green)" textColor="var(--light-text)" padding="5rem 0">
        <CTAContainer>
          <CTAHeading>Ready to choose a legacy of life?</CTAHeading>
          <CTAButtons>
            <PrimaryButton to="/pre-plan">Pre-Plan Your Terramation</PrimaryButton>
            <SecondaryButton to="/faq">Have Questions? Read our FAQ</SecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </Section>
    </>
  );
};

const ProcessIntro = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const ProcessIntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
`;

const ProcessSteps = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
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
  margin-bottom: 1rem;
  color: var(--primary-green);
`;

const StepDescription = styled.p`
  line-height: 1.7;
`;

const SoilResultContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SoilResultContent = styled.div``;

const SectionHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

const SoilDescription = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const SoilOptionsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-green);
  color: var(--light-text);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
    color: var(--light-text);
  }
`;

const SoilImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SoilImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const CarbonImpactContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CarbonImpactHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const CarbonImpactContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CarbonIcon = styled.div`
  font-size: 4rem;
  color: var(--primary-green);
  flex-shrink: 0;
`;

const CarbonDescription = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTAHeading = styled.h2`
  margin-bottom: 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: var(--primary-green);
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--cream);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export default Process;
