import React from 'react';

const reqSvgs = require.context('icons', true, /\.svg$/);
reqSvgs.keys().map(reqSvgs);
type Props = {
  name?: string
}
const Icon = (props: Props) => {
  return (
    <svg className='icon'>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;