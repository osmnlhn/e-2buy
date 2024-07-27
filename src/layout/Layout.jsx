import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Content from '../pages/Shop'


const Layout = ({ children }) => {
  return (
    <div className="text-center">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;