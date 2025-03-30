"use client"

import { useState, useEffect } from "react";
import BarChart from "@/components/BarChart";
import { ChartBackgroundImage, ChartContainer, ChartText, Container, FadeIn, FadeInLoader, FindingsSection, GridContainer, GridItem, GridItemContainer, LoadingText, Logo, MapContainer, MoreButton, Spacer, SpeciesContainer, SpeciesName, StatHighlightText, Stats, StatText, StatTextHighlight, Subtitle, Title, WildlifeImage } from "./styles";
import AnimatedText from "@/components/AnimatedText";
import { userId } from '@/lib/constants';
import Link from 'next/link';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

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

const chartData = [
  { key: "JAN",  value: 15 },
  { key: "FEB",  value: 24 },
  { key: "MAR",  value: 13 },
]

const HomeSection = () => {
  const [wildlifeEntries, setWildlifeEntries] = useState([]);
  const [error, setError] = useState(null);

  const [isLoadingSpecies, setIsLoadingSpecies] = useState(true);

  useEffect(() => {
    setIsLoadingSpecies(true);
    const fetchWildlifeEntries = async () => {
      try {
        const response = await fetch(`/api/user/${userId}/album`, {
          method: "GET"
        });
        if (!response.ok) {
          throw new Error('Failed to fetch wildlife entries');
        }
        const data = await response.json();
        setWildlifeEntries(data.data.slice(0,3));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoadingSpecies(false);
      }
    };

    fetchWildlifeEntries();
  }, []);

  const [randomPhrase, setRandomPhrase] = useState(phrases[0]);

  useEffect(() => {
    // Get random phrase when component mounts
    const randomIndex = Math.floor(Math.random() * (phrases.length - 1) + 1);
    setRandomPhrase(phrases[randomIndex]);
  }, []); // Empty dependency array means this runs once on mount

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, [])

  return (
    <Container>
      {isLoading && <FadeIn>
        <Logo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" priority />
        <Title>{randomPhrase}</Title>
      </FadeIn>}
      <FindingsSection>
        <Subtitle>Rarest sightings near you - go find them!</Subtitle>
        <MapContainer>
          <Map />
        </MapContainer>
      </FindingsSection>
      <MoreButton href={`/explore`}>Explore more</MoreButton>
      {!isLoading && <Stats>
        <StatText>
          <AnimatedText target={36} /> species found by you
        </StatText>
        <StatText>
          you helped <AnimatedText target={9} /> endangered species
        </StatText>
        {/* <StatHighlightText>thanks to you</StatHighlightText> */}
      </Stats>}
      <FindingsSection>
        <Subtitle>Your latest findings...</Subtitle>
        {!isLoadingSpecies && <GridContainer>
        {wildlifeEntries.map((entry) => (
          <SpeciesContainer key={entry._id}>
            <Link 
              href={`/species/${entry._id}?returnurl=/`} 
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
          </SpeciesContainer>
        ))}
      </GridContainer>}
      {isLoadingSpecies && <LoadingText>Loading...</LoadingText>}
      </FindingsSection>
      <ChartContainer>
        <ChartBackgroundImage src="/img/gaiaLogo.png" width={213} height={145} alt="" />
        <BarChart data={chartData} />
        <ChartText>on february, you found on average 20% more species than other months</ChartText>
      </ChartContainer>
      <Spacer />
    </Container>
  )
}

export default HomeSection;