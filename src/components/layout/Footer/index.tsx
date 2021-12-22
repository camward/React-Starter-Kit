import React from 'react';
import s from './style.module.scss';

const Footer = () => (
  <div className={s.footer}>
    &copy; Footer, {new Date().getFullYear()}
  </div>
);

export default Footer;
