"use client"

import { useState, useEffect } from "react";
import BarChart from "@/components/BarChart";
import { ChartBackgroundImage, ChartContainer, ChartText, Container, FadeIn, FadeInLoader, FindingsSection, GridContainer, GridItem, GridItemContainer, Logo, MoreButton, Spacer, SpeciesName, StatHighlightText, Stats, StatText, StatTextHighlight, Subtitle, Title, WildlifeImage } from "./styles";
import AnimatedText from "@/components/AnimatedText";
import { userId } from '@/lib/constants';
import Link from 'next/link';

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
        setWildlifeEntries(data.data.slice(0,3));
      } catch (err) {
        setError(err.message);
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
        <Logo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
        <Title>{randomPhrase}</Title>
      </FadeIn>}
      <FindingsSection>
        <Subtitle>Rarest sightings near you - go find them!</Subtitle>
      </FindingsSection>
      <MoreButton href={`/explore`}>Explore more</MoreButton>
      <Stats>
        <StatText>
          <AnimatedText target={27} /> species found by you
        </StatText>
        <StatText>
          you helped <AnimatedText target={7} /> endangered species
        </StatText>
        {/* <StatHighlightText>thanks to you</StatHighlightText> */}
      </Stats>
      <FindingsSection>
        <Subtitle>Your latest findings...</Subtitle>
        <GridContainer>
        {wildlifeEntries.map((entry) => (
          <Link 
          href={`/species/${entry._id}?returnurl=/`} 
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