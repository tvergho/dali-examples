/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import useWindowSize from '../../useWindowSize';
import styles from './styles.module.scss';
import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderLinksMobile from './HeaderLinksMobile';

const Header = ({ links, logo: Logo }) => {
  const { width } = useWindowSize();
  const isMobile = !(width > 1000);
  const [backdropVisible, setBackdropVisible] = useState(false);

  return (
    <div className={styles['main-container']}>
      <div className={styles['header-container']}>
        <nav className={styles.header}>
          <Logo />
          {isMobile ? <HeaderLinksMobile links={links} visible={backdropVisible} setVisible={setBackdropVisible} /> : <HeaderLinksDesktop links={links} />}
        </nav>
      </div>
    </div>
  );
};

export default Header;
