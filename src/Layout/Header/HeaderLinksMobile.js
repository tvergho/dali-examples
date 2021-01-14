/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { DropdownArrow } from '../assets';
import styles from './styles.module.scss';

const defaultPath = '/';

const Dropdown = ({ links, onClick }) => {
  return (
    <div className={styles['mobile-dropdown']}>
      {links.map(({ display, link = defaultPath }) => (
        <a href={link} key={display} className={styles['nav-link']} onClick={onClick} role="button">
          {display}
        </a>
      ))}
    </div>
  );
};

/**
 * Navigation link item in the mobile backdrop.
 *
 * @param {string} display Text to display for the link.
 * @param {string} link URL to navigate to when clicked.
 * @param {array} dropdown Optional. Array of NavLinks to display as the submenu for this navigation item.
 * @param {function} onClick Optional. Function that is also called when this item is clicked.
 */
const NavLink = ({
  display, link, dropdown, onClick,
}) => {
  const isDropdown = !!dropdown && dropdown.length > 0;
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const toggle = () => setVisibleDropdown((vis) => !vis);

  return (
    <>
      <div className={styles['mobile-nav-link-container']}>
        {isDropdown
          ? (
            <a className={styles['mobile-nav-link']} onClick={toggle} role="button">
              {display}
              {isDropdown && <DropdownArrow width={45} height={45} />}
            </a>
          )
          : (
            <a href={link} className={styles['mobile-nav-link']} onClick={onClick} role="button">
              {display}
              {isDropdown && <DropdownArrow width={45} height={45} />}
            </a>
          )}
      </div>
      {isDropdown && visibleDropdown && <Dropdown links={dropdown} visible={visibleDropdown} onClick={onClick} />}
    </>
  );
};

const MobileBackdrop = ({ links, onClick }) => {
  return (
    <div className={styles['mobile-backdrop']}>
      {links && links.map(({ display, link = defaultPath, dropdown }, index) => (
        <NavLink
          display={display}
          link={link}
          dropdown={dropdown}
          key={display}
          onClick={onClick}
          index={index}
        />
      ))}
    </div>
  );
};

/**
 * Hamburger menu and mobile backdrop for navigation on screen smaller than 768px.
 *
 * @param {boolean} visible Determines whether the mobile navigation backdrop is visible.
 * @param {function} setVisible Function to toggle the visibility of the mobile backdrop.
 */
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
      {visible && <MobileBackdrop links={links} visible={visible} onClick={toggle} />}
    </>
  );
};

export default HeaderLinksMobile;
