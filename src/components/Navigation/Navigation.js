import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      // prop "end" - щоб відобразити посилання, яке активне тільки в корені сайту, але не в інших URL
      end
    >
      Homepage
    </NavLink>
    <NavLink
      to="/authors"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      end
    >
      Authors
    </NavLink>
    <NavLink
      to="/books"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      end
    >
      Books
    </NavLink>
    <NavLink
      to="/table"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      end
    >
      Таблица
    </NavLink>
  </nav>
);

export default Navigation;
