import React from 'react';
import { useSelector } from 'react-redux';
import { getLoaderCounter } from '../../../store/loader/selectors';
import s from './style.module.scss';

const Loader = () => {
  const isLoading = useSelector(getLoaderCounter);

  return isLoading ? (
    <div className={s.loader}>
      <div className={s.loader_text}>Загрузка...</div>
    </div>
  ) : null;
};

export default Loader;
