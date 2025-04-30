import styled, { keyframes } from 'styled-components';
import { Theme } from './types';

interface StyledProps {
  theme: Theme;
  children?: React.ReactNode;
  className?: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const floatAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(0px) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-15px) scale(1.02);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0px) scale(1);
  }
`;

export const Main = styled.main<StyledProps>`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Hero = styled.div<StyledProps>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 5%;
  background: linear-gradient(
    rgba(221, 72, 3, 0.85),
    rgba(84, 120, 95, 0.9)
  ), url('/banner_improved.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 2rem;
  }
`;

export const ContentWrapper = styled.div<StyledProps>`
  max-width: 600px;
  width: 100%;
  z-index: 1;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
    margin-top: 2rem;
    order: 2;
  }
`;

export const Name = styled.h1<StyledProps>`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: white;
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const Title = styled.h2<StyledProps>`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p<StyledProps>`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;

  &.contact-description {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }
`;

export const ProfileImage = styled.div<StyledProps>`
  position: relative;
  width: 450px;
  height: 450px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  animation: ${fadeIn} 1s ease-out 0.5s backwards;
  border: 4px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: scale(1.02);
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 
      0 0 20px ${({ theme }) => theme.colors.accent}50;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 350px;
    height: 350px;
    order: 1;
    margin-bottom: 2rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`;

export const ScrollIndicator = styled.button<StyledProps & { onClick: () => void }>`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  opacity: 0.8;
  
  &::after {
    content: '↓';
    font-size: 1.8rem;
    animation: ${bounce} 2s infinite;
    color: ${({ theme }) => theme.colors.accent};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

export const BackgroundText = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  span {
    font-size: 8rem;
    font-weight: 800;
    color: rgba(255, 248, 225, 0.15);
    text-shadow: 2px 2px 20px rgba(51, 153, 102, 0.3);
    letter-spacing: 0.1em;
    line-height: 1.2;
    text-align: center;
    animation: ${floatAnimation} 5s ease-in-out infinite;
    position: absolute;
    
    &:nth-child(1) {
      top: 30%;
      animation-delay: 0s;
      font-size: 9rem;
    }
    
    &:nth-child(2) {
      top: 50%;
      animation-delay: 1.5s;
      font-size: 7rem;
    }
    
    &:nth-child(3) {
      top: 70%;
      animation-delay: 3s;
      font-size: 8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    span {
      font-size: 5rem;
      
      &:nth-child(1) {
        font-size: 6rem;
      }
      
      &:nth-child(2) {
        font-size: 4.5rem;
      }
      
      &:nth-child(3) {
        font-size: 5.5rem;
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    span {
      font-size: 3.5rem;
      
      &:nth-child(1) {
        font-size: 4rem;
      }
      
      &:nth-child(2) {
        font-size: 3rem;
      }
      
      &:nth-child(3) {
        font-size: 3.5rem;
      }
    }
  }
`;

export const Footer = styled.footer<StyledProps>`
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  border-top: 1px solid #e0e0e0;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }
  }
`; 