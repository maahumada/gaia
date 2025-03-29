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
  SpeciesName
} from './styles';

const ExploreSection = () => {
  const topUsers = [
    {
      username: 'maahumada',
      stats: '3 endangered species found'
    },
    {
      username: 'jlategana',
      stats: '2 endangered species found'
    },
    {
      username: 'npirata',
      stats: '1 invasive species found'
    }
  ];

  const [wildlifeEntries, setWildlifeEntries] = useState([]);

  useEffect(() => {
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
      }
    };

    fetchWildlifeEntries();
  }, []);

  return (
    <ExploreContainer>
      <ExploreHeader>
        <HeaderTitle>Explore</HeaderTitle>
        <LogoIcon src="/path-to-logo.svg" alt="" />
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

      <GridContainer>
        {wildlifeEntries.map((entry) => (
          <div key={entry._id}>
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
          </div>
        ))}
      </GridContainer>
    </ExploreContainer>
  );
};

export default ExploreSection;