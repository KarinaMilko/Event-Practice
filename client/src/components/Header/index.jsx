import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';

const calcLinkClassName = ({ isActive }) =>
  classNames(styles.pageLink, { [styles.currentPageLink]: isActive });

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className={calcLinkClassName} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={calcLinkClassName} to="/events">
              Events List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
