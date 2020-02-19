import React from "react"
import styled from "styled-components"

const Container = styled.div `
    width: 90%;
    margin: 20px auto;
    border: 1px solid black;
    border-radius: 10px;
    background-color: beige;
    display: flex;
    justify-content: space-evenly;
`


const Img = styled.img `
    width: 20%;
    height: 20%;
    margin: 30px 0;
    border: 1px solid brown;
    border-radius: 10px;
`

const TextContainer = styled.div `
    width: 70%;
    height: 20%;
    margin: 15px 0;
`

export default function UserCard(props) {
    const followerStrArr = props.followers.map((follower, index) => {
        if (index === props.followers.length - 1) {
            return follower
        } else if (index === props.followers.length - 2) {
            return follower + ", and "
        } else {
            return follower + ", "
        }
    })

    const followerStr = followerStrArr.join('')
    
    return (
        <Container>
            <Img src={props.data.avatar_url} />
            <TextContainer>
                <p><b>Name: </b>{props.data.name}</p>
                <p><b>Login: </b>{props.data.login}</p>
                <p><b>Location: </b>{props.data.location}</p>
                <p><b>Followers: </b>{followerStr}</p>
            </TextContainer>
        </Container>
    )
}