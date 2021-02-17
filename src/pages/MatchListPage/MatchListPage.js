import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { MatchListItem } from '../../components/MatchListItem/MatchListItem'

const Card = styled.div`
    width: 400px;
    height: 600px;
    background: #fff; 
    border-radius: 5px;  
    max-height: 50%;
`

export function MatchListPage(){
   const [matches, setMatches] = useState([])
   
   useEffect(() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/matches`)
            .then(response => 
            setMatches(response.data.matches)
            )
            .catch(e => 
                console.log(e.message)
            )
   }, [setMatches])

    return(
        <Card>
            {matches && matches.map((profile) => {
                return <MatchListItem profile={profile}/>
            })}
        </Card>
    )
}