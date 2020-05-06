import * as React from 'react';
import Header from 'components/organisms/Header';
import ContentWrapper from 'components/organisms/ContentWrapper';
import Table from 'components/organisms/Table';
import PageWrapper from 'components/templates/PageWrapper';
import CreateCard from 'containers/modals/CreateCard';
import Button from 'components/atoms/Button';

const iconPath = '../../../logo512.png';
const displayName = 'カッキー';
const userId = 'nickname_0310';

const ListContainer: React.FC = () => {
  const [isCreateCardOpen, setIsCreateCardOpen] = React.useState<boolean>(false);

  const openCreateCard = () => {
    setIsCreateCardOpen(true);
  }

  const closeCreateCard = () => {
    setIsCreateCardOpen(false);
  }

  return (
    <React.Fragment>
      <PageWrapper>
        <Header displayName={displayName} iconPath={iconPath} userId={userId} />
        <ContentWrapper title="マイリスト" button={<Button label="新規作成" onClick={openCreateCard}/>}>
          <Table />
        </ContentWrapper>
      </PageWrapper>
      <CreateCard isCreateCardOpen={isCreateCardOpen} closeCreateCard={closeCreateCard} />
    </React.Fragment>
  );
};

export default ListContainer;
