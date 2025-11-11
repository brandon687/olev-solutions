import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      onBookCall={() => console.log('Book call clicked')}
      onSeeCapabilities={() => console.log('See capabilities clicked')}
    />
  );
}
