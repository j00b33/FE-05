import styled from '@emotion/styled';
import {Rate} from 'antd';
import {RiDeleteBinLine} from 'react-icons/ri'
import {GrEdit} from 'react-icons/gr'

export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    border: none;

    padding-top: 100px;
    padding-left: 100px;
`
export const CreateC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MyTitle = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    font-family: Cochin;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 550px;
    padding-bottom: 30px;
    font-family: Cochin;
`
export const PInput = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 20px;
    font-family: Cochin;
`

export const Star = styled(Rate)`
    display: flex;
    flex-direction: row;
`

export const MyComment = styled.div`
    width: 1200px;
    height: 161px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Cochin;
`

export const MyWriting = styled.input`
    color: grey;
    font-size: 164x;
    font-weight: 500;
    width: 1000px;
    height: 161px;
    border-radius: 16px;
    font-family: Cochin;
`

export const SubmitBtn = styled.div`
    width: 80px;
    height: 161px; 
    color: #b81a39;

    background-color: white;
    border: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-size: 16px;
    font-weight: bold;
    font-family: Cochin;
    border-radius: 20px;
    cursor: pointer;

    :hover{
    background-color: #b81a39;
    color: white;
    }
`
//Comments List
export const Comments = styled.div`
    border: none;
    width: 1200px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Cochin;
`

export const WrittenStar = styled(Rate)`
    padding-top: 30px;
`


export const Writer = styled.div`
    font-weight: bold;
    font-size: 16px;
    font-family: Cochin;
`

export const WriterComment = styled.div`
    font-size: 16px;
    color: #4F4F4F;
    font-family: Cochin;
`

export const DivisionLine = styled.div`
    width: 1000px;
    border: 1px solid #b81a39;
`

export const Update = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 60px;

    font-size: 16px;
    padding-top: 10px;
`

export const CommentsWrapper=styled.div`
    height: 400px;
    overflow: auto;
    width: 1200px;
`

export const CommentAlert = styled.div`
    color: #b81a39;
    padding-top: 10px;
`

export const CommentEdit = styled(GrEdit)`
    cursor: pointer;
    color: grey;
    :hover {
        color: #b81a39;
    }
`

export const Delete = styled(RiDeleteBinLine)`
    cursor: pointer;
    color: black;
    :hover {
        color: #b81a39;
    }
` 