import {Component} from 'react'

interface IState {
    count: number
}

export default class ClassCounterPage extends Component{
    state = {
        count: 0
        //무조건 객체로 한방에 만들어줘야함
        //writer: "",
        //title: "",
        //contents: "" 이런식으로 만들어줘야함
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

    render (){
        //그림그리는 함수
        return (
            //이 안에 html입력해주면 됨. 반드시 render안에 return이 들어가야함
            <div>
                <div>현재 카운트: {this.state.count}</div>
                {/* this.state === 자기 자신의 state */}
                <button onClick={this.onClickCounter}>카운트 올리기</button>
            </div>
        )
    }

}