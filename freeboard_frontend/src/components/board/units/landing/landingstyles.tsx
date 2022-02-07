import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 100px;
`


export const TopBox = styled.div`
    height: 120px;
    background-color: #b81a39;
    width: 100%;
`
export const TopBoxLetter = styled.div`
    color: white;
    font-size: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 170px;
`

export const TopLine = styled.div`
    height: 20px;
    width: 100%;
    background-color: black;
    margin-bottom: 20px;
`

//Main Title: Welcome to Pierce Peers
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 1200px;

    padding-bottom: 200px;
`

export const MainSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Description = styled.div`
    color: grey;
    font-size: 30px;
`

export const MainTitleOne = styled.div`
    color: black;
    font-weight: 700;
    font-size: 70px;

`
export const Space = styled.div`
    width: 16px;
`
export const MainTitleTwo = styled.div`
    color: #b81a39;
    font-weight: 700;
    font-size: 70px;

`



export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 600px;

    padding-top: 100px;
`

export const ColumnOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1300px;

`
export const Columntwo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1300px;
    padding-top: 100px;
    padding-bottom: 100px;
`

export const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainPic = styled.img`
    width: 200px;
    height: 300px;
    border: 4px solid black;
    box-shadow: 20px 20px #b81a39;

`

export const MainPicDes = styled.div`
    padding-top: 40px;
    color: grey;
    font-size: 15px;
    width: 220px;
    
    text-align: center; 
`


//footer
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;

    height: 100px;
    margin-top: 100px;
`

export const HomeButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30px;

    background-color: black;
    color: white;

    width: 100%;
    height: 100px;

    cursor: pointer;
    :hover{
        color: #b81a39;
    }
`