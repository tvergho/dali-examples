/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import useWindowSize from '../useWindowSize';
import styles from './LayoutV2.module.scss';
import { DropdownArrow } from './assets';
import './hamburgers.scss';

const Logo = () => {
  return (
    <h2>
      React Examples
    </h2>
  );
};

const defaultPath = '/';

/**
 * Global site layout for every page on the site.
 */
const Layout = ({
  children, header,
}) => {
  const { width } = useWindowSize();
  const isMobile = !(width > 1000);
  const [backdropVisible, setBackdropVisible] = useState(false);

  const HeaderLinksDesktop = ({ links }) => {
    return (
      <>
        <div className={styles.links}>
          {links && links.map(({ link = defaultPath, display, dropdown }) => {
            const isDropdown = !!dropdown && dropdown.length > 0;
            const [hovering, setHovering] = useState(false);

            return (
              <div
                className={styles['nav-link-container']}
                onMouseEnter={() => { setHovering(true); }}
                onMouseLeave={() => { setHovering(false); }}
              >
                <a href={link} className={styles['nav-link']}>
                  {display}
                  {isDropdown && <DropdownArrow />}
                </a>
                {isDropdown && hovering && (
                  <div className={styles.dropdown} style={{ opacity: hovering ? 1 : 0 }}>
                    <div className={styles['dropdown-inner']}>
                      {links.map(({ link: subLink, display: subDisplay }) => {
                        return (
                          <div
                            className={styles['nav-link-container']}
                          >
                            <a href={subLink} className={styles['nav-link']}>
                              {subDisplay}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const HeaderLinksMobile = ({ links, visible, setVisible }) => {
    const toggle = () => setVisible((vis) => !vis);

    // Disables scrolling the document in the background when the mobile backdrop is visible.
    useEffect(() => {
      if (visible) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'visible';
      }
    }, [visible]);

    // Uses animation from https://jonsuh.com/hamburgers/.
    return (
      <>
        <button className={`hamburger hamburger--squeeze ${visible ? 'is-active' : ''} transparent ${styles.toggle}`} type="button" onClick={toggle} name="hamburger-menu">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        {visible && (
          <div className={styles['mobile-backdrop']}>
            {links && links.map(({ display, link = defaultPath, dropdown }, index) => {
              const isDropdown = !!dropdown && dropdown.length > 0;
              const [visibleDropdown, setVisibleDropdown] = useState(false);

              const toggleDropdown = () => setVisibleDropdown((vis) => !vis);
              return (
                <>
                  <div className={styles['mobile-nav-link-container']}>
                    {isDropdown
                      ? (
                        <a className={styles['mobile-nav-link']} onClick={toggleDropdown} role="button">
                          {display}
                          {isDropdown && <DropdownArrow width={45} height={45} />}
                        </a>
                      )
                      : (
                        <a href={link} className={styles['mobile-nav-link']} onClick={toggleDropdown} role="button">
                          {display}
                          {isDropdown && <DropdownArrow width={45} height={45} />}
                        </a>
                      )}
                  </div>
                  {isDropdown && visibleDropdown && (
                    <div className={styles['mobile-dropdown']}>
                      {dropdown.map(({ display: subDisplay, link: subLink }) => (
                        <a href={subLink} key={subDisplay} className={styles['nav-link']} onClick={toggleDropdown} role="button">
                          {subDisplay}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              );
            })}
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['header-container']}>
          <nav className={styles.header}>
            <Logo />
            {isMobile ? <HeaderLinksMobile links={header} visible={backdropVisible} setVisible={setBackdropVisible} /> : <HeaderLinksDesktop links={header} />}
          </nav>
        </div>
      </div>
      <main className={styles.content}>
        {children}
      </main>
    </>
  );
};

export default Layout;
