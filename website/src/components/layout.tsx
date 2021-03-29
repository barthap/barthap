import React from 'react';

export const Layout: React.FC = ({ children }) => (
  <div className="page">
    <div className="header-bg">
      <div className="header-gradient" />
    </div>
    <div className="container">{children}</div>
  </div>
);

export const Content: React.FC = ({ children }) => <div className="content">{children}</div>;
