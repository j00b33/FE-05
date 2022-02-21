import styled from "@emotion/styled";

const CreateInput = styled.input`
  width: 996px;
  height: 200px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
`;

export default function LargeInput(props) {
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
