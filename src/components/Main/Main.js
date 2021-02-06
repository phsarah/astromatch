import styled from 'styled-components'
import { ChooseProfilePage } from "../ChooseProfilePage/ChooseProfilePage";
import { ResetButton } from "../ResetButton/ResetButton"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export function Main(){
    return(
        <Container>
            <ChooseProfilePage/>
            <ResetButton/>
        </Container>
    )
}
