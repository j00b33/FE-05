import {Component} from 'react'
import Router from "next/router"

interface IState {
    count: number
}

export default class ClassLifeCyclePage extends Component{
    state = {
        count: 0
        //무조건 객체로 한방에 만들어줘야함
        //writer: "",
        //title: "",
        //contents: "" 이런식으로 만들어줘야함
    }

    componentDidMount(){
        //함수임 (){}
        console.log("마운트 됨")
        //input 태그 선택해서 포커스 깜빡거리게 하기
    }

    componentDidUpdate(){
        //component가 다시 그려졌을때
        //state가 바뀌면 component가 다시 그려짐
        //re-render되고 난 이후에 실행됨
        console.log("수정되고 다시 그려짐")
    }

    componentWillUnmount(){
        console.log("여기서 나갈래옹")
        //나가기 전에 마지막으로 할 것들 실행
        //백엔드 컴퓨터에 채팅방 나감을 알리기 (이 컴포넌트가 채팅방이라고 한다면)
    }

    onClickCounter = () => {
        console.log(this.state.count)
        // 그냥 onClickCounter(){ console.log(this.state.count) } 일때: 
        //클릭하는 순간 클릭으로 주체가 바뀌면서 여기서의 THIs는 window를 가르키게 됨 
        //고로 console.log(this.state.count) 는 실행이 되지 않음. 여기서 이때 this는 "동적 this" 라고 부름
        //이 this를 고정시키는 방법은: onClickCounter 라는 함수를 실행할 때 "bind"를 해줘 라고 하는것

        //혹은 화살표 함수를 사용하게 되면 this가 자동적으로 binding이 됨
        // 정적 this가 됨 (언어적인 this로 자동으로 되는것) ==> "렉시컬 this (언어적인 this)"
        console.log("카운터를 클릭하셨습니다")
        this.setState((prev: IState) =>({
            count: prev.count + 1
        }))
        //or 
        // this.setState({
        //     count: this.state.count + 1
        // })
    }

    onClickMove =() => {
        //use형 함수는 class형 compoment에서 사용 불가능함 (hook이라서)
        Router.push("/")
    }

    render (){
        //그림그리는 함수
        return (
            //이 안에 html입력해주면 됨. 반드시 render안에 return이 들어가야함
            <div>
                <div>현재 카운트: {this.state.count}</div>
                {/* this.state === 자기 자신의 state */}
                <button onClick={this.onClickCounter}>카운트 올리기</button>
                <button onClick={this.onClickMove}>나가기</button>
            </div>
        )
    }

}