import { Modal } from "antd";

export default function ModalAlertPage() {
  const onClickSuccessButton = () => {
    Modal.success({ content: "Upload Successful" });
  };

  const onClickFailButton = () => {
    Modal.error({ content: "Upload Failure" });
  };

  return (
    <div>
      <button onClick={onClickSuccessButton}>
        Successfully Uploaded Button
      </button>
      <button onClick={onClickFailButton}>Upload Failure Button</button>
    </div>
  );
}
