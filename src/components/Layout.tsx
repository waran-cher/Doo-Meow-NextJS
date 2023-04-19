import React, { PropsWithChildren } from 'react';
import Navbar from 'src/components/navbar/Navbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
