import styled from 'styled-components'

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    align-items: center;
`


export function AppBar(props){
    return(
        <AppBarContainer>
            <button onClick={props.goToChooseProfilePage}>Voltar</button>
            <p>Astromatch</p>
           <button onClick={props.goToMatchListPage}> Lista</button>
        </AppBarContainer>
    )
}