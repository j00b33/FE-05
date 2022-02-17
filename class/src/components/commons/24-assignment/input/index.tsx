export default function InputHW(props) {
  return <input type={props.type} {...props.register} />;
}
