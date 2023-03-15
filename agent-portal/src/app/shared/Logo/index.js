import React from 'react';

import bank from '@assets/images/bank.png';
import pig from '@assets/images/pig.jfif';

const Logo = (props) => {
  const { collapsedNav } = props;
  return (
    <></>
    // <>
    //   {collapsedNav !== true ? (
    //     <img src={pig} alt="Bank Logo" style={{ height: '65px', width: '240px' }} />
    //   ) : (
    //     <img src={bank} alt="Bank Logo" style={{ height: '64px', width: '80px' }} />
    //   )}
    // </>
  );
};

export default Logo;
