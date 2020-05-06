import * as React from 'react';
import './style.module.scss';
import Card from 'components/molecules/Card';
import Modal from 'components/organisms/Modal';
import ModalWrapper from 'components/templates/ModalWrapper';

interface Props {
  isCreateCardOpen: boolean;
  closeCreateCard: () => void;
}

const CreateCard: React.FC<Props> = ({ isCreateCardOpen, closeCreateCard }) => {
  if (!isCreateCardOpen) {
    return <></>;
  }

  return (
    <ModalWrapper>
      <Modal title="新規作成" closeModal={closeCreateCard}>
        <div styleName="card-wrapper">
          <Card />
        </div>
        <div styleName="buttons"></div>
      </Modal>
    </ModalWrapper>
  );
}

export default CreateCard;
