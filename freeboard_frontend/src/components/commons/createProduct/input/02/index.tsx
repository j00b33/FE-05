import styled from "@emotion/styled";

const CreateInput = styled.input`
  width: 440px;
  height: 52px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export default function SmallInput(props) {
  return (
    <div>
      <CreateInput
        type={props.type}
        {...props.register}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}
