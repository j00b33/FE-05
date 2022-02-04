import Router from 'next/router'
import {Component, createRef} from 'react'

interface IState {
    isChange: boolean
}

export default class ClassIsChangePage extends Component{

    inputRef = createRef<HTMLInputElement>()

    state = {
        isChange: false
    }


    componentDidMount(){
        alert("Rendered!!")
        this.inputRef.current?.focus()
    }

    onClickChange = () => {
        this.setState((prev:IState) => ({
            isChange: true
        }))
        alert("Changed!!")
    }

    onClickMove = () => {
        Router.push("/")
        alert("bye!!")
    }


    render (){
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.onClickChange}>변경</button>
                <button onClick={this.onClickMove}>이동</button>
            </div>
        )
    }
}