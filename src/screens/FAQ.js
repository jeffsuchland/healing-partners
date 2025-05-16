import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';
import Accordion from '../components/Accordion';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('about');
  
  const faqCategories = [
    { id: 'about', name: 'About Terramation' },
    { id: 'preplanning', name: 'Pre-Planning & Costs' },
    { id: 'process', name: 'The Process' },
    { id: 'soil', name: 'Soil & Environment' },
    { id: 'survivors', name: 'For Survivors' }
  ];
  
  const faqItems = {
    about: [
      {
        title: 'What is terramation/human composting?',
        content: (
          <p>
            Terramation, also known as natural organic reduction or human composting, is a gentle, natural process that transforms human remains into nutrient-rich soil. 
            It works with nature's principles to return the body to the earth in a way that creates new life. The process uses organic materials like wood chips, alfalfa, 
            and straw to create the perfect environment for natural decomposition, resulting in rich, living soil that can nourish plants and trees.
          </p>
        )
      },
      {
        title: 'How is terramation different from cremation and burial?',
        content: (
          <>
            <p>
              Terramation differs from traditional options in several key ways:
            </p>
            <p>
              <strong>Compared to cremation:</strong> Cremation uses high temperatures (1400-1800°F) and fossil fuels to reduce the body to ash through incineration. 
              This process releases carbon dioxide and other pollutants into the atmosphere. Terramation, by contrast, uses no fossil fuels for the transformation process 
              and creates carbon-sequestering soil rather than ash.
            </p>
            <p>
              <strong>Compared to burial:</strong> Traditional burial typically involves embalming chemicals, a casket, and a concrete vault, all of which prevent natural 
              decomposition and take up permanent land space. Terramation requires no chemicals, uses biodegradable materials, and creates usable soil rather than requiring 
              permanent land use.
            </p>
          </>
        )
      },
      {
        title: 'Is terramation legal?',
        content: (
          <p>
            Terramation is currently legal in several states, including Washington, Colorado, Oregon, Vermont, California, and New York, with more states considering 
            legislation. Laws vary by state, so it's important to check the current legal status in your area. We stay up-to-date on all legislation and can advise you 
            on the options available in your location.
          </p>
        )
      },
      {
        title: 'Is terramation aligned with religious beliefs?',
        content: (
          <p>
            Many religious traditions emphasize returning to the earth and the cycle of life. Terramation honors these principles by facilitating a natural return to the earth. 
            While specific religious perspectives vary, many people of various faiths have found terramation to be compatible with their spiritual beliefs, especially those 
            with environmental values. We recommend discussing with your spiritual advisor if you have specific religious concerns.
          </p>
        )
      },
      {
        title: 'Who chooses terramation?',
        content: (
          <p>
            People who choose terramation come from all walks of life, but often share certain values: environmental consciousness, a connection to nature, and a desire to 
            leave a positive legacy. Many are gardeners, hikers, conservationists, or simply individuals who find meaning in the idea of becoming part of the cycle of life. 
            People of all ages pre-plan terramation, though we find it especially appeals to those who are thoughtful about their impact on future generations.
          </p>
        )
      }
    ],
    preplanning: [
      {
        title: 'How much does terramation cost?',
        content: (
          <>
            <p>
              Terramation with Healing Partners typically costs around $4,995, comparable to the cost of cremation with services or significantly less than traditional burial. 
              This price includes the complete terramation process and return of soil to the family.
            </p>
            <p>
              We offer several payment plan options to make pre-planning accessible:
            </p>
            <ul>
              <li>Single Payment Plan: $4,995 (includes a 5% discount)</li>
              <li>3-Year Plan: $149/month for 36 months</li>
              <li>5-Year Plan: $99/month for 60 months</li>
            </ul>
            <p>
              All plans include price guarantees with no hidden fees or future increases.
            </p>
          </>
        )
      },
      {
        title: 'Why should I pre-plan?',
        content: (
          <>
            <p>
              Pre-planning your terramation offers several important benefits:
            </p>
            <ul>
              <li>You lock in today's prices, protecting against future increases (especially important as cremation costs rise with fossil fuel prices)</li>
              <li>You spare your loved ones from making difficult decisions during a time of grief</li>
              <li>You ensure your wishes are clearly documented and will be honored</li>
              <li>You have time to thoughtfully consider all options and make choices that reflect your values</li>
              <li>You can discuss your plans with family members, helping them understand and accept your choices</li>
            </ul>
            <p>
              Pre-planning is truly a gift to both yourself and your loved ones.
            </p>
          </>
        )
      },
      {
        title: 'What happens if I move after pre-planning?',
        content: (
          <p>
            Your pre-plan is portable within our service areas. If you move to another location where we or our partner providers offer services, your plan can transfer with you. 
            If you move to an area where terramation is not available, we offer options including a full refund of your pre-payments or conversion to another service. 
            Our pre-planning specialists can provide details specific to your situation.
          </p>
        )
      },
      {
        title: 'What happens to the money I pre-pay? Is it secure?',
        content: (
          <p>
            All pre-payments are secured through either a state-regulated trust fund or an insurance-backed payment program, depending on your state's requirements. 
            These funds are held separately from our operating accounts and are specifically designated for providing your future services. This provides you with 
            financial security and peace of mind, knowing that your pre-plan is fully funded and protected regardless of what happens in the future.
          </p>
        )
      },
      {
        title: 'Can I cancel my pre-plan if I change my mind?',
        content: (
          <p>
            Yes, you can cancel your pre-plan at any time. Depending on your payment status and the terms of your specific agreement, you may be eligible for a full or 
            partial refund. Our goal is to provide flexible options that respect your changing needs and circumstances. Please contact our customer care team for specific 
            details about cancellation terms.
          </p>
        )
      }
    ],
    process: [
      {
        title: 'How long does the terramation process take?',
        content: (
          <p>
            The complete terramation process typically takes 60-90 days. This includes the initial transformation phase (30-45 days), where the body is gently converted to soil, 
            followed by a curing phase (30-45 days), where the soil stabilizes and matures. This timeline allows the natural processes to work at their own pace, ensuring the 
            final soil is rich, healthy, and ready for its next purpose. Throughout this time, we maintain communication with the designated family contacts about the process.
          </p>
        )
      },
      {
        title: 'What exactly happens to the body during terramation?',
        content: (
          <p>
            During terramation, the body is placed in a vessel with organic materials like wood chips, alfalfa, and straw. These materials create the perfect environment for 
            natural microbial activity. The vessel maintains optimal conditions for decomposition, including the right temperature, moisture, and aeration. Microorganisms naturally 
            present in our bodies and the environment do the work of transformation, breaking down organic matter into its elemental components. This is the same process that 
            happens in nature, just in a controlled, optimized environment.
          </p>
        )
      },
      {
        title: 'Are there any chemicals used in the process?',
        content: (
          <p>
            No chemicals are added during the terramation process. The transformation happens through entirely natural biological processes. The only inputs are organic materials 
            like wood chips, alfalfa, and straw, along with water and air to maintain the proper environment for microbial activity. This chemical-free approach is one of the 
            reasons terramation is considered an environmentally friendly option.
          </p>
        )
      },
      {
        title: 'Are bones or DNA present in the final soil?',
        content: (
          <p>
            The microbial process and controlled environment break down organic matter, including denaturing DNA. Bones become very brittle during the process and are then reduced 
            to a fine powder which is incorporated back into the soil. The final result is a homogenous soil mixture where no discernible bone fragments or viable DNA remain. 
            This complete transformation is an important aspect of the terramation process, resulting in soil that is ready to nourish new life.
          </p>
        )
      },
      {
        title: 'Can personal items (notes, flowers) be included?',
        content: (
          <p>
            Yes, certain biodegradable items can be included in the terramation process. These may include flowers, notes from loved ones (on non-glossy paper), small wooden items, 
            or other organic mementos. These items will become part of the transformation process and integrate into the final soil. We provide guidelines for families about what 
            items can be included, ensuring they will decompose properly and not affect the quality of the resulting soil.
          </p>
        )
      }
    ],
    soil: [
      {
        title: 'How much soil is produced through terramation?',
        content: (
          <p>
            The terramation process typically yields about 1 to 1.5 cubic yards of soil (approximately 800-1,200 pounds). This substantial amount allows for various meaningful uses, 
            from planting multiple trees to creating gardens or sharing among family members. We offer various return options, from the full amount to smaller portions in decorative 
            burlap bags, allowing families to choose what best suits their memorial plans.
          </p>
        )
      },
      {
        title: 'What can I do with the soil?',
        content: (
          <>
            <p>
              The nutrient-rich soil from terramation can be used in many meaningful ways:
            </p>
            <ul>
              <li>Plant a memorial tree that will grow for generations</li>
              <li>Create a vibrant memorial garden with flowers, herbs, or vegetables</li>
              <li>Nourish an existing beloved tree or garden</li>
              <li>Share with family members to create their own living memorials</li>
              <li>Donate to conservation projects or community gardens (where permitted)</li>
              <li>Scatter in a meaningful natural location (with appropriate permissions)</li>
            </ul>
            <p>
              Many families find that using the soil to grow something beautiful creates an ongoing connection and living memorial.
            </p>
          </>
        )
      },
      {
        title: 'Is the soil safe to use?',
        content: (
          <p>
            Yes, the soil produced through terramation is completely safe to use in gardens and for plants. The controlled environment and natural microbial processes ensure that 
            the final soil is free from pathogens. The transformation process effectively breaks down all organic matter into its elemental components, creating nutrient-rich soil 
            that's ideal for supporting plant growth. This soil functions just like any other high-quality compost or topsoil you might use in your garden.
          </p>
        )
      },
      {
        title: 'How is terramation carbon negative?',
        content: (
          <p>
            Terramation is carbon negative for several reasons. First, the process itself uses minimal energy and produces no emissions, unlike cremation which releases CO₂. 
            Second, and more significantly, the resulting soil actively sequesters carbon when used to grow plants. Plants capture carbon dioxide from the atmosphere through 
            photosynthesis, storing it in their tissues and in the soil. When the nutrient-rich soil from terramation is used to grow trees, gardens, or other plants, it 
            creates a continuous carbon capture system, making the overall impact carbon negative over time.
          </p>
        )
      },
      {
        title: 'Are there restrictions on where the soil can be used?',
        content: (
          <p>
            While the soil is safe for general use, there may be some local regulations regarding its placement in public areas. We recommend using the soil on private property, 
            family land, or designated memorial gardens. If you wish to scatter or use the soil in public parks or conservation areas, it's important to check with local authorities 
            first. We provide guidance to families about appropriate and meaningful uses for the soil that comply with local regulations.
          </p>
        )
      }
    ],
    survivors: [
      {
        title: 'What do my loved ones need to do when the time comes if I have a pre-plan?',
        content: (
          <p>
            If you have a pre-plan with Healing Partners, your loved ones will only need to make one simple phone call to activate your plan when the time comes. Our team will 
            guide them through the next steps, handling all arrangements according to your pre-documented wishes. We'll coordinate transportation, manage the terramation process, 
            and arrange for the return of soil according to your specifications. This simplicity during a difficult time is one of the most valuable aspects of pre-planning.
          </p>
        )
      },
      {
        title: 'Can a memorial service be held before terramation?',
        content: (
          <p>
            Yes, a memorial service or viewing can be held before the terramation process begins. Many families choose to have a gathering to honor their loved one before the 
            terramation process. These can range from traditional services to more personalized celebrations of life. Because no embalming chemicals are used in terramation, 
            timing considerations are important. Our team works closely with families to coordinate meaningful gatherings within the appropriate timeframe.
          </p>
        )
      },
      {
        title: 'What if death occurs unexpectedly and there isn\'t a pre-plan?',
        content: (
          <p>
            We do offer at-need terramation services for families who didn't have the opportunity to pre-plan. In these cases, our compassionate team will guide the family through 
            the process, explaining all options and handling arrangements with care. While pre-planning offers financial and emotional advantages, we're committed to providing the 
            same respectful, thorough service to all families, regardless of when arrangements are made.
          </p>
        )
      },
      {
        title: 'How can survivors use the soil in a meaningful way?',
        content: (
          <p>
            Many families find that creating living memorials with the soil provides comfort and ongoing connection. Popular options include planting memorial trees, creating 
            dedicated garden spaces, or sharing the soil among family members for individual tributes. Some families hold planting ceremonies, bringing together loved ones to 
            participate in creating this living legacy. We provide guidance and resources to help families develop meaningful ways to use the soil that honor their loved one's 
            memory and values.
          </p>
        )
      },
      {
        title: 'What documentation is provided to survivors?',
        content: (
          <p>
            Families receive official documentation of the terramation process, including a certificate of disposition that serves the same legal purpose as a cremation or burial 
            certificate. This documentation includes details about the date and location of the terramation. We also provide guidance materials about the soil, including suggestions 
            for its use and care. All necessary documentation for legal purposes, insurance claims, and estate matters is provided to the designated family representatives.
          </p>
        )
      }
    ]
  };
  
  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Your Questions Answered"
        height="50vh"
      />
      
      <Section padding="5rem 0">
        <FAQContainer>
          <CategoryTabs>
            {faqCategories.map(category => (
              <CategoryTab 
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryTab>
            ))}
          </CategoryTabs>
          
          <FAQContent>
            <Accordion items={faqItems[activeCategory]} allowMultiple={true} />
          </FAQContent>
          
          <MoreQuestionsContainer>
            <MoreQuestionsHeading>Still Have Questions?</MoreQuestionsHeading>
            <MoreQuestionsText>
              Our team is here to help. Contact us directly for personalized answers to your questions about terramation or pre-planning.
            </MoreQuestionsText>
            <MoreQuestionsButton to="/contact">Contact Us</MoreQuestionsButton>
          </MoreQuestionsContainer>
        </FAQContainer>
      </Section>
    </>
  );
};

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CategoryTab = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${props => props.active ? 'var(--primary-green)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--dark-text)'};
  border: 1px solid ${props => props.active ? 'var(--primary-green)' : '#ddd'};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--secondary-green)' : 'rgba(74, 103, 65, 0.1)'};
    border-color: ${props => props.active ? 'var(--secondary-green)' : 'var(--primary-green)'};
  }
`;

const FAQContent = styled.div`
  margin-bottom: 4rem;
`;

const MoreQuestionsContainer = styled.div`
  text-align: center;
  background-color: var(--cream);
  padding: 2rem;
  border-radius: 8px;
`;

const MoreQuestionsHeading = styled.h3`
  margin-bottom: 1rem;
`;

const MoreQuestionsText = styled.p`
  margin-bottom: 1.5rem;
`;

const MoreQuestionsButton = styled(Link)`
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

export default FAQ;
