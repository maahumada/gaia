"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Change to Link import
import {
  AlbumContainer,
  AlbumTitle,
  GridContainer,
  GridItem,
  WildlifeImage,
  SpeciesName
} from './styles';

const AlbumSection = () => {
  const [wildlifeEntries, setWildlifeEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWildlifeEntries = async () => {
      try {
        const response = await fetch('/api/wildlife-entries');
        if (!response.ok) {
          throw new Error('Failed to fetch wildlife entries');
        }
        const data = await response.json();
        setWildlifeEntries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWildlifeEntries();
  }, []);

  if (isLoading) {
    return <AlbumContainer>Loading...</AlbumContainer>;
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
            href={`/species/${entry._id}`} 
            key={entry._id}
            style={{ textDecoration: 'none' }}
          >
            <GridItem>
              <WildlifeImage
                src={entry.imageUrl}
                alt={entry.name}
              />
            </GridItem>
            <SpeciesName>{entry.name}</SpeciesName>
          </Link>
        ))}
      </GridContainer>
    </AlbumContainer>
  );
};

export default AlbumSection;