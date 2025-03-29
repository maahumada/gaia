"use client"

import styled from 'styled-components';

export const ExploreContainer = styled.div`
  padding: 24px;
  background-color: #F6EDDC;
  min-height: 100vh;
`;

export const ExploreHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #23513B;
  font-size: 32px;
`;

export const LogoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const TopUsersCard = styled.div`
  background-color: #F6EDDC;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .4);
`;

export const TopUsersTitle = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #424242;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TrophyIcon = styled.span`
  font-size: 20px;
`;

export const UserName = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #424242;
  font-size: 16px;
  margin: 0;
`;

export const UserStats = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #424242;
  font-size: 14px;
  margin: 4px 0 0 0;
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