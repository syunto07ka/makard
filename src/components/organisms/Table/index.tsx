import * as React from 'react';
import './style.module.scss';

// FIXME: separate to few components
const Table: React.FC = () => (
  <div styleName="table">
    <div styleName="thead">
      <div styleName="tr">
        <div styleName="th">作成者</div>
        <div styleName="th">職業</div>
        <div styleName="th">作成日</div>
        <div styleName="th">操作</div>
      </div>
    </div>
    <div styleName="tbody">
      <div styleName="tr">
        <div styleName="td">垣井駿努</div>
        <div styleName="td">エンジニア</div>
        <div styleName="td">2020年5月3日</div>
        <div styleName="td">:</div>
      </div>
      <div styleName="tr">
        <div styleName="td">垣井駿努</div>
        <div styleName="td">エンジニア</div>
        <div styleName="td">2020年5月3日</div>
        <div styleName="td">:</div>
      </div>
    </div>
  </div>
);

export default Table;
