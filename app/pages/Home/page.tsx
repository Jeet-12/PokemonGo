"use client";
import { useState, useEffect } from "react";
import { Box, Grid, Heading, Container, Text, Spinner } from "@chakra-ui/react";
import PokemonCard from "../../component/PokemonCard";
import SearchBar from "../../component/SearchBar";
import { fetchPokemons } from "../../utils/api";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(150);
        setPokemons(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="container.lg" py={8} textAlign="center">
      <Heading as="h1" mb={6}>
        Pokémon Explorer
      </Heading>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Loading State */}
      {loading ? (
        <Box mt={8}>
          <Spinner size="xl" color="teal.500" />
          <Text mt={4} fontSize="lg" fontWeight="bold">
            Pokémons are coming...
          </Text>
        </Box>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6} mt={6}>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
          ) : (
            <Text fontSize="lg" color="gray.500" colSpan={3}>
              No Pokémon found.
            </Text>
          )}
        </Grid>
      )}
    </Container>
  );
}
