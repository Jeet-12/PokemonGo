"use client"
import { Input, Box } from '@chakra-ui/react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <Box mb={6}>
      <Input
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="lg"

        borderRadius="md"
      />
    </Box>
  );
}