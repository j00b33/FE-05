import React, {useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export default function ModalAddressPage(){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

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

  const onCompleteDaumPostCode = (data: any) =>{
    setAddress(data.address)
    setZonecode(data.zonecode)
    console.log(data)
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>Search for Zip Code</Button>
      <Modal title="Address" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <DaumPostcode onComplete={onCompleteDaumPostCode}/>
      </Modal>
    </>
  );
};
