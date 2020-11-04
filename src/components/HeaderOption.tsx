import './HeaderOption.css';

import React, { FunctionComponent } from 'react';

interface HeaderProps {
  one: string;
  two: string;
}

const HeaderOption: FunctionComponent<HeaderProps> = ({ one, two }) => {
  return (
    <div className="header__option">
      <span className="header__optionLineOne">{one}</span>
      <span className="header__optionLineTwo">{two} </span>
    </div>
  );
};

export default HeaderOption;
