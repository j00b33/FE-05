import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `


export const  NextPage = styled.button`
    background-color: white;
    cursor: pointer;
    :hover {
        color: white;
        background-color: #b81a39;
    }
    border-radius: 5px;
`

export const Pages = styled.span`
    font-size: 20px;
    font-family: Cochin;
    cursor: pointer;

    :hover {
        text-decoration-line: underline;
        color: grey;
    }

    &.isNow  {
        color: #b81a39;
        }
`

export const TextList = styled.span`
width: 700px;
display: flex;
flex-direction: row;
justify-content: space-between;

padding-top: 20px;
`


export const ListButton = styled.div`
    padding-top: 30px;
`

export const Button = styled.button`
     width: 171px;
     height: 52px;

     font-family: Cochin;
     font-size: 17px;


     background-color: white;
     border-radius: 10px;
     border: 2px solid #262626;

     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;

     cursor: pointer;
     :hover {
     background-color: #b81a39;
     color: white;
 }
`