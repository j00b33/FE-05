import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function ModalCustomPage(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [_,setPassword] = useState()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    //ok 누르면 창이 사라짐
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    //cancle 누르면 창 사라짐
  };


  const onChangePassword =(event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>Open Modal</Button>
      <Modal title="Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        Enter Your Password: <input type="password" onChange={onChangePassword}/>
      </Modal>
    </>
  );
};
