import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSeedling, FaTree, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80';

const SoilOptions = () => {
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="A Living Legacy: Choosing How Your Soil is Returned"
        height="60vh"
      />
      
      <Section padding="5rem 0">
        <IntroContainer>
          <IntroText>
            The nutrient-rich soil created through terramation represents a unique opportunity to create a living memorial. 
            Whether you choose to nurture a single tree, create a vibrant garden, or share your essence with multiple loved ones, 
            we offer flexible options for receiving and using your transformed soil.
          </IntroText>
        </IntroContainer>
        
        <OptionsContainer>
          <SectionHeading>Soil Return Options</SectionHeading>
          <OptionsGrid>
            <OptionCard>
              <OptionImageContainer>
                <OptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Full Amount" />
              </OptionImageContainer>
              <OptionContent>
                <OptionTitle>Full Amount</OptionTitle>
                <OptionDetails>
                  <OptionSpec>Volume: Approx. 1-1.5 cubic yards</OptionSpec>
                  <OptionSpec>Weight: Approx. 800-1,200 lbs</OptionSpec>
                </OptionDetails>
                <OptionDescription>
                  The complete amount of soil produced through the terramation process. Ideal for significant memorial 
                  plantings, creating multiple gardens, or distribution among several family members or meaningful locations.
                </OptionDescription>
                <OptionIdealFor>
                  <IdealForHeading>Ideal for:</IdealForHeading>
                  <IdealForItem>
                    <IdealForIcon><FaTree /></IdealForIcon>
                    <IdealForText>Multiple memorial trees</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaLeaf /></IdealForIcon>
                    <IdealForText>Large memorial gardens</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaMapMarkerAlt /></IdealForIcon>
                    <IdealForText>Distribution to multiple locations</IdealForText>
                  </IdealForItem>
                </OptionIdealFor>
              </OptionContent>
            </OptionCard>
            
            <OptionCard>
              <OptionImageContainer>
                <OptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Large Burlap Bag" />
              </OptionImageContainer>
              <OptionContent>
                <OptionTitle>Large Burlap Bag</OptionTitle>
                <OptionDetails>
                  <OptionSpec>Volume: Approx. 25 gallons</OptionSpec>
                  <OptionSpec>Weight: Approx. 150-200 lbs</OptionSpec>
                </OptionDetails>
                <OptionDescription>
                  A substantial portion of soil, delivered in an eco-friendly burlap bag. Perfect for planting a 
                  significant memorial tree or creating a dedicated garden space that will thrive for years to come.
                </OptionDescription>
                <OptionIdealFor>
                  <IdealForHeading>Ideal for:</IdealForHeading>
                  <IdealForItem>
                    <IdealForIcon><FaTree /></IdealForIcon>
                    <IdealForText>Large memorial tree</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaLeaf /></IdealForIcon>
                    <IdealForText>Small memorial garden</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaMapMarkerAlt /></IdealForIcon>
                    <IdealForText>Enriching a special natural area</IdealForText>
                  </IdealForItem>
                </OptionIdealFor>
              </OptionContent>
            </OptionCard>
            
            <OptionCard>
              <OptionImageContainer>
                <OptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Medium Burlap Bag" />
              </OptionImageContainer>
              <OptionContent>
                <OptionTitle>Medium Burlap Bag</OptionTitle>
                <OptionDetails>
                  <OptionSpec>Volume: Approx. 10 gallons</OptionSpec>
                  <OptionSpec>Weight: Approx. 60-80 lbs</OptionSpec>
                </OptionDetails>
                <OptionDescription>
                  A moderate amount of soil in a manageable burlap bag. Suitable for larger potted plants, 
                  enriching an existing garden bed, or sharing among a few close family members.
                </OptionDescription>
                <OptionIdealFor>
                  <IdealForHeading>Ideal for:</IdealForHeading>
                  <IdealForItem>
                    <IdealForIcon><FaSeedling /></IdealForIcon>
                    <IdealForText>Medium-sized memorial plants</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaLeaf /></IdealForIcon>
                    <IdealForText>Enhancing existing gardens</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaMapMarkerAlt /></IdealForIcon>
                    <IdealForText>Sharing with a few loved ones</IdealForText>
                  </IdealForItem>
                </OptionIdealFor>
              </OptionContent>
            </OptionCard>
            
            <OptionCard>
              <OptionImageContainer>
                <OptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Small Burlap Bag" />
              </OptionImageContainer>
              <OptionContent>
                <OptionTitle>Small Burlap Bag</OptionTitle>
                <OptionDetails>
                  <OptionSpec>Volume: Approx. 5 gallons</OptionSpec>
                  <OptionSpec>Weight: Approx. 30-40 lbs</OptionSpec>
                </OptionDetails>
                <OptionDescription>
                  A modest amount of soil in a compact burlap bag. Perfect for smaller memorial gestures, 
                  such as potted plants or enriching a small garden area.
                </OptionDescription>
                <OptionIdealFor>
                  <IdealForHeading>Ideal for:</IdealForHeading>
                  <IdealForItem>
                    <IdealForIcon><FaSeedling /></IdealForIcon>
                    <IdealForText>Small potted memorial plants</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaLeaf /></IdealForIcon>
                    <IdealForText>Small garden areas</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaMapMarkerAlt /></IdealForIcon>
                    <IdealForText>Scattering in a special location</IdealForText>
                  </IdealForItem>
                </OptionIdealFor>
              </OptionContent>
            </OptionCard>
            
            <OptionCard>
              <OptionImageContainer>
                <OptionImage src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Mini Burlap Bag" />
              </OptionImageContainer>
              <OptionContent>
                <OptionTitle>Mini Burlap Bag</OptionTitle>
                <OptionDetails>
                  <OptionSpec>Volume: Approx. 1 gallon</OptionSpec>
                  <OptionSpec>Weight: Approx. 7-10 lbs</OptionSpec>
                </OptionDetails>
                <OptionDescription>
                  A token amount of soil in a small, decorative burlap bag. Ideal for personal keepsakes, 
                  small potted plants, or sharing symbolic amounts with multiple family members.
                </OptionDescription>
                <OptionIdealFor>
                  <IdealForHeading>Ideal for:</IdealForHeading>
                  <IdealForItem>
                    <IdealForIcon><FaSeedling /></IdealForIcon>
                    <IdealForText>Small keepsake plants</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaLeaf /></IdealForIcon>
                    <IdealForText>Symbolic remembrances</IdealForText>
                  </IdealForItem>
                  <IdealForItem>
                    <IdealForIcon><FaMapMarkerAlt /></IdealForIcon>
                    <IdealForText>Sharing with many loved ones</IdealForText>
                  </IdealForItem>
                </OptionIdealFor>
              </OptionContent>
            </OptionCard>
          </OptionsGrid>
        </OptionsContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <IdeasContainer>
          <SectionHeading>Ideas for Using the Soil</SectionHeading>
          <IdeasGrid>
            <IdeaCard>
              <IdeaIcon><FaTree /></IdeaIcon>
              <IdeaTitle>Plant a Memorial Tree</IdeaTitle>
              <IdeaDescription>
                Trees are powerful symbols of life, growth, and continuity. Using your soil to plant a tree creates a living 
                memorial that will grow for generations, providing beauty, shade, and habitat for wildlife. Consider choosing 
                a species with personal significance or one native to your area for the greatest environmental benefit.
              </IdeaDescription>
            </IdeaCard>
            
            <IdeaCard>
              <IdeaIcon><FaLeaf /></IdeaIcon>
              <IdeaTitle>Create a Memorial Garden</IdeaTitle>
              <IdeaDescription>
                Design a dedicated garden space using your soil. This could include favorite flowers, herbs, vegetables, or 
                native plants. A memorial garden provides a peaceful place for reflection and connection, while supporting 
                pollinators and local ecosystems. It can be as simple or elaborate as you wish.
              </IdeaDescription>
            </IdeaCard>
            
            <IdeaCard>
              <IdeaIcon><FaSeedling /></IdeaIcon>
              <IdeaTitle>Nourish an Existing Plant</IdeaTitle>
              <IdeaDescription>
                Enrich the soil around an existing beloved tree or garden. This option integrates your essence with an 
                already established living system, strengthening its growth and vitality. This can be especially meaningful 
                if there's a particular plant or place that holds special significance.
              </IdeaDescription>
            </IdeaCard>
            
            <IdeaCard>
              <IdeaIcon><FaMapMarkerAlt /></IdeaIcon>
              <IdeaTitle>Scatter in a Meaningful Location</IdeaTitle>
              <IdeaDescription>
                With proper permissions, the soil can be scattered in a special natural location that held meaning in your life. 
                This might be a favorite hiking trail, a family property, or another significant outdoor space. Always check local 
                regulations and obtain necessary permissions before scattering.
              </IdeaDescription>
            </IdeaCard>
          </IdeasGrid>
        </IdeasContainer>
      </Section>
      
      <Section padding="5rem 0">
        <LogisticsContainer>
          <SectionHeading>Logistics of Soil Delivery</SectionHeading>
          <LogisticsContent>
            <LogisticsParagraph>
              We understand that receiving and using your soil is a deeply personal and important part of the terramation process. 
              Our team handles every aspect with care, respect, and attention to detail.
            </LogisticsParagraph>
            
            <LogisticsDetails>
              <LogisticsDetail>
                <LogisticsDetailTitle>Timing</LogisticsDetailTitle>
                <LogisticsDetailText>
                  The soil is typically ready for return approximately 60-90 days after the terramation process begins. 
                  We'll communicate clearly with your designated contacts throughout the process and coordinate the delivery 
                  timing to accommodate your plans for the soil.
                </LogisticsDetailText>
              </LogisticsDetail>
              
              <LogisticsDetail>
                <LogisticsDetailTitle>Delivery Options</LogisticsDetailTitle>
                <LogisticsDetailText>
                  We offer several delivery methods depending on your location and preferences:
                  <ul>
                    <li>Pick-up at our facility (by appointment)</li>
                    <li>Home delivery within our service area</li>
                    <li>Shipping of smaller quantities (Mini and Small bags only)</li>
                    <li>Delivery to a specified natural area or memorial location</li>
                  </ul>
                </LogisticsDetailText>
              </LogisticsDetail>
              
              <LogisticsDetail>
                <LogisticsDetailTitle>Preparation Guidance</LogisticsDetailTitle>
                <LogisticsDetailText>
                  Along with your soil, we provide comprehensive guidance on handling, storing, and using it. 
                  This includes recommendations for mixing ratios when planting, best practices for various uses, 
                  and suggestions for meaningful ceremonies or rituals if desired.
                </LogisticsDetailText>
              </LogisticsDetail>
              
              <LogisticsDetail>
                <LogisticsDetailTitle>Professional Support</LogisticsDetailTitle>
                <LogisticsDetailText>
                  For those who would like assistance with planting or creating a memorial space, we can recommend 
                  local landscapers, arborists, and gardeners who understand the unique nature and significance of 
                  terramation soil.
                </LogisticsDetailText>
              </LogisticsDetail>
            </LogisticsDetails>
          </LogisticsContent>
        </LogisticsContainer>
      </Section>
      
      <Section backgroundColor="var(--primary-green)" textColor="var(--light-text)" padding="5rem 0">
        <CTAContainer>
          <CTAHeading>Ready to discuss your soil preferences?</CTAHeading>
          <CTAText>
            Your soil options can be specified as part of your pre-planning process. Our specialists are ready to answer your questions 
            and help you make the choice that best aligns with your vision for your living legacy.
          </CTAText>
          <CTAButtons>
            <PrimaryButton to="/pre-plan">Start Your Pre-Plan</PrimaryButton>
            <SecondaryButton to="/contact">Contact a Specialist</SecondaryButton>
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

const OptionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const OptionCard = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OptionImageContainer = styled.div`
  height: 100%;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const OptionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const OptionContent = styled.div`
  padding: 2rem;
`;

const OptionTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--primary-green);
`;

const OptionDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const OptionSpec = styled.p`
  font-weight: 500;
  margin: 0;
`;

const OptionDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const OptionIdealFor = styled.div`
  background-color: rgba(163, 190, 140, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
`;

const IdealForHeading = styled.h4`
  margin-bottom: 1rem;
  color: var(--primary-green);
`;

const IdealForItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IdealForIcon = styled.span`
  color: var(--primary-green);
  margin-right: 0.75rem;
  font-size: 1.1rem;
`;

const IdealForText = styled.span``;

const IdeasContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const IdeasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IdeaCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IdeaIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1.5rem;
`;

const IdeaTitle = styled.h3`
  margin-bottom: 1rem;
`;

const IdeaDescription = styled.p`
  line-height: 1.6;
`;

const LogisticsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const LogisticsContent = styled.div``;

const LogisticsParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
`;

const LogisticsDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LogisticsDetail = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const LogisticsDetailTitle = styled.h3`
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const LogisticsDetailText = styled.div`
  line-height: 1.6;
  
  ul {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
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
  margin-bottom: 2rem;
  font-size: 1.1rem;
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

export default SoilOptions;
