import styled, { keyframes } from 'styled-components';
import { Theme } from './types';

interface StyledProps {
  theme: Theme;
  children?: React.ReactNode;
  $dark?: boolean;
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section<StyledProps>`
  padding: 6rem 5%;
  background: ${({ theme, $dark }) => 
    $dark 
      ? `linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 100%)`
      : `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.background2} 100%)`
  };
  color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${({ theme }) => theme.colors.primary}33,
      transparent
    );
  }
`;

export const SectionTitle = styled.h2<StyledProps>`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.primary};
  position: relative;
  animation: ${slideUp} 0.8s ease-out both;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme, $dark }) => $dark ? theme.colors.accent : theme.colors.primary};
    border-radius: 2px;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const ExperienceGrid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${slideUp} 1s ease-out 0.2s both;
`;

export const ExperienceCard = styled.div<StyledProps>`
  background: ${({ theme, $dark }) => 
    $dark ? `rgba(255, 255, 255, 0.15)` : theme.colors.card
  };
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme, $dark }) => 
    $dark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.background2};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme, $dark }) => 
      $dark ? 'rgba(255, 255, 255, 0.2)' : theme.colors.accent + '30'};
  }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme, $dark }) => $dark ? theme.colors.accent : theme.colors.primary};
    margin-bottom: 0.8rem;
  }
  
  h4 {
    font-size: 1.3rem;
    color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.secondary};
    margin-bottom: 1.2rem;
    opacity: 0.9;
  }
  
  p {
    font-size: 1.1rem;
    color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .date {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SkillsGrid = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${slideUp} 1s ease-out 0.4s both;
`;

export const SkillCard = styled.div<StyledProps>`
  background: ${({ theme, $dark }) => 
    $dark ? `rgba(255, 255, 255, 0.15)` : theme.colors.card
  };
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme, $dark }) => 
    $dark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.background2};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme, $dark }) => 
      $dark ? 'rgba(255, 255, 255, 0.2)' : theme.colors.accent + '30'};
  }
  
  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme, $dark }) => $dark ? theme.colors.accent : theme.colors.primary};
    margin-bottom: 2rem;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
      font-size: 1.1rem;
      margin-bottom: 1rem;
      padding-left: 1.8rem;
      position: relative;
      line-height: 1.6;
      
      &::before {
        content: '→';
        color: ${({ theme, $dark }) => $dark ? theme.colors.accent : theme.colors.secondary};
        position: absolute;
        left: 0;
        opacity: 0.8;
        transition: transform 0.3s ease;
      }
      
      &:hover::before {
        transform: translateX(5px);
      }
    }
  }
`;

export const EducationList = styled.div<StyledProps>`
  max-width: 800px;
  margin: 0 auto;
  animation: ${slideUp} 1s ease-out 0.6s both;
`;

export const EducationItem = styled.div<StyledProps>`
  background: ${({ theme, $dark }) => 
    $dark ? `rgba(255, 255, 255, 0.15)` : theme.colors.card
  };
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme, $dark }) => 
    $dark ? 'rgba(255, 255, 255, 0.1)' : theme.colors.background2};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme, $dark }) => 
      $dark ? 'rgba(255, 255, 255, 0.2)' : theme.colors.accent + '30'};
  }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme, $dark }) => $dark ? theme.colors.accent : theme.colors.primary};
    margin-bottom: 0.8rem;
  }
  
  h4 {
    font-size: 1.3rem;
    color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.secondary};
    margin-bottom: 1.2rem;
    opacity: 0.9;
  }
  
  p {
    font-size: 1.1rem;
    color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .date {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ContactSection = styled.div<StyledProps>`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} 1s ease-out 0.8s both;
  
  .contact-description {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    width: 100%;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
  
  .contact-form {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 12px;
    padding: 2.5rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    .success-message {
      text-align: center;
      padding: 2rem;
      
      h3 {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.accent};
        margin-bottom: 1rem;
      }
      
      p {
        font-size: 1.1rem;
        color: ${({ theme, $dark }) => $dark ? 'rgba(255, 255, 255, 0.9)' : theme.colors.text};
      }
    }
    
    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    label {
      font-size: 1rem;
      color: ${({ theme, $dark }) => $dark ? 'rgba(255, 255, 255, 0.8)' : theme.colors.text};
      font-weight: 500;
    }
    
    input, textarea {
      padding: 0.8rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
      font-family: inherit;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.accent};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent}40;
      }
    }
    
    .submit-btn {
      padding: 1rem;
      margin-top: 1rem;
      background: ${({ theme, $dark }) => $dark ? 'rgba(0, 20, 60, 0.7)' : theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      border: none;
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${({ theme }) => theme.colors.accent};
        transform: translateY(-2px);
      }
    }
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.primary};
    }
    
    .contact-role {
      font-size: 1rem;
      color: ${({ theme, $dark }) => $dark ? 'rgba(255, 255, 255, 0.7)' : theme.colors.secondary};
      margin-bottom: 2rem;
    }
    
    .contact-detail {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      
      span {
        font-size: 1rem;
        color: ${({ theme, $dark }) => $dark ? 'rgba(255, 255, 255, 0.6)' : theme.colors.textLight};
        margin-bottom: 0.3rem;
      }
      
      p {
        font-size: 1.1rem;
        color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.text};
        margin: 0;
      }
    }
    
    .divider {
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 1.5rem 0 2rem;
      border: none;
    }
  }
  
  .social-links {
    display: flex;
    gap: 2rem;
    
    a {
      font-size: 1.8rem;
      color: ${({ theme, $dark }) => $dark ? theme.colors.background : theme.colors.primary};
      transition: all 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-5px);
      }
    }
  }
`; 