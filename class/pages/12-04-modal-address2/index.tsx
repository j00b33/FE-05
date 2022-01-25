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
      {isModalVisible && (<Modal title="Address" visible={true} onOk={handleOk} onCancel={handleCancel}>
      <DaumPostcode onComplete={onCompleteDaumPostCode}/>
      </Modal>
      )}
    </>
  );
};

//우편번호 검색 누르고 검색입력하고 취소하고 다시 우편번호 검색 누르면 초기화
//아예 false로 삭제가 돼서 다시 시작되는것
//다시 클릭해서 실행하면 true로 바뀌어서 창이 새로 그려지는것

//아예 삭제를 했다가 다시 그렸다가 삭제를 했다가 다시 그렸다가