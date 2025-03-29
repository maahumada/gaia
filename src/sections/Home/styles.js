"use client"

import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 48px 14px;
  gap: 32px;
  position: relative;
`

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(.6); transform: rotate3d(0, 1, 0, 45deg); }
  100% { opacity: 1; transform: scale(1); transform: rotate3d(0, 1, 0, 0deg); }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
  animation: ${fadeIn} .6s forwards 1 ease-out;
`

const floating = keyframes`
  0% { margin-top: 4px; margin-bottom: -4px; }
  50% { margin-top: -4px; margin-bottom: 4px; }
  100% { margin-top: 4px; margin-bottom: -4px; }
`

export const Logo = styled(Image)`
  animation: ${floating} 3s forwards infinite cubic-bezier(0.25, 0.1, 0.25, 1.0), ${fadeIn} .6s forwards 1 ease-out;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
`

export const StatText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #424242;
  text-align: center;
  display: inline;
  gap: 6px;
`

export const StatHighlightText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #23513B;
  text-align: center;
`

export const FindingsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #23513B;
`

export const AlbumContainer = styled.div`
  padding: 24px;
  background-color: #F6EDDC;
  min-height: 100vh;
`

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
  border: 3px solid #23513B;
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

export const MoreButton = styled.div`
  border: none;
  background: #23513B;
  width: 100%;
  padding: 8px 0;
  font-size: 24px;
  font-weight: 700;
  color: #F6EDDC;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`

export const Spacer = styled.div`
  min-height: 24px;
  width: 100%;
`

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
  position: relative;
`

export const ChartBackgroundImage = styled(Image)`
  opacity: 0.05;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const ChartText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #23513B;
  text-align: end;
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 130px);
  animation: ${fadeOut} 0.6s forwards 1 ease-out;
  animation-delay: 0.6s;
  background: #F6EDDC;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const FadeInLoader = styled(Image)`
  animation: ${rotate} forwards infinite 1s linear;
`