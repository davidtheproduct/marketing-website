import React from 'react';

export const BrowserRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const MemoryRouter = BrowserRouter;
export const Routes: React.FC<{ children?: React.ReactNode }> = ({ children }) => <div>{children}</div>;
export const Route: React.FC<{ element?: React.ReactNode }> = ({ element }) => <>{element}</>;
export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }> = ({ to, children, ...props }) => (
  <a href={to || '#'} {...props}>{children}</a>
);
export const useLocation = () => ({ pathname: '/' });
