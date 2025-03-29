"use client"

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  CardContainer,
  BackButton,
  SpeciesTitle,
  ImageContainer,
  SpeciesImage,
  MetadataContainer,
  UserComment,
  InfoCard,
  InfoText,
  TitleContainer,
  BackButtonIcon,
  EndangeredAlert
} from './styles';

const SpeciesCardSection = ({ params }) => {

  const [speciesData, setSpeciesData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useParams();
  const { id } = searchParams;

  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await fetch(`/api/capture/${id}`, {
          method: "GET"
        });
        if (!response.ok) {
          throw new Error('Failed to fetch wildlife entries');
        }
        const data = await response.json();
        setSpeciesData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpeciesData();
  }, []);

  const query = useSearchParams();

  return (
    <CardContainer>
      <TitleContainer>
        <BackButton href={query.get("returnurl") || "/album"}>
          <BackButtonIcon src="/img/arrowLeft.png" width={12} height={20} alt="Back" />
        </BackButton>
        <SpeciesTitle>{speciesData.species_name}</SpeciesTitle>
      </TitleContainer>
      
      <ImageContainer>
        <SpeciesImage src={speciesData.image} alt={speciesData.name} />
      </ImageContainer>

      <MetadataContainer>
        {speciesData.location} - {speciesData.date && new Date(speciesData.date).toLocaleString()}
      </MetadataContainer>

      {speciesData?.caption && <UserComment>{speciesData.caption}</UserComment>}

      {speciesData.is_endangered && (
        <EndangeredAlert>This is an endangered species.</EndangeredAlert>
      )}
      
      <InfoCard>
        <InfoText>{speciesData.description}</InfoText>
      </InfoCard>
    </CardContainer>
  );
};

export default SpeciesCardSection;