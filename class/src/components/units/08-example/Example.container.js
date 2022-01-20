import ExampleUI from './Example.presenter'
export default function Example(props){
    return(
        <ExampleUI aaa = {props.aaa}/>
    )
}

// props.aaa가 true면 수정 :(아니면) 등록 
//component