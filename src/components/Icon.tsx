import React from 'react';
import cs from 'classnames';

const reqSvgs = require.context('icons', true, /\.svg$/);
reqSvgs.keys().map(reqSvgs);
type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={cs('icon', className)} {...rest}>
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  );
};

export default Icon;