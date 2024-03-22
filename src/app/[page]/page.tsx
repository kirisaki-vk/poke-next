"use client"
import { pokedex } from "@/fetcher/pokedex";
import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import useSWR from "swr";
import PokemonCard from "../components/pokemonCard";
import ErrorComponent from "../components/errorComponent";
import Link from "next/link";

export default function PokemonDetails({ params }: {
  params: {
    page: number
  }
}) {
  const { data, isLoading, error } = useSWR("getall", (_) =>
    pokedex.getPokemonsList({
      limit: 50,
      offset: 50 * (params.page - 1),
    })
  );

  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      flexDir={"column"}
      alignItems={"center"}
      overflow={"auto"}
    >
      <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"150px"} bgColor={"rgba(255, 255, 255, 0.7)"}>
        <Heading>Poke-next</Heading>
        <Text>Click on a pokemon to details</Text>
      </Flex>
      {!error ? (
        <Grid templateColumns="repeat(5, 1fr)" gap={6} w={"100%"} h={"100%"} p={6} overflow={"auto"}>
          {data?.results.map((result) => (
            <GridItem w={"100%"} key={result.name}>
              <PokemonCard id={result.name} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <ErrorComponent />
      )}
      <Flex w={"100%"} justifyContent={"space-between"} px={10} my={4} alignItems={"center"}>
        <Button colorScheme="blue" isActive={data?.previous === null} as={Link} href={`/${params.page - 1}`}>Previous</Button>
        <Text>{params.page}</Text>
        <Button colorScheme="blue" isActive={data?.next === null} as={Link} href={`/${+params.page + 1}`}>Next</Button>
      </Flex>
    </Flex>
  );

}