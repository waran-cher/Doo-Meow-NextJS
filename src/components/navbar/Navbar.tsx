import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';

const NavItem = ({ text, href, active }: any) => {
  return (
    <Link href={href} className={`nav__item ${active ? 'active' : ''}`}>
      {text}
    </Link>
  );
};
const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/cats/1' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<any>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav>
        <Link href={'/'}>
          <Logo className="logo img-fluid" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
