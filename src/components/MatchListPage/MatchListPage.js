import React from 'react'
import styled from 'styled-components'
import { MatchListItem } from '../MatchListItem/MatchListItem'

const Card = styled.div`
width: 400px;
height: 600px;
background: #fff; 
border: 1px solid black;
border-radius: 5px;  
`

export function MatchListPage(){
    const matches = [
        {
            "id": "71gMbZs2txS9LDvGK5Ew",
            "age": 26,
            "name": "Anitta",
            "photo": "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
            "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
          }
    ]
    return(
        <Card>
            {matches.map((profile) => {
                return <MatchListItem profile={profile}/>
            })}
        </Card>
    )
}