import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; */
    margin: 100px;

    padding-top:80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 20px grey;
    border: 1px solid black;
    border: none;
`

export const MyHeader = styled.div`
    width: 996px;
    /* display: flex;
    flex-direction: row;
    justify-content: space-evenly; */
    padding-top: 100px;
    padding-bottom: 30px;
`

export const ProflePic = styled.div`
    width: 46px;
    height: 46px;
`

export const HeaderLine = styled.div`
    width: 900px;
`

export const MyWriter = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    padding-bottom: 10px;
`

export const MyDate = styled.div`
    font-weight: normal;
    font-size: 16px;
    color: #828282;
`

export const DivisionL = styled.div`
    width: 996px;
    border: 1px solid #BDBDBD;
`

export const MyBody = styled.div`
    width: 996px;
    height: 1070px;
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    padding-top: 100px;
`
export const MyTitle = styled.div`
    font-family: Noto Sans CJK KR;
    font-weight: 700;
    font-size: 36px;
    padding-bottom: 40px;
`

export const MyContents = styled.div`
    font-family: Noto Sans CJK KR;
    font-size: 20px;
`

export const MainPic = styled.img `
    width: 996px;
    height: 480px;
    padding-bottom: 50px;
`

export const MainVid = styled.div`
    width: 486px;
    height: 240px;
`
export const PageBottom = styled.div`
    width: 800px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const MyBtn = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

width: 179px;
height: 45px;

background: #FFFFFF;
border: 1px solid #BDBDBD;
box-sizing: border-box;

border-radius: 10px;
cursor: pointer;

:hover {
    background-color: lightsteelblue;
    border-color: white;
    color: white;
  }
`