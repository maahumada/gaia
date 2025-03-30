"use client"

import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const AlbumContainer = styled.div`
  padding: 24px;
  background-color: #F6EDDC;
  min-height: 100vh;
`;

export const AlbumTitle = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #23513B;
  font-size: 32px;
  margin-bottom: 24px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 100%;
`;

export const GridItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #23513B;
`;

export const WildlifeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SpeciesName = styled.p`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #424242;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
`;

const fadeInSize = keyframes`
  0% { opacity: 0; transform: scale(0); transform: rotate3d(0, 1, 0, 45deg); }
  100% { opacity: 1; transform: scale(1); transform: rotate3d(0, 1, 0, 0deg); }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  animation: ${fadeInSize} .6s forwards 1 ease-out;
  animation-delay: .2s;
  transform: scale(0);
`

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
`

const floating = keyframes`
  0% { margin-top: 4px; margin-bottom: -4px; }
  50% { margin-top: -4px; margin-bottom: 4px; }
  100% { margin-top: 4px; margin-bottom: -4px; }
`

export const Logo = styled(Image)`
  animation: ${floating} 3s forwards infinite cubic-bezier(0.25, 0.1, 0.25, 1.0), ${fadeIn} .6s forwards 1 ease-out;
  animation-delay: .2s;
  transform: scale(0);
`

const fadeOut = keyframes`
  0% { opacity: 1; z-index: 10; }
  99% { opacity: 0; z-index: 10; }
  100% { opacity: 0; z-index: 0; }
`

export const FadeIn = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 130px);
  animation: ${fadeOut} .3s forwards 1 ease-out;
  animation-delay: 2s;
  background: #F6EDDC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  gap: 16px;
  padding: 0 16px;
`