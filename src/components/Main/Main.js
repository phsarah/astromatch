import React, { useState } from 'react';
import styled from 'styled-components';
import { ChooseProfilePage } from "../../pages/ChooseProfilePage/ChooseProfilePage";
import { ResetButton } from "../ResetButton/ResetButton";
import { MatchListPage } from "../../pages/MatchListPage/MatchListPage" ;
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
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const goToMatchListPage = () => {
    setSelectedPage("match-list")
  }
  const goToChooseProfilePage = () =>{
    setSelectedPage("choose-profile")
  }
  const renderSelectedPage = () =>{
    switch(selectedPage){
      case "choose-profile":
        return <ChooseProfilePage/>;
      case "match-list":
      return <MatchListPage/>;
      default:
        return <ChooseProfilePage/>;
    }
  } 
 
    return(
        <MainContainer>
          <Card>
            <AppBar goToChooseProfilePage= {goToChooseProfilePage} goToMatchListPage={goToMatchListPage}/>
            {renderSelectedPage()}
          </Card>
          {/* <ResetButton/> */}
        </MainContainer>
    )
}
