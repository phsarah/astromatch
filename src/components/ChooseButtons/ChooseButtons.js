import React from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
   
`

export function ChooseButtons(){
    return(
        <div>
            <ButtonsContainer>
                <button>Não</button>
                <button>Sim</button>
            </ButtonsContainer>
        </div>
    )
}