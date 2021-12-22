import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

interface LinksProps {
  link: string;
  label: string;
  exact?: boolean;
}

const Header = () => {
  const links: LinksProps[] = [
    {
      link: '/',
      label: 'Главная',
      exact: true,
    },
    {
      link: '/task',
      label: 'Задачи',
    },
    {
      link: '/statistics',
      label: 'Статистика',
    },
  ];

  return (
    <div className={s.header}>
      {links.map((item: LinksProps) => (
        <NavLink
          key={item.link}
          className={s.header_link}
          activeClassName={s.header_link__active}
          exact={item.exact}
          to={item.link}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
