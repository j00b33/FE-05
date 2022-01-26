import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function AlertLibraryPage(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        모달 열기
      </Button>
      <Modal title="게시물 등록" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <span>게시물이 등록되었습니다</span>
      </Modal>
    </>
  );
};