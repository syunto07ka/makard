import * as React from 'react';
import './style.module.scss';
import { Link } from 'react-router-dom';

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
          <Link styleName="item" to="/">マイリスト</Link>
          <Link styleName="item" to="/profile">プロフィール</Link>
        </div>
        <Link styleName="new-link" to="/create">＋ 新規作成</Link>
      </div>
    </>
  );
}

export default Header;
