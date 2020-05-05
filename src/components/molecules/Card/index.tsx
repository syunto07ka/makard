import * as React from 'react';
import './style.module.scss';

// FIXME: separate components, set props, style
const Card: React.FC = () => (
  <div styleName="card">
    <div>
      <div>Hoge株式会社</div>
      <div>垣井 駿努</div>
    </div>
    <div>
      <div>mail: kakki@hoge.co.jp</div>
      <div>phone: 000-0000-0000</div>
      <div>github: https://github.com/syunto07ka</div>
    </div>
  </div>
);

export default Card;
