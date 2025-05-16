import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <HeaderContainer scrolled={scrolled}>
      <div className="container">
        <NavWrapper>
          <Logo to="/">
            <h1>Healing Partners</h1>
          </Logo>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu isOpen={isOpen}>
            <NavItem>
              <NavLink to="/process">Our Process</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/why-choose-terramation">Why Choose Terramation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/soil-options">Soil Options</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/our-story">Our Story</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/faq">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem className="cta-button">
              <NavButton to="/pre-plan">Pre-Plan Now</NavButton>
            </NavItem>
          </NavMenu>
        </NavWrapper>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(245, 245, 240, 0.95)' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  padding: ${({ scrolled }) => (scrolled ? '0.5rem 0' : '0')};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  
  h1 {
    font-family: var(--heading-font);
    color: var(--primary-green);
    font-size: 1.8rem;
    margin: 0;
    font-weight: 600;
  }
`;

const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--primary-green);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: var(--cream);
    padding-top: 2rem;
  }
`;

const NavItem = styled.li`
  height: 80px;
  
  &.cta-button {
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
  @media screen and (max-width: 960px) {
    height: 60px;
    
    &.cta-button {
      margin: 1rem 0;
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--dark-text);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-green);
  }
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: table;
    
    &:hover {
      color: var(--primary-green);
      transition: all 0.3s ease;
    }
  }
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 40px;
  background: var(--primary-green);
  color: var(--light-text);
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-green);
    color: var(--light-text);
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: 960px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export default Header;
