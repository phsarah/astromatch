import React from 'react';
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
    const profile = props.profile
    return(
            <ProfileContainer>
                <ProfilePicture src={profile.photo}/>
                <ProfileInfo>
                    <p>{profile.name}, {profile.age}</p>
                    <p>{profile.bio}</p>
                </ProfileInfo>
            </ProfileContainer>
    )
}