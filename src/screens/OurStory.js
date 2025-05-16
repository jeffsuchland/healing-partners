import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHeart, FaLeaf, FaHandshake, FaBalanceScale, FaSeedling } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80';

const OurStory = () => {
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Healing Partners: Committed to a Kinder, More Natural Way"
        height="60vh"
      />
      
      <Section padding="5rem 0">
        <MissionContainer>
          <SectionHeading>Our Mission</SectionHeading>
          <MissionStatement>
            At Healing Partners, we're dedicated to providing a responsible, eco-friendly, and compassionate end-of-life option 
            that honors both the individual and the earth. We believe in empowering people to make thoughtful choices that align 
            with their values, creating peace of mind for themselves and their loved ones while contributing to a healthier planet.
          </MissionStatement>
        </MissionContainer>
        
        <ValuesContainer>
          <SectionHeading>Our Values</SectionHeading>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <FaHeart />
              </ValueIcon>
              <ValueTitle>Compassion</ValueTitle>
              <ValueDescription>
                We approach every interaction with empathy, understanding, and genuine care. We recognize the sensitive nature of 
                end-of-life planning and provide support that respects each person's unique journey and emotions.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <FaBalanceScale />
              </ValueIcon>
              <ValueTitle>Transparency</ValueTitle>
              <ValueDescription>
                We believe in clear, honest communication about our process, pricing, and practices. We provide straightforward 
                information without jargon or hidden details, empowering informed decisions.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <FaLeaf />
              </ValueIcon>
              <ValueTitle>Environmental Stewardship</ValueTitle>
              <ValueDescription>
                We are committed to offering services that heal rather than harm the earth. Our carbon-negative approach reflects 
                our dedication to sustainable practices and responsible resource use.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <FaHandshake />
              </ValueIcon>
              <ValueTitle>Integrity</ValueTitle>
              <ValueDescription>
                We honor our commitments and maintain the highest ethical standards in all aspects of our work. We treat every 
                individual with dignity and respect, both in life and in their return to the earth.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <FaSeedling />
              </ValueIcon>
              <ValueTitle>Simplicity</ValueTitle>
              <ValueDescription>
                We value straightforward, uncomplicated approaches that reduce stress and confusion. Our processes are designed 
                to be clear, accessible, and focused on what truly matters.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesContainer>
      </Section>
      
      <Section backgroundColor="var(--light-green)" padding="5rem 0">
        <DifferenceContainer>
          <SectionHeading>The Healing Partners Difference</SectionHeading>
          <DifferenceContent>
            <DifferenceParagraph>
              What sets Healing Partners apart is our holistic approach to end-of-life care that considers both the practical needs of individuals 
              and families and the long-term health of our planet. While many providers focus solely on disposition services, we emphasize the 
              importance of pre-planning, education, and creating meaningful legacies.
            </DifferenceParagraph>
            <DifferenceParagraph>
              Our team brings together expertise in environmental science, compassionate care, and financial planning to offer a service that's 
              not just about saying goodbye, but about creating a positive impact that extends far beyond a single life. We've developed our 
              terramation process to be the most efficient, respectful, and environmentally beneficial available.
            </DifferenceParagraph>
            <DifferenceParagraph>
              We're also committed to accessibility, offering flexible payment plans that make this responsible choice available to more people. 
              By focusing on pre-planning, we help individuals secure peace of mind and protect their loved ones from difficult decisions and 
              financial burdens during times of grief.
            </DifferenceParagraph>
          </DifferenceContent>
        </DifferenceContainer>
      </Section>
      
      <Section padding="5rem 0">
        <TeamContainer>
          <SectionHeading>Meet Our Team</SectionHeading>
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Sarah Johnson" />
              <TeamMemberInfo>
                <TeamMemberName>Sarah Johnson</TeamMemberName>
                <TeamMemberTitle>Founder & CEO</TeamMemberTitle>
                <TeamMemberBio>
                  With a background in environmental science and a personal experience that highlighted the need for more sustainable 
                  end-of-life options, Sarah founded Healing Partners to offer a service aligned with her values of compassion and 
                  environmental stewardship. She leads our team with vision and heart.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Michael Chen" />
              <TeamMemberInfo>
                <TeamMemberName>Michael Chen</TeamMemberName>
                <TeamMemberTitle>Director of Operations</TeamMemberTitle>
                <TeamMemberBio>
                  Michael brings over 15 years of experience in sustainable business operations to Healing Partners. His expertise 
                  ensures our terramation process is efficient, respectful, and maintains the highest environmental standards. 
                  He's passionate about creating systems that honor both people and the planet.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Elena Rodriguez" />
              <TeamMemberInfo>
                <TeamMemberName>Elena Rodriguez</TeamMemberName>
                <TeamMemberTitle>Pre-Planning Specialist</TeamMemberTitle>
                <TeamMemberBio>
                  With a background in counseling and financial planning, Elena guides individuals through the pre-planning process 
                  with sensitivity and expertise. She's dedicated to helping people make arrangements that provide peace of mind 
                  and reflect their personal values.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" alt="James Wilson" />
              <TeamMemberInfo>
                <TeamMemberName>James Wilson</TeamMemberName>
                <TeamMemberTitle>Environmental Scientist</TeamMemberTitle>
                <TeamMemberBio>
                  James oversees the scientific aspects of our terramation process, ensuring optimal conditions for natural 
                  transformation and the highest quality soil. His research background in soil ecology and regenerative practices 
                  informs our carbon-negative approach.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
          </TeamGrid>
        </TeamContainer>
      </Section>
      
      <Section backgroundColor="var(--primary-green)" textColor="var(--light-text)" padding="5rem 0">
        <CTAContainer>
          <CTAHeading>Learn How We Can Help You Plan</CTAHeading>
          <CTAText>
            Our team is ready to answer your questions and guide you through the pre-planning process with care and expertise.
          </CTAText>
          <CTAButtons>
            <PrimaryButton to="/pre-plan">Explore Pre-Planning Options</PrimaryButton>
            <SecondaryButton to="/contact">Contact Our Team</SecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </Section>
    </>
  );
};

const MissionContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
`;

const SectionHeading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const MissionStatement = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  line-height: 1.6;
`;

const DifferenceContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const DifferenceContent = styled.div``;

const DifferenceParagraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TeamContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const TeamMemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const TeamMemberInfo = styled.div``;

const TeamMemberName = styled.h3`
  margin-bottom: 0.5rem;
`;

const TeamMemberTitle = styled.h4`
  color: var(--primary-green);
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TeamMemberBio = styled.p`
  line-height: 1.6;
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

export default OurStory;
