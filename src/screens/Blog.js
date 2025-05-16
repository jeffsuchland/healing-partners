import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

// Components
import Hero from '../components/Hero';
import Section from '../components/Section';

// Placeholder for hero image - replace with actual image path
const heroImage = 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const Blog = () => {
  // Sample blog posts data - in a real application, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: 'The Environmental Impact of Different End-of-Life Options',
      excerpt: 'A comparison of the carbon footprint and environmental effects of terramation, cremation, and traditional burial. Learn why terramation is the only carbon-negative choice.',
      author: 'James Wilson',
      date: 'May 10, 2025',
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    },
    {
      id: 2,
      title: 'The Rising Costs of Traditional Death Care',
      excerpt: 'An analysis of the increasing costs of cremation and burial, and how pre-planning can protect you from future price increases tied to resource scarcity.',
      author: 'Elena Rodriguez',
      date: 'April 28, 2025',
      category: 'Financial Planning',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Creating a Living Memorial: Ideas for Using Terramation Soil',
      excerpt: 'Explore creative and meaningful ways to use the nutrient-rich soil from terramation to create lasting, living memorials that honor your loved one.',
      author: 'Sarah Johnson',
      date: 'April 15, 2025',
      category: 'Memorial Ideas',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 4,
      title: 'The Science Behind Terramation: How Natural Decomposition Works',
      excerpt: 'A deeper look at the biological processes that make terramation possible and how they create nutrient-rich soil that benefits the environment.',
      author: 'James Wilson',
      date: 'March 30, 2025',
      category: 'Science',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    },
    {
      id: 5,
      title: 'Talking to Your Family About Your End-of-Life Wishes',
      excerpt: 'Practical advice for having thoughtful conversations with loved ones about your preference for terramation and other end-of-life decisions.',
      author: 'Elena Rodriguez',
      date: 'March 15, 2025',
      category: 'Family Planning',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: 6,
      title: 'The Legal Landscape of Terramation: Where It\'s Available and Expanding',
      excerpt: 'An overview of current legislation regarding terramation across different states and the growing movement to make this option more widely available.',
      author: 'Michael Chen',
      date: 'February 28, 2025',
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  // Sample categories for the filter
  const categories = [
    'All',
    'Environment',
    'Financial Planning',
    'Memorial Ideas',
    'Science',
    'Family Planning',
    'Legal'
  ];

  return (
    <>
      <Hero 
        backgroundImage={heroImage}
        title="Resources & Insights"
        subtitle="Explore our collection of articles on terramation, environmental impact, pre-planning, and creating meaningful legacies."
        height="50vh"
      />
      
      <Section padding="5rem 0">
        <BlogContainer>
          <BlogSidebar>
            <SidebarSection>
              <SidebarHeading>Categories</SidebarHeading>
              <CategoryList>
                {categories.map((category, index) => (
                  <CategoryItem key={index}>
                    <CategoryLink href="#">{category}</CategoryLink>
                  </CategoryItem>
                ))}
              </CategoryList>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarHeading>Popular Posts</SidebarHeading>
              <PopularPostsList>
                {blogPosts.slice(0, 3).map(post => (
                  <PopularPostItem key={post.id}>
                    <PopularPostLink href="#">{post.title}</PopularPostLink>
                  </PopularPostItem>
                ))}
              </PopularPostsList>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarHeading>Subscribe</SidebarHeading>
              <SubscribeForm>
                <SubscribeInput type="email" placeholder="Your email address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
              <SubscribeText>
                Get the latest articles and resources delivered to your inbox.
              </SubscribeText>
            </SidebarSection>
          </BlogSidebar>
          
          <BlogContent>
            <FeaturedPost>
              <FeaturedPostImage src={blogPosts[0].image} alt={blogPosts[0].title} />
              <FeaturedPostOverlay>
                <FeaturedPostCategory>{blogPosts[0].category}</FeaturedPostCategory>
                <FeaturedPostTitle>{blogPosts[0].title}</FeaturedPostTitle>
                <FeaturedPostMeta>
                  <MetaItem>
                    <FaCalendarAlt /> {blogPosts[0].date}
                  </MetaItem>
                  <MetaItem>
                    <FaUser /> {blogPosts[0].author}
                  </MetaItem>
                </FeaturedPostMeta>
                <FeaturedPostExcerpt>{blogPosts[0].excerpt}</FeaturedPostExcerpt>
                <FeaturedPostButton href="#">
                  Read More <FaArrowRight />
                </FeaturedPostButton>
              </FeaturedPostOverlay>
            </FeaturedPost>
            
            <PostsGrid>
              {blogPosts.slice(1).map(post => (
                <PostCard key={post.id}>
                  <PostImageContainer>
                    <PostImage src={post.image} alt={post.title} />
                    <PostCategory>{post.category}</PostCategory>
                  </PostImageContainer>
                  <PostContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostMeta>
                      <MetaItem>
                        <FaCalendarAlt /> {post.date}
                      </MetaItem>
                      <MetaItem>
                        <FaUser /> {post.author}
                      </MetaItem>
                    </PostMeta>
                    <PostExcerpt>{post.excerpt}</PostExcerpt>
                    <PostButton href="#">
                      Read More <FaArrowRight />
                    </PostButton>
                  </PostContent>
                </PostCard>
              ))}
            </PostsGrid>
            
            <Pagination>
              <PaginationButton disabled>&laquo; Previous</PaginationButton>
              <PaginationNumber active>1</PaginationNumber>
              <PaginationNumber>2</PaginationNumber>
              <PaginationNumber>3</PaginationNumber>
              <PaginationButton>Next &raquo;</PaginationButton>
            </Pagination>
          </BlogContent>
        </BlogContainer>
      </Section>
      
      <Section backgroundColor="var(--primary-green)" textColor="var(--light-text)" padding="4rem 0">
        <CTAContainer>
          <CTAHeading>Ready to Take the Next Step?</CTAHeading>
          <CTAText>
            Learn more about pre-planning your terramation and secure peace of mind for yourself and your loved ones.
          </CTAText>
          <CTAButton to="/pre-plan">Explore Pre-Planning Options</CTAButton>
        </CTAContainer>
      </Section>
    </>
  );
};

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const BlogSidebar = styled.aside`
  @media (max-width: 960px) {
    order: 2;
  }
`;

const SidebarSection = styled.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SidebarHeading = styled.h3`
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-green);
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryLink = styled.a`
  text-decoration: none;
  color: var(--dark-text);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-green);
  }
`;

const PopularPostsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PopularPostItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const PopularPostLink = styled.a`
  text-decoration: none;
  color: var(--dark-text);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-green);
  }
`;

const SubscribeForm = styled.form`
  margin-bottom: 1rem;
`;

const SubscribeInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const SubscribeButton = styled.button`
  width: 100%;
  background-color: var(--primary-green);
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
  }
`;

const SubscribeText = styled.p`
  font-size: 0.9rem;
  color: var(--medium-text);
`;

const BlogContent = styled.div`
  @media (max-width: 960px) {
    order: 1;
  }
`;

const FeaturedPost = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 3rem;
  height: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const FeaturedPostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedPostOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

const FeaturedPostCategory = styled.span`
  display: inline-block;
  background-color: var(--primary-green);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const FeaturedPostTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeaturedPostMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeaturedPostExcerpt = styled.p`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FeaturedPostButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-green);
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-green);
    transform: translateY(-2px);
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled.article`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImageContainer = styled.div`
  position: relative;
  height: 200px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PostCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--primary-green);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h3`
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--medium-text);
`;

const PostExcerpt = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: var(--medium-text);
`;

const PostButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-green);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--secondary-green);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.disabled ? '#f5f5f5' : 'white'};
  color: ${props => props.disabled ? '#aaa' : 'var(--dark-text)'};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  
  &:not(:disabled):hover {
    background-color: var(--primary-green);
    color: white;
    border-color: var(--primary-green);
  }
`;

const PaginationNumber = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.active ? 'var(--primary-green)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--dark-text)'};
  border: 1px solid ${props => props.active ? 'var(--primary-green)' : '#ddd'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:not(:disabled):hover {
    background-color: var(--primary-green);
    color: white;
    border-color: var(--primary-green);
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

const CTAButton = styled(Link)`
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

export default Blog;
