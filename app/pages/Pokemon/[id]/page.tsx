import { Box, Image, Text, Stack, Heading, Container, Badge } from "@chakra-ui/react";
import { fetchPokemonDetails, fetchPokemons } from "../../../utils/api";


interface PokemonDetails {
  name: string;
  sprites: { front_default: string };
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  moves: { move: { name: string } }[];
}


export async function generateStaticParams() {
  const pokemons = await fetchPokemons(150);
  return pokemons.map((pokemon) => ({
    id: pokemon.url.split("/").slice(-2, -1)[0],
  }));
}

// Fetch data directly in the component
export default async function PokemonDetails({ params }: { params: { id: string } }) {
  const pokemon = await fetchPokemonDetails(params.id);

  if (!pokemon) {
    return (
      <Container maxW="container.md" py={8} textAlign="center">
        <Heading as="h1" mb={6} color="red.500">
          Pokémon Not Found
        </Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.lg" py={8} display="flex" flexDir="column" alignItems="center">
      <Box
        bgGradient="linear(to-r, teal.600, blue.500)"
        borderRadius="lg"
        p={6}
        boxShadow="xl"
        textAlign="center"
        maxW="500px"
        width="100%"
        border="3px solid"
        borderColor="teal.300"
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "2xl",
          borderColor: "blue.300",
        }}
      >
        {/* Pokémon Name */}
        <Heading as="h1" fontSize="3xl" color="white" textTransform="capitalize">
          {pokemon.name}
        </Heading>

        {/* Pokémon Image */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            boxSize="180px"
            transition="all 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          />
        </Box>

        {/* Pokémon Types */}
        <Stack direction="row" justify="center" mt={4}>
          {pokemon.types.map((type) => (
            <Badge key={type.type.name} colorScheme="purple" fontSize="lg" px={3} py={1} borderRadius="full">
              {type.type.name}
            </Badge>
          ))}
        </Stack>

        {/* Pokémon Abilities */}
        <Text fontSize="lg" mt={4} color="white">
          <strong>Abilities:</strong> {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
        </Text>

        {/* Pokémon Stats */}
        <Box mt={5} textAlign="left">
          <Heading as="h3" size="md" color="white" mb={2}>
            Stats:
          </Heading>
          <Stack spacing={1}>
            {pokemon.stats.map((stat) => (
              <Text key={stat.stat.name} color="white">
                {stat.stat.name}: <strong>{stat.base_stat}</strong>
              </Text>
            ))}
          </Stack>
        </Box>

        {/* Pokémon Moves */}
        <Box mt={4} textAlign="left">
          <Heading as="h3" size="md" color="white" mb={2}>
            Moves:
          </Heading>
          <Text fontSize="lg" color="white">
            {pokemon.moves.slice(0, 5).map((move) => move.move.name).join(", ")}...
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
