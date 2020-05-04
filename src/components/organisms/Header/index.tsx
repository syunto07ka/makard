import * as React from 'react';
import './style.module.scss';

interface Props {
  displayName: string;
  iconPath: string;
  userId: string;
}

const Header: React.FC<Props> = ({ displayName, iconPath, userId }) => {
  return (
    <>
      <div styleName="sidebar">
        <div styleName="me">
          <img alt={displayName} src={iconPath} styleName="icon" />
          <div styleName="displayName">{displayName}</div>
          <div styleName="userId">{userId}</div>
        </div>
        <div styleName="list">
          <a styleName="item" href="/">マイリスト</a>
        </div>
        <a styleName="new-link" href="/create">＋ 新規作成</a>
      </div>
    </>
  );
}

export default Header;
