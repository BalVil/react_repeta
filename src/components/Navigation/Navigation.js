import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      // className={styles.link}
      // activeClassName={styles.activeLink}
    >
      Колорпикер
    </NavLink>

    <NavLink
      to="/counter"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Счётчик
    </NavLink>

    <NavLink
      to="/clock"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Часы
    </NavLink>

    <NavLink
      to="/pokemon"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Покемоны
    </NavLink>
  </nav>
);

export default Navigation;
