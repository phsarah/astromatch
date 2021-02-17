import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
   
`

export function ChooseButtons(props){

    return(
        <div>
            <ButtonsContainer>
                <button onClick={props.onClickNo}>Não</button>
                <button onClick={props.onClickYes}>Sim</button>
            </ButtonsContainer>
        </div>
    )
}