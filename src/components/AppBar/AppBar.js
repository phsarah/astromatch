import styled from 'styled-components'

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    align-items: center;
`


export function AppBar(){
    return(
        <AppBarContainer>
            <button>Voltar</button>
            <p>Astromatch</p>
           <button> Lista</button>
        </AppBarContainer>
    )
}