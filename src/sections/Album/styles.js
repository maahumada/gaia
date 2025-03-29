"use client"

import styled from "styled-components";

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