import React from 'react';
import Link from 'next/link';
import {
  CardContainer,
  BackButton,
  SpeciesTitle,
  ImageContainer,
  SpeciesImage,
  MetadataContainer,
  UserComment,
  InfoCard,
  InfoText
} from './styles';

const SpeciesCardSection = () => {
  // This would come from your API/database
  const speciesData = {
    name: "Frogasmus epicardus",
    image: "/path-to-image.jpg",
    date: "23/02/2025 - 18:21hs",
    location: "Entre rios, Argentina",
    userComment: "holaaaaaaaaaa!! este bicho lo vimos en un camping con los chicos. estaba re bueno",
    description: "Manu Frog is a rare amphibian species known for its vibrant emerald-green skin and unique ability to mimic the sounds of its surroundings, from bird calls to rustling leaves. Found primarily in the dense rainforests of South America, this elusive creature is most active during humid nights, using its webbed feet to navigate both land and water with ease. Scientists believe the Manu Frog's distinctive markings serve as a natural camouflage, helping it evade predators such as snakes and larger amphibians. Despite its charming appearance, the species remains largely unstudied due to its secretive nature and limited sightings in the wild."
  };

  return (
    <CardContainer>
      <Link href="/album">
        <BackButton>←</BackButton>
      </Link>
      
      <SpeciesTitle>{speciesData.name}</SpeciesTitle>
      
      <ImageContainer>
        <SpeciesImage src={speciesData.image} alt={speciesData.name} />
      </ImageContainer>

      <MetadataContainer>
        {speciesData.location} — {speciesData.date}
      </MetadataContainer>

      <UserComment>{speciesData.userComment}</UserComment>
      
      <InfoCard>
        <InfoText>{speciesData.description}</InfoText>
      </InfoCard>
    </CardContainer>
  );
};

export default SpeciesCardSection;