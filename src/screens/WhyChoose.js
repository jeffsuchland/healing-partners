import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLeaf, FaMoneyBillWave, FaHeart, FaTree } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const WhyChoose = () => {
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="A More Responsible Path: Why Terramation is the Future"
        height="60vh"
      />
      
      <Section padding="5rem 0">
        <IntroContainer>
          <IntroText>
            When considering end-of-life options, more people are seeking alternatives that align with their values of environmental 
            responsibility, financial prudence, and meaningful legacy. Terramation offers a gentle, natural approach that addresses 
            these concerns while providing a unique opportunity to give back to the earth.
          </IntroText>
        </IntroContainer>
        
        <BenefitsContainer>
          <BenefitCategory>
            <CategoryIcon>
              <FaLeaf />
            </CategoryIcon>
            <CategoryTitle>Environmental Benefits</CategoryTitle>
            <BenefitsList>
              <BenefitItem>
                <BenefitTitle>Carbon Negative</BenefitTitle>
                <BenefitDescription>
                  Unlike cremation, which releases CO₂ and other pollutants, terramation actually sequesters carbon. 
                  The resulting soil, when used in gardens or conservation, actively removes carbon from the atmosphere, 
                  making it the only truly carbon-negative disposition option.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>No Air Pollution</BenefitTitle>
                <BenefitDescription>
                  Crematoriums release mercury, dioxins, furans, and other pollutants into the air. These emissions 
                  can have negative impacts on local air quality and public health. Terramation produces no harmful 
                  emissions or pollutants.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Saves Land</BenefitTitle>
                <BenefitDescription>
                  Traditional burial consumes valuable land and often introduces embalming chemicals into the soil. 
                  Terramation requires no permanent land use and creates nutrient-rich soil that can nourish new growth.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Nourishes Earth</BenefitTitle>
                <BenefitDescription>
                  The resulting soil is rich in nutrients that support plant growth and soil health. By choosing 
                  terramation, you're not just minimizing harm – you're actively contributing to ecological renewal.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitCategory>
          
          <BenefitCategory>
            <CategoryIcon>
              <FaMoneyBillWave />
            </CategoryIcon>
            <CategoryTitle>Financial Benefits</CategoryTitle>
            <BenefitsList>
              <BenefitItem>
                <BenefitTitle>The Rising Cost of Cremation</BenefitTitle>
                <BenefitDescription>
                  The average cost of a direct cremation in the US is approximately $2,000 - $3,000, but this can vary widely 
                  and is subject to increases. Cremation relies heavily on natural gas, a fossil fuel. As petroleum becomes 
                  scarcer and prices rise, cremation costs are projected to climb significantly.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Lock in Today's Prices</BenefitTitle>
                <BenefitDescription>
                  By pre-planning your terramation with Healing Partners, you secure today's price, protected from future 
                  inflation and rising costs. This provides financial certainty and protects your loved ones from unexpected expenses.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Transparent, All-Inclusive Pricing</BenefitTitle>
                <BenefitDescription>
                  Our terramation plans include all necessary services with no hidden fees or unexpected costs. 
                  What you agree to is what you'll pay – period.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Flexible Payment Plans</BenefitTitle>
                <BenefitDescription>
                  We offer several payment options to fit your budget, making it easier to secure your plans 
                  without financial strain.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitCategory>
          
          <BenefitCategory>
            <CategoryIcon>
              <FaHeart />
            </CategoryIcon>
            <CategoryTitle>Emotional & Personal Benefits</CategoryTitle>
            <BenefitsList>
              <BenefitItem>
                <BenefitTitle>Peace of Mind for You</BenefitTitle>
                <BenefitDescription>
                  Knowing your wishes are documented and will be respectfully carried out provides significant peace of mind. 
                  Pre-planning allows you to make thoughtful decisions without the pressure of grief or urgency.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>No Worry for Survivors</BenefitTitle>
                <BenefitDescription>
                  A simple phone call is all that's needed from your family. They won't face difficult decisions or financial 
                  stress during a time of grief. Everything is arranged and paid for in advance.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>A Living Memorial</BenefitTitle>
                <BenefitDescription>
                  The soil can be used to plant a tree, create a garden, or enrich a special place – providing a continued 
                  presence and connection for loved ones. This living memorial grows and evolves, unlike static monuments.
                </BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitTitle>Meaningful & Healing</BenefitTitle>
                <BenefitDescription>
                  Many find comfort in a process aligned with natural cycles and the desire to give back. Terramation 
                  honors the natural order of life and death, providing a meaningful conclusion that can aid in the healing process.
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitCategory>
        </BenefitsContainer>
      </Section>
      
      <Section backgroundColor="var(--cream)" padding="5rem 0">
        <ComparisonContainer>
          <ComparisonHeading>Comparison: Terramation vs. Cremation vs. Traditional Burial</ComparisonHeading>
          <ComparisonTable>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>Terramation</th>
                <th>Cremation</th>
                <th>Traditional Burial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Cost</td>
                <td>Comparable to cremation</td>
                <td>$2,000 - $3,000+</td>
                <td>$7,000 - $12,000+</td>
              </tr>
              <tr>
                <td>Future Cost</td>
                <td>Stable</td>
                <td>Rising with fossil fuel prices</td>
                <td>Rising with land costs</td>
              </tr>
              <tr>
                <td>Carbon Footprint</td>
                <td>Carbon negative</td>
                <td>~540 lbs CO₂ per cremation</td>
                <td>High (embalming, casket, vault)</td>
              </tr>
              <tr>
                <td>Air Pollution</td>
                <td>None</td>
                <td>Mercury, dioxins, CO₂</td>
                <td>Minimal</td>
              </tr>
              <tr>
                <td>Land Use</td>
                <td>None required</td>
                <td>None required</td>
                <td>Permanent plot needed</td>
              </tr>
              <tr>
                <td>Process</td>
                <td>Natural decomposition</td>
                <td>High-temperature incineration</td>
                <td>Preservation, burial</td>
              </tr>
              <tr>
                <td>Final Remains</td>
                <td>Nutrient-rich soil</td>
                <td>Ashes</td>
                <td>Preserved body</td>
              </tr>
              <tr>
                <td>Legacy</td>
                <td>Living, growing memorial</td>
                <td>Static memorial or scattering</td>
                <td>Cemetery monument</td>
              </tr>
            </tbody>
          </ComparisonTable>
        </ComparisonContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <TestimonialContainer>
          <TestimonialQuote>
            "After researching all the options, I chose terramation for its environmental benefits and the beautiful idea of becoming 
            part of a living ecosystem. Pre-planning with Healing Partners gave me peace of mind knowing I'm leaving a positive legacy."
          </TestimonialQuote>
          <TestimonialAuthor>— Robert M., Pre-Planner</TestimonialAuthor>
        </TestimonialContainer>
      </Section>
      
      <Section padding="5rem 0">
        <CTAContainer>
          <CTAHeading>Make the responsible choice. For yourself, your loved ones, and the planet.</CTAHeading>
          <CTAButtons>
            <PrimaryButton to="/pre-plan">Explore Pre-Payment Plans</PrimaryButton>
            <SecondaryButton to="/process">Learn More About the Process</SecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </Section>
    </>
  );
};

const IntroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 900px;
  margin: 0 auto;
`;

const BenefitCategory = styled.div``;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h2`
  margin-bottom: 2rem;
  color: var(--primary-green);
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const BenefitTitle = styled.h3`
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const BenefitDescription = styled.p`
  line-height: 1.6;
`;

const ComparisonContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ComparisonHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  th {
    background-color: var(--primary-green);
    color: white;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  td:first-child {
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const TestimonialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-family: var(--heading-font);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--dark-text);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TestimonialAuthor = styled.p`
  font-size: 1.1rem;
  color: var(--dark-text);
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

export default WhyChoose;
