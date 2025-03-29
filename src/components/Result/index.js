"use client"

import { useState, useEffect } from "react";
import { AIResponse, AIResponseText, CloseButton, CloseButtonIcon, Container, InnerContainer, LoadingLogo, LoadingLogoContainer, LoadingTitle, MainImage, Metadata, ResponseBackground, Title } from "./styles";

const Result = ({ isLoading, data, closeModal }) => {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if(data?.description){
      let i = 0;
      const interval = setInterval(() => {
        if (i <= data.description.length) {
          setDisplayText(data.description.slice(0, i)); // Slices the string up to index i
          i++;
        } else {
          clearInterval(interval);
        }
      }, Math.round(Math.random()*30));
      
      return () => clearInterval(interval);
    }
  }, [data?.description]);

  return (
    <Container>
      <InnerContainer>
        {isLoading && <>
          <LoadingLogoContainer>
            <LoadingLogo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
          </LoadingLogoContainer>
          <LoadingTitle>Analyzing...</LoadingTitle>
        </>}
        {data && <>
          <CloseButton onClick={closeModal}>
            <CloseButtonIcon src="/img/close.png" width={24} height={24} alt="Close" />
          </CloseButton>
          <Title>{data?.species_name}</Title>
          <MainImage src={data?.image} width={300} height={300} alt="Species Image" style={{ objectFit: "cover" }} />
          <Metadata>{data?.location} - {data?.date && new Date(data.date).toLocaleString()}</Metadata>
          <AIResponse>
            <ResponseBackground src="/img/gaiaLogo.png" width={321} height={217} alt="" />
            <AIResponseText>{displayText}</AIResponseText>
          </AIResponse>
        </>}
      </InnerContainer>
    </Container>
  )
}

export default Result;