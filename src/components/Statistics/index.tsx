import React from 'react';
import SearchIcon from '../../assets/images/SearchIcon.svg';
import { STATUS_TYPE } from '../../enums';
import s from './style.module.scss';

const Statistics = () => (
  <>
    <h1>Статистика</h1>
    <p>Страница в разработке...</p>
    <p>ENUM: {STATUS_TYPE.HIGH}</p>
    <p className={s.block}>
      Иконка:
      <span className={s.block_icon}>
        <SearchIcon />
      </span>
    </p>
  </>
);

export default Statistics;
