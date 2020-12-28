import {Link} from 'react-router-dom';
import React from 'react';

function NoMatch() {
  return <div>页面不存在，<Link to="/money">返回首页</Link></div>;
}

export default NoMatch;