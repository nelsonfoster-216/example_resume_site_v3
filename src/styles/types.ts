export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    background2: string;
    text: string;
    textLight: string;
    card: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface ThemeProps {
  theme: Theme;
} 