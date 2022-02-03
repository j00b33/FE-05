import React, {useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export default function ModalAddressPage(){
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCompleteDaumPostCode = (data: any) =>{
    setAddress(data.address)
    setZonecode(data.zonecode)
    setIsModalVisible(false)
  }

  return (
    <>
      {isModalVisible && (<Modal title="Address" visible={true} onOk={handleOk} onCancel={handleCancel}>
      <DaumPostcode onComplete={onCompleteDaumPostCode}/>
      </Modal>
      )}
    </>
  );
};