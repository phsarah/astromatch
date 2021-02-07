import React from 'react';
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { ChooseButtons } from '../ChooseButtons/ChooseButtons' 


export function ChooseProfilePage(){
   
    return(
        <div>
           <ProfileCard/>
           <ChooseButtons/>
       </div>
    )
}
