import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf, FaHandHoldingHeart, FaMoneyBillWave, FaPhoneAlt } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Testimonial from '../components/Testimonial';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80';

const Home = () => {
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Secure Your Peace. Nurture the Earth. Pre-Plan Your Gentle Return."
        subtitle="Healing Partners offers a responsible, natural alternative to cremation. Ensure your final wishes are honored and leave a legacy of life with our affordable terramation pre-payment plans."
        primaryButtonText="Get Your Free Pre-Plan Quote"
        primaryButtonLink="/pre-plan"
        secondaryButtonText="Learn About Terramation"
        secondaryButtonLink="/process"
      />
      
      <Section padding="5rem 0 3rem">
        <ProblemSolutionContainer>
          <ProblemContainer>
            <SectionHeading>The Rising Cost & Impact of Conventional Options</SectionHeading>
            <ProblemList>
              <ProblemItem>Direct cremation averages $2,000-$3,000 and is tied to volatile fossil fuel prices.</ProblemItem>
              <ProblemItem>Crematoriums contribute to air pollution and have a significant carbon footprint.</ProblemItem>
              <ProblemItem>Traditional burial uses valuable land and resources.</ProblemItem>
            </ProblemList>
          </ProblemContainer>
          
          <SolutionContainer>
            <SectionHeading>A Responsible Choice for You & the Planet</SectionHeading>
            <SolutionList>
              <SolutionItem>Lock in your terramation plan at today's price.</SolutionItem>
              <SolutionItem>Become nutrient-rich soil – a truly carbon-negative option.</SolutionItem>
              <SolutionItem>Give back to the earth, simply and naturally.</SolutionItem>
            </SolutionList>
          </SolutionContainer>
        </ProblemSolutionContainer>
      </Section>
      
      <Section 
        title="Why Pre-Plan with Healing Partners?" 
        backgroundColor="var(--cream)"
        centered={true}
        padding="3rem 0 5rem"
      >
        <BenefitsContainer>
          <Card 
            icon={<FaHandHoldingHeart />}
            title="Peace of Mind"
            content="Ensure your wishes are met. No burden on loved ones."
            variant="transparent"
          />
          <Card 
            icon={<FaMoneyBillWave />}
            title="Financial Security"
            content="Protect against rising costs. Affordable payment plans."
            variant="transparent"
          />
          <Card 
            icon={<FaLeaf />}
            title="Eco-Conscious"
            content="The only carbon-negative choice. Heal the earth."
            variant="transparent"
          />
          <Card 
            icon={<FaPhoneAlt />}
            title="Simple Process"
            content="One simple phone call for your family. We handle everything."
            variant="transparent"
          />
        </BenefitsContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <ProcessOverviewContainer>
          <ProcessContent>
            <SectionHeading>How Terramation Works</SectionHeading>
            <ProcessDescription>
              A gentle, natural process transforming human remains into life-giving soil. 
              No flames, no chemicals, just a respectful return to the earth.
            </ProcessDescription>
            <ProcessButton to="/process">Discover the Process</ProcessButton>
          </ProcessContent>
          <ProcessImageContainer>
            {/* Placeholder for process illustration - replace with actual image */}
            <ProcessImage src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Terramation Process" />
          </ProcessImageContainer>
        </ProcessOverviewContainer>
      </Section>
      
      <Section padding="5rem 0">
        <TestimonialsHeading>What Our Pre-Planners Say</TestimonialsHeading>
        <TestimonialsContainer>
          <Testimonial 
            quote="Knowing that my final wishes are secured gives me such peace of mind. The process was simple, and I love that I'm making a responsible choice for the planet."
            author="Sarah Johnson"
            role="Pre-Planner"
          />
          <Testimonial 
            quote="After researching all my options, terramation was clearly the most environmentally responsible choice. Healing Partners made pre-planning easy and affordable."
            author="Michael Chen"
            role="Pre-Planner"
          />
          <Testimonial 
            quote="I wanted to spare my children from difficult decisions and unexpected costs. Now they'll only need to make one phone call when the time comes."
            author="Eleanor Rodriguez"
            role="Pre-Planner"
          />
        </TestimonialsContainer>
      </Section>
      
      <Section backgroundColor="var(--muted-blue)" textColor="var(--light-text)" padding="5rem 0">
        <ComparisonContainer>
          <ComparisonContent>
            <SectionHeading color="var(--light-text)">The Future of Farewell is Clearer and Greener</SectionHeading>
            <ComparisonText>
              See how terramation with Healing Partners offers a more responsible and often more predictable cost than cremation, especially as resource scarcity impacts traditional methods.
            </ComparisonText>
            <ComparisonButton to="/why-choose-terramation">Compare Your Options</ComparisonButton>
          </ComparisonContent>
        </ComparisonContainer>
      </Section>
      
      <Section padding="5rem 0">
        <CTAContainer>
          <CTAHeading>Ready to Take the First Step?</CTAHeading>
          <CTAText>
            Secure your terramation pre-plan today and give yourself and your loved ones peace of mind.
          </CTAText>
          <CTAButtons>
            <PrimaryButton to="/pre-plan">Get Your Free Pre-Plan Quote</PrimaryButton>
            <SecondaryButton to="/contact">Contact a Planning Specialist</SecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </Section>
    </>
  );
};

const ProblemSolutionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProblemContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SolutionContainer = styled.div`
  background-color: var(--primary-green);
  color: var(--light-text);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const SectionHeading = styled.h3`
  margin-bottom: 1.5rem;
  color: ${props => props.color || 'inherit'};
`;

const ProblemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProblemItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "•";
    color: var(--primary-green);
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SolutionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SolutionItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "✓";
    color: var(--light-text);
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BenefitsContainer = styled.div`
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

const ProcessOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessContent = styled.div``;

const ProcessDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ProcessButton = styled(Link)`
  display: inline-block;
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

const ProcessImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ProcessImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TestimonialsHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ComparisonContent = styled.div`
  text-align: center;
`;

const ComparisonText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ComparisonButton = styled(Link)`
  display: inline-block;
  background-color: var(--light-text);
  color: var(--primary-green);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--cream);
    transform: translateY(-2px);
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const CTAHeading = styled.h2`
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-green);
  color: var(--light-text);
  padding: 1rem 2rem;
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

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: var(--primary-green);
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: 2px solid var(--primary-green);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(74, 103, 65, 0.1);
    transform: translateY(-2px);
  }
`;

export default Home;
