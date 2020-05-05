import * as React from 'react';
import Header from 'components/organisms/Header';
import ContentWrapper from 'components/organisms/ContentWrapper';
import Table from 'components/organisms/Table';
import PageWrapper from 'components/templates/PageWrapper';

const iconPath = '../../../logo512.png';
const displayName = 'カッキー';
const userId = 'nickname_0310';

const ListContainer: React.FC = () => (
  <PageWrapper>
    <Header displayName={displayName} iconPath={iconPath} userId={userId} />
    <ContentWrapper title="マイリスト">
      <Table />
    </ContentWrapper>
  </PageWrapper>
);

export default ListContainer;
