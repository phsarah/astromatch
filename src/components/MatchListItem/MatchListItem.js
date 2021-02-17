import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    margin: 8px 8px;
    
    :hover{
        background-color: rgba(0,0,0,0.1)
    }
`
const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding:  0 1px 2px;
  margin-right: 5px;
`

export function MatchListItem(props){
    const profile = props.profile
    return(
        <ItemContainer>
        <Avatar src={profile.photo}/>
           <p>{profile.name}</p>
        </ItemContainer>
    )
}