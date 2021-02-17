import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { ChooseButtons } from '../../components/ChooseButtons/ChooseButtons' 


export function ChooseProfilePage(){
    const [person, setPerson] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/person")
            .then(response => {
                setPerson(response.data.profile)
            })
            .catch(e => {
                console.log("error:", e.message)
            })
    }

    const choiceProfile = (choice) => {
        const body = {
            choice: choice,
            id: person.id
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/choose-person`, body)
        .then(response => {
            console.log(response)
        })
        getProfileToChoose()
    }

    const onClickYes = () => {
        choiceProfile(true)
    }
     const onClickNo = () => {
        choiceProfile(false)
    }
       
    return(
        <div>
           <ProfileCard profile={person}/>
           <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
       </div>
    )
} 
