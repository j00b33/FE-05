import styled from '@emotion/styled'

const BImage = styled.img`
    width: 300px;
    padding-bottom: 50px;
`

const ImageWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 300px;
`
const Wrapper = styled.div`
    height: 300px;
    background-color: #b0d5d8;
`

export default function LayoutBanner(){
    return(
        <div>
        <Wrapper>Banner Area
            <ImageWrapper>
            <BImage src="/background.png" />
            </ImageWrapper>
        </Wrapper>
        </div>
    )
}