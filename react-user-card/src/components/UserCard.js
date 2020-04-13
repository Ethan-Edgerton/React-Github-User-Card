import React from "react";
import styled from "styled-components";

export default function UserCard(props) {
  return (
    <Container>
      <Name>{props.data.name}</Name>
      <Avatar src={props.data.avatar_url} />
      <Content>
        <p>User: {props.data.login}</p>
        <p>Location: {props.data.location}</p>
        <p> URL:{<a href={props.data.html_url}>{props.data.html_url}</a>}</p>
        <p>Followers: {props.data.followers}</p>
        <div>
          {props.followers.map((a) => {
            return <Follower src={a.avatar_url} />;
          })}
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: dodgerblue;
  width: 60%;
  margin: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 40rem) {
    width: 90%;
  }
`;

const Name = styled.h1`
  color: white;
  font-size: 3rem;
  width: 100%;
  margin: 0;
  padding: 0.5rem;
  text-align: center;
`;

const Avatar = styled.img`
  width: 45%;
  margin-right: 3rem;
  border-radius: 0.2rem;
`;

const Content = styled.dl`
  text-align: center;
  color: white;
`;

const Follower = styled.img`
  height: 3rem;
  margin: 0.5rem;
`;
