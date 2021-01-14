import React from 'react';
import Header from './Header';
import styles from './styles.module.scss';
import './hamburgers.scss';

const Logo = () => {
  return (
    <h2>
      React Examples
    </h2>
  );
};

/**
 * Global site layout for every page on the site.
 */
const Layout = ({
  children, header,
}) => {
  return (
    <>
      <Header links={header} logo={Logo} />
      <main className={styles.content}>
        {children}
      </main>
    </>
  );
};

export default Layout;
