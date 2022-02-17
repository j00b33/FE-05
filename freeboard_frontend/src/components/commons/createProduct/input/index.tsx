import styled from "@emotion/styled";

const CreateInput = styled.input`
  width: 996px;
  height: 100px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export default function Input(props) {
  return (
    <div>
      <CreateInput type={props.type} {...props.register} />
    </div>
  );
}
