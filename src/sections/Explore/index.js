"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

import React from 'react';
import {
  ExploreContainer,
  ExploreHeader,
  HeaderTitle,
  LogoIcon,
  TopUsersCard,
  TopUsersTitle,
  UserList,
  UserItem,
  UserName,
  UserStats,
  TrophyIcon,
  GridContainer,
  GridItem,
  WildlifeImage,
  SpeciesName,
  BackButton,
  BackButtonIcon,
  SpeciesContainer,
  LoadingText,
  CommunitySightingsTitle
} from './styles';

const ExploreSection = () => {
  const topUsers = [
    {
      username: 'maahumada',
      stats: '7 endangered species found'
    },
    {
      username: 'jlategana',
      stats: '4 endangered species found'
    },
    {
      username: 'npriotto',
      stats: '2 endangered species found'
    }
  ];

  const [wildlifeEntries, setWildlifeEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWildlifeEntries = async () => {
      try {
        const response = await fetch(`/api/capture/`, {
          method: "GET"
        });
        if (!response.ok) {
          throw new Error('Failed to fetch wildlife entries');
        }
        const data = await response.json();
        setWildlifeEntries(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWildlifeEntries();
  }, []);

  return (
    <ExploreContainer>
      <ExploreHeader>
        <BackButton href="/">
          <BackButtonIcon src="/img/arrowLeft.png" width={12} height={20} alt="Back" />
        </BackButton>
        <HeaderTitle>Explore</HeaderTitle>
        <LogoIcon src="/img/explore.png" alt="" width={41} height={25} />
      </ExploreHeader>

      <TopUsersCard>
        <TopUsersTitle>Top users this week</TopUsersTitle>
        <UserList>
          {topUsers.map((user, index) => (
            <UserItem key={index}>
              <TrophyIcon>🏆</TrophyIcon>
              <div>
                <UserName>{user.username}</UserName>
                <UserStats>{user.stats}</UserStats>
              </div>
            </UserItem>
          ))}
        </UserList>
      </TopUsersCard>

      <CommunitySightingsTitle>Community sightings</CommunitySightingsTitle>

      {!isLoading && <GridContainer>
        {wildlifeEntries.map((entry) => (
          <SpeciesContainer key={entry._id}>
            <Link 
            href={`/species/${entry._id}?returnurl=/explore`} 
            key={entry._id}
            style={{ textDecoration: 'none' }}
          >
            <GridItem>
              <WildlifeImage
                src={entry.image}
                alt={entry.species_name}
              />
            </GridItem>
            </Link>
            <SpeciesName>{entry.species_name}</SpeciesName>
          </SpeciesContainer>
        ))}
      </GridContainer>}

      {isLoading && <LoadingText>Loading...</LoadingText>}
    </ExploreContainer>
  );
};

export default ExploreSection;