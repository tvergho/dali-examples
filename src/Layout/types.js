import PropTypes from 'prop-types';

export const NavLinkType = PropTypes.shape({
  display: PropTypes.string,
  link: PropTypes.string,
  dropdown: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    link: PropTypes.string,
  })),
});
