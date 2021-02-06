import React from 'react';
import styled from 'styled-components';
import { ChooseProfilePage } from "../ChooseProfilePage/ChooseProfilePage";
import { ResetButton } from "../ResetButton/ResetButton";
import { MatchListPage } from "../MatchListPage/MatchListPage" ;
import { AppBar } from '../AppBar/AppBar';


const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    width: 400px;
    height: 650px;
    background: #fff; 
    border: 1px solid black;
    border-radius: 5px;  
`

export function Main(){
    return(
        <MainContainer>
          <Card>
            <AppBar/>
            <ChooseProfilePage/>
             <MatchListPage/>
          </Card>
          <ResetButton/>
        </MainContainer>
    )
}
