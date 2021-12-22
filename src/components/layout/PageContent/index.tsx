import React, { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import s from './style.module.scss';

interface Props {
  children: React.ReactNode;
  bgExclusionList?: string[];
  isFullScreen?: boolean;
}

const PageContent: FC<Props> = ({ children, isFullScreen, bgExclusionList }) => {
  const location = useLocation();

  const isExclusion = useMemo(() => {
    return bgExclusionList?.filter((item) => location.pathname.includes(item));
  }, [location]);

  return (
    <div
      className={classNames(s.pageContent, {
        [s.pageContent_responsive]: isFullScreen,
        [s.pageContent_background]: !isExclusion?.length,
      })}
    >
      {children}
    </div>
  );
};

export default PageContent;
