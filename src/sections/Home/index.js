"use client"

import { useState, useEffect } from "react";
import BarChart from "@/components/BarChart";
import { ChartBackgroundImage, ChartContainer, ChartText, Container, FadeIn, FadeInLoader, FindingsSection, GridContainer, GridItem, Logo, MoreButton, Spacer, SpeciesName, StatHighlightText, Stats, StatText, StatTextHighlight, Subtitle, Title, WildlifeImage } from "./styles";
import AnimatedText from "@/components/AnimatedText";

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

const wildlifeEntries = [
  { id: 1, name: 'Cornelius', image: '/path-to-cornelius-image.jpg' },
  { id: 2, name: 'Pochito', image: '/path-to-pochito-image.jpg' },
  { id: 3, name: 'Late(gana)', image: '/path-to-late-image.jpg' },
];

const chartData = [
  { key: "JAN",  value: 15 },
  { key: "FEB",  value: 24 },
  { key: "MAR",  value: 13 },
]

const HomeSection = () => {
  const [randomPhrase, setRandomPhrase] = useState(phrases[0]);

  useEffect(() => {
    // Get random phrase when component mounts
    const randomIndex = Math.floor(Math.random() * (phrases.length - 1) + 1);
    setRandomPhrase(phrases[randomIndex]);
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <Container>
      <FadeIn>
        <FadeInLoader src="/img/loading.png" width={64} height={64} alt="Loading..." />
      </FadeIn>
      <Title>{randomPhrase}</Title>
      <Logo src="/img/gaiaLogo.png" width={309} height={210} alt="Gaia Logo" />
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
            <div key={entry.id}>
              <GridItem>
                <WildlifeImage
                  src={entry.image}
                  alt={entry.name}
                />
              </GridItem>
              <SpeciesName>{entry.name}</SpeciesName>
            </div>
          ))}
        </GridContainer>
      </FindingsSection>
      <FindingsSection>
        <Subtitle>Rarest sightings near you - go find them!</Subtitle>
        <GridContainer>
          {wildlifeEntries.map((entry) => (
            <div key={entry.id}>
              <GridItem>
                <WildlifeImage
                  src={entry.image}
                  alt={entry.name}
                />
              </GridItem>
              <SpeciesName>{entry.name}</SpeciesName>
            </div>
          ))}
        </GridContainer>
      </FindingsSection>
      <MoreButton>Explore more</MoreButton>
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