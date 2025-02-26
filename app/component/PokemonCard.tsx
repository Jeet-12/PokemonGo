import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Image, Text, Flex, Badge } from '@chakra-ui/react';
import NextLink from 'next/link';

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];

  // Dynamic colors for light/dark mode
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.300', 'gray.700');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.900', 'white');
  const badgeColor = useColorModeValue('teal.600', 'teal.300');

  return (
    <NextLink href={`/pages/Pokemon/${pokemonId}`} passHref>
      <Box

        borderWidth="1px"
        borderColor={cardBorder}
        borderRadius="lg"
        overflow="hidden"
        textAlign="center"
        p={5}
        bg={cardBg}
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: 'scale(1.08)',
          boxShadow: 'xl',
          bg: hoverBg,
        }}
        cursor="pointer"
        role="group"
      >
        <Flex direction="column" align="center" justify="center">
          {/* Pokemon Image with Smooth Hover Effect */}
          <Box position="relative" _groupHover={{ transform: 'scale(1.1)' }} transition="transform 0.2s ease-in-out">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt={pokemon.name}
              boxSize="120px"
              objectFit="contain"
              loading="lazy"
            />
          </Box>

          {/* Pokemon Name */}
          <Text
            fontWeight="bold"
            fontSize="xl"
            mt={4}
            color={textColor}
            textTransform="capitalize"
          >
            {pokemon.name}
          </Text>

          {/* Pokemon ID Badge */}
          <Badge
            colorScheme="teal"
            fontSize="sm"
            px={3}
            py={1}
            mt={3}
            borderRadius="full"
            fontWeight="medium"
            bg={badgeColor}
            color="white"
          >
            #{pokemonId}
          </Badge>
        </Flex>
      </Box>
    </NextLink>
  );
}
