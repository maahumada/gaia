"use client"

import { useState, useEffect } from "react";
import { AIResponse, AIResponseText, CloseButton, CloseButtonIcon, Container, InnerContainer, LoadingLogo, LoadingLogoContainer, LoadingTitle, MainImage, Metadata, ResponseBackground, Title, EndangeredAlert, ErrorText, ErrorTitle, ErrorSubtitle } from "./styles";

const Result = ({ isLoading, data, closeModal, hasError, errorMsg }) => {
  console.log("Haserror: ", hasError, errorMsg)
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

  console.log(data)

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
          {data?.is_endangered && <EndangeredAlert>This is an endangered species</EndangeredAlert>}
          <AIResponse>
            <ResponseBackground src="/img/gaiaLogo.png" width={321} height={217} alt="" />
            <AIResponseText>{displayText}</AIResponseText>
          </AIResponse>
        </>}
        {hasError && <>
          <CloseButton onClick={closeModal}>
            <CloseButtonIcon src="/img/close.png" width={24} height={24} alt="Close" />
          </CloseButton>
          <LoadingLogoContainer>
            <LoadingLogo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
          </LoadingLogoContainer>
          <ErrorTitle>Sorry, we could not process your species</ErrorTitle>
          <ErrorText>Error: {errorMsg || "Could not process request"}</ErrorText>
          <ErrorSubtitle>Please try again with a different input</ErrorSubtitle>
        </>}
      </InnerContainer>
    </Container>
  )
}

export default Result;