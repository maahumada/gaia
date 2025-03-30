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
  EndangeredAlert,
  Title,
  Logo,
  FadeIn
} from './styles';

const SpeciesCardSection = ({ params }) => {

  const [speciesData, setSpeciesData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useParams();
  const { id } = searchParams;

  useEffect(() => {
    setIsLoading(true);
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
  

  if(isLoading){
    return <FadeIn>
      <Logo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
      <Title>{randomPhrase}</Title>
    </FadeIn>
  }

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