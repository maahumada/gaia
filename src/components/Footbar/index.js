"use client"

import { Container, LinkContainer, LinkIcon, LinkIconImage, MainButton, MainButtonIcon } from "./styles"

const photoButtonHandler = () => {
  alert("FOTON");
}

const Footbar = () => {
  return (
    <Container>
      <LinkContainer>
        <LinkIcon href="/" selected={true}>
          <LinkIconImage src="/img/homeIcon.png" width={31} height={34} alt="home" />
        </LinkIcon>
      </LinkContainer>
      <MainButton onClick={photoButtonHandler}>
        <MainButtonIcon src="/img/photoIcon.png" width={46} height={45} alt="picture" />
      </MainButton>
      <LinkContainer>
        <LinkIcon href="/album" selected={false}>
          <LinkIconImage src="/img/albumIcon.png" width={48} height={34} alt="album" />
        </LinkIcon>
      </LinkContainer>
    </Container>
  )
}

export default Footbar