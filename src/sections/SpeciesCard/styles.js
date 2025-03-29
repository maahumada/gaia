"use client"

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 24px;
  background-color: #F6EDDC;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  gap: 16px;
`

export const BackButton = styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
`;

export const BackButtonIcon = styled(Image)`

`

export const SpeciesTitle = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #23513B;
  font-size: 28px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #23513B;
  margin-bottom: 20px;
`;

export const SpeciesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MetadataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-family: 'Nunito', sans-serif;
  color: #424242;
`;

export const UserComment = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #424242;
  margin-bottom: 24px;
`;

export const EndangeredAlert = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  color: rgb(206, 66, 27);
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 28px;
  padding: 12px 16px;
  border-radius: 8px;
  margin: 16px 0;
  text-align: center;
  border: 3px solid rgb(206, 66, 27);
`;

export const InfoCard = styled.div`
  background-color: #F6EDDC;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  position: relative;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/img/gaiaLogo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    opacity: 0.1;
    z-index: 0;
    border-radius: 16px;
  }
`;

export const InfoText = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #424242;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;