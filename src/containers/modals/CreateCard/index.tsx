import * as React from 'react';
import './style.module.scss';
import Card from 'components/molecules/Card';
import Modal from 'components/organisms/Modal';
import ModalWrapper from 'components/templates/ModalWrapper';

const CreateCard: React.FC = () => {
  // FIXME: create a modal controll implement
  if (true) {
    return <></>;
  }

  return (
    <ModalWrapper>
      <Modal title="新規作成">
        <div styleName="card-wrapper">
          <Card />
        </div>
        <div styleName="buttons"></div>
      </Modal>
    </ModalWrapper>
  );
}

export default CreateCard;
