import styled from '@emotion/styled'


export const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const DivisionLine = styled.div`
    border: 1px solid #BDBDBD;
    display: flex;
    width: 1200px;
`

export const HeaderLine = styled.div`
    border: 1px solid black;
    width: 1200px;
`

export const HeadType = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 18px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    height: 30px;
    padding-bottom: 20px;
`

export const Column = styled.div`
    font-size: 16px;
    color: #4F4F4F;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1200px;

    padding-top: 10px;
    padding-bottom: 40px;
`

export const HeadRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
    height: 40px;
`

export const MyNumber = styled.div`
`

export const MyTitle = styled.div`
    cursor: pointer;
    :hover {
        color: #6084a7fd;
    }
`

export const MyWriter = styled.div`
`

export const MyDate = styled.div`
`


export const ListButton = styled.div`
    
`

export const Button = styled.button`
     width: 171px;
     height: 52px;
     background-color: white;
     border-radius: 15px;
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     cursor: pointer;
     :hover {
     background-color: #748397;
     color: white;
 }
`