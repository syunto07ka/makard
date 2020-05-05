import * as React from 'react';
import Header from 'components/organisms/Header';
import './style.module.scss';
import ContentWrapper from 'components/organisms/ContentWrapper';

const iconPath = '../../../logo512.png';
const displayName = 'カッキー';
const userId = 'nickname_0310';

const ListContainer: React.FC = () => (
  <React.Fragment>
    <div styleName="container">
      <Header displayName={displayName} iconPath={iconPath} userId={userId} />
      <ContentWrapper title="マイリスト">
        <div>データがありません</div>
      </ContentWrapper>
    </div>
  </React.Fragment>
);

export default ListContainer;
