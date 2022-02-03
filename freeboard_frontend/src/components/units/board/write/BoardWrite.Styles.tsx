import styled from '@emotion/styled'

export let Your__Error = styled.span`
    color: red;
    font-size: 12px;
`

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;

    padding-top:80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 20px grey;
    border: 1px solid black;
    border: none;
`

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    padding-bottom: 40px;
    font-family: Cochin;
`


export const AccountSection = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width: 996px;
    padding-bottom: 30px;
`
export const InputWrapper = styled.div `
    display: flex;
    flex-direction: column;
    /* width: 486px; */
    padding-top: 40px;
`

export const Label = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: black; 
    font-family: Cochin;
`

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
    font-family: Cochin;
`

export const Password = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
    font-family: Cochin;
`
export const Longbox = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    /* box-sizing: border-box; */
    font-size: 16px;
    font-family: Cochin;
`
export const AddressDetail = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    /* box-sizing: border-box; */
    font-size: 16px;
    font-family: Cochin;
`

export const Contents = styled.input `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 996px;
    height: 480px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
    font-family: Cochin;
    `

export const ZipWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
    height: 242px;
`

export const ZipcodeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 230px;
    height: 52px;
`

export const Zipcode= styled.input`
    width: 77px;
    height: 52px;
    font-size: 16px;
    font-family: Cochin;

    border: 1px solid #BDBDBD;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const AddressBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 124px;
    height: 52px;

    background-color: black;
    color: white;
    font-size: 16px;
    font-family: Cochin;

    cursor: pointer;
`

export const Youtube = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #BDBDBD;
    /* box-sizing: border-box; */
    font-size: 16px;
    font-family: Cochin;
`

export const ImageWrapper = styled.div`
    width: 996px;
    height: 118px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-top: 40px;
`

export const GreyBoxes = styled.div`
    width: 282px;
    height: 78px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Box = styled.button`
    background-color: #BDBDBD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: black;
    font-size: 12px;
    font-family: Cochin;

    width: 78px;
    height: 78px;

    cursor: pointer;
`

export const BoxWord = styled.div`
font-family: Cochin;
`

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    padding-top: 60px;

    font-size: 16px;

    width: 996px;
    height: 64px;

    font-weight: 500;
`
export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 24px;
    width: 159px;
    font-family: Cochin;
`

export const RadioButton = styled.input`
`


export const ButtonWrapper = styled.div`
    width: 100%;
    height: 52px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    padding-top: 90px;
    padding-bottom: 30px;
`

interface IProps {
    isActive : boolean
}

export const MyBtn = styled.button`
    font-family: Cochin;
    width: 179px;
    height: 52px;
    color: black; 
    font-size: 20px;

    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;


    cursor: pointer;

    background-color: ${(props: IProps) => props.isActive === true ? "#b81a39" : "none"};
    color: ${(props: IProps) => props.isActive === true ? "white" : "none"};
`