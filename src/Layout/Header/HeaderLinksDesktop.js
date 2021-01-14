/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { NavLinkType } from '../types';
import { DropdownArrow } from '../assets';

const ANIMATION_LENGTH = 300;
const defaultPath = '/';

const NavLink = ({ link, display, dropdown }) => {
  const [hovering, setHovering] = useState(false);
  const isDropdown = !!dropdown && dropdown.length > 0;

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
      {isDropdown && hovering && <Dropdown links={dropdown} hovering={hovering} />}
    </div>
  );
};

NavLink.propTypes = {
  dropdown: PropTypes.arrayOf(NavLinkType),
  display: PropTypes.string,
  link: PropTypes.string,
};

const Dropdown = ({ links, hovering }) => {
  return (
    <motion.div className={styles.dropdown} animate={{ opacity: hovering ? 1 : 0 }} transition={{ duration: ANIMATION_LENGTH / 1000 }}>
      <div className={styles['dropdown-inner']}>
        {links.map(({ link = defaultPath, display }) => {
          return (
            <NavLink link={link} display={display} key={display} />
          );
        })}
      </div>
    </motion.div>
  );
};

Dropdown.propTypes = {
  links: PropTypes.arrayOf(NavLinkType),
  hovering: PropTypes.bool,
};

const HeaderLinksDesktop = ({ links }) => {
  return (
    <>
      <div className={styles.links}>
        {links && links.map(({ link = defaultPath, display, dropdown }) => {
          return (
            <NavLink link={link} display={display} dropdown={dropdown} key={display} />
          );
        })}
      </div>
    </>
  );
};

HeaderLinksDesktop.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default HeaderLinksDesktop;
