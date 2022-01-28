import styled from '@emotion/styled'


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const DivisionLine = styled.div`
    border: 1px solid #AABAC9;
    display: flex;
    width: 300px;
`

export const ListWrapper = styled.div`
    width: 1200px;
    height: 500px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const InnerWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 300px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`

// export const TitleWrapper = styled.div`
//     display:flex;
//     flex-direction: column;
//     align-items: center;
// `



export const HeadType = styled.div`
    font-weight: 500;
    font-size: 18px;

    color: #5E81A1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    height: 30px;
    padding-bottom: 20px;
`





export const MyNumber = styled.div`
    color: #6f7781;
`

export const MyTitle = styled.div`
    cursor: pointer;
    :hover {
        color: #6084a7fd;
        text-decoration-line: underline;
    }

    
`

export const MyWriter = styled.div`
`

export const MyDate = styled.div`
    color: #6f7781;
`







//게시글 등록 버튼
export const ListButton = styled.div`
    padding-top: 30px;
`

export const Button = styled.button`
     width: 171px;
     height: 52px;

     background-color: white;
     border-radius: 10px;
     border: 2px solid #525252;

     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;

     cursor: pointer;
     :hover {
     background-color: #929292;
     color: white;
 }
`




//text  list
export const  NextPage = styled.button`
    cursor: pointer;
    :hover {
        color: #90bfeb;
        background-color: #636363;
    }
`
export const Pages = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

    :hover {
        text-decoration-line: underline;
    }

    &.isNow  {
        color: #90bfeb;
        }
`

export const TextList = styled.span`
width: 700px;
display: flex;
flex-direction: row;
justify-content: space-between;

padding-top: 20px;
`
