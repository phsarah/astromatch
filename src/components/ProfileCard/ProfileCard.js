import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const ProfileContainer = styled.div`
    padding: 20px;
`
const ProfilePicture = styled.img`
    width: 100%;
    display: block;
    max-height: 400px;
`
const ProfileInfo = styled.div`
    border: 1px solid black;
    padding: 0 6px;
`

export function ProfileCard(props){
    const [person, setPerson] = useState({})

    useEffect(() => {
        profileToChoose()
    }, [])

    const profileToChoose = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/person")
            .then(response => {
                setPerson(response.data.profile)
            })
            .catch(e => {
                console.log("error:", e.message)
            })
        }
    
    return(
            <ProfileContainer>
                <ProfilePicture src={person.photo}/>
                <ProfileInfo>
                    <p>{person.name}, {person.age}</p>
                    <p>{person.bio}</p>
                </ProfileInfo>
            </ProfileContainer>
    )
}