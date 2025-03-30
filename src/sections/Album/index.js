"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  AlbumContainer,
  AlbumTitle,
  GridContainer,
  GridItem,
  WildlifeImage,
  SpeciesName,
  FadeIn,
  Logo,
  Title
} from './styles';
import { userId } from '@/lib/constants';

const AlbumSection = () => {

  const phrases = [
    "",
    "Step outside, the next great discovery could be yours!",
    "Nature is waiting, go find it!",
    "The world is full of hidden wonders, go find them!",
    "Every step is a chance to uncover a new species.",
    "Look closer, nature has secrets to share.",
    "Every leaf, every wing, every footprint tells a story.",
    "Discover the unseen, explore the wild!",
    "Seek, observe, and marvel at the unknown."
  ];

  const [randomPhrase, setRandomPhrase] = useState(phrases[0]);
  
  useEffect(() => {
    // Get random phrase when component mounts
    const randomIndex = Math.floor(Math.random() * (phrases.length - 1) + 1);
    setRandomPhrase(phrases[randomIndex]);
  }, []); // Empty dependency array means this runs once on mount

  const [wildlifeEntries, setWildlifeEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWildlifeEntries = async () => {
      try {
        const response = await fetch(`/api/user/${userId}/album`, {
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

  if (isLoading) {
    return <FadeIn>
      <Logo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
      <Title>{randomPhrase}</Title>
    </FadeIn>;
  }

  if (error) {
    return <AlbumContainer>Error: {error}</AlbumContainer>;
  }

  return (
    <AlbumContainer>
      <AlbumTitle>Your wildlife album</AlbumTitle>
      <GridContainer>
        {wildlifeEntries.map((entry) => (
          <Link 
          href={`/species/${entry._id}?returnurl=/album`} 
            key={entry._id}
            style={{ textDecoration: 'none' }}
          >
            <GridItem>
              <WildlifeImage
                src={entry.image}
                alt={entry.species_name}
              />
            </GridItem>
            <SpeciesName>{entry.species_name}</SpeciesName>
          </Link>
        ))}
      </GridContainer>
    </AlbumContainer>
  );
};

export default AlbumSection;