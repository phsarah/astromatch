import styled from 'styled-components'
import { AppBar } from '../AppBar/AppBar'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { ChooseButtons } from '../ChooseButtons/ChooseButtons' 

const Card = styled.div`
    width: 400px;
    height: 600px;
    background: #fff; 
    border: 1px solid black;
    border-radius: 5px;  
`

export function ChooseProfilePage(){
    
    return(
        <Card>
           <AppBar/>
        <hr/>
           <ProfileCard/>
           <ChooseButtons/>
       </Card>
    )
}
