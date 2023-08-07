import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }: { isActive: boolean}) => classNames('navbar-item', {
  'has-background-grey-lighter': isActive,
});

export const Header: React.FC = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={activeLink}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={activeLink}
            to="/people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
