import React, {useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';


export default function ModalAddressPage(){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("")
  const [zonecode, setZonecode] = useState("")

  // const showModal = () => {
  //   setIsModalVisible(prev => !prev);
  //   //prev 괄호 생략 가능함 (prev) this bracket thing
  //     //prev의 반대로 바꿔주는 함수
  //   //기존에 꺼져있던 false를 True로 바꾸려는 과정
  // };

  // const handleOk = () => {
  //   setIsModalVisible(prev => !prev);
  //   //ok 누르면 창이 사라짐
  //   //true를 false로 바꾸겠다는것
  //   //meaning that the previous value was "true" (나머지에도 적용시켜서 필기하셈)
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(prev => !prev);
  //   //cancel 누르면 창 사라짐
  //   //true를 false로 바꾸겠다는것

  //결국 과거 값 가져와서 반대로 바꿔주는 거라서 중복이 됨 코드가 
    //그래서 중복 생략하는 방법: 
    //onToggleModal 사용하기 --> 
  // };

  const onToggleModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const onCompleteDaumPostCode = (data: any) =>{
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zonecode)
    onToggleModal();
    
  }

  

  return (
    <>
      <Button type="primary" onClick={onToggleModal}>Search for Zip Code</Button>
      {isModalVisible && (<Modal title="Address" visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
      <DaumPostcode onComplete={onCompleteDaumPostCode}/>
      </Modal>
      )}
    </>
  );
};

//address 최종최종