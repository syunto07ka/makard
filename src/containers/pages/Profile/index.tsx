import * as React from 'react';
import Header from 'components/organisms/Header';
import ContentWrapper from 'components/organisms/ContentWrapper';
import PageWrapper from 'components/templates/PageWrapper';

const iconPath = '../../../logo512.png';
const displayName = 'カッキー';
const userId = 'nickname_0310';

const ProfileContainer: React.FC = () => (
  <PageWrapper>
    <Header displayName={displayName} iconPath={iconPath} userId={userId} />
    <ContentWrapper title="プロフィール">
      <div>Waiting for development</div>
    </ContentWrapper>
  </PageWrapper>
);

export default ProfileContainer;
