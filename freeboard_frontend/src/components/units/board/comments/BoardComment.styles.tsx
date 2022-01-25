import styled from '@emotion/styled'

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
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 430px;
    padding-bottom: 30px;
`
export const PInput = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 20px;
`

export const MyComment = styled.div`
    width: 1200px;
    height: 161px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const MyWriting = styled.input`
    color: grey;
    font-size: 16px;
    font-weight: 500;
    width: 1000px;
    height: 161px;
    border-radius: 20px;
`

export const SubmitBtn = styled.div`
    width: 100px;
    height: 161px; 
    color: white;
    background-color: #6281aa;
    border: 3px solid black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;

    :hover{
    background-color: #99b0ce;
    }
`
//Comments List
export const Comments = styled.div`
    border: none;
    width: 1200px;
    height: 114px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Writer = styled.div`
    padding-top: 20px;
    font-weight: 500;
    font-size: 16px;
`

export const WriterComment = styled.div`
    font-size: 16px;
    color: #4F4F4F;
`

export const DivisionLine = styled.div`
    width: 1200px;
    border: 1px solid #6182a8;
`