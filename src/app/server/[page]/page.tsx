import { pokedex } from '@/fetcher/pokedex';
import { Button, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import PokemonCard from '../../components/pokemonCard';
import Link from 'next/link';

const getAll = (limit: number, offset: number) => pokedex.getPokemonsList({ limit, offset });

export default async function PokemonDetails({ params }: {
    params: {
        page: number
    }
}) {
    const data = await getAll(50, 50 * (params.page - 1));

    return (
        <Flex
            w={'100vw'}
            h={'100vh'}
            flexDir={'column'}
            alignItems={'center'}
            overflow={'auto'}
        >
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} h={'150px'}
                  bgColor={'rgba(255, 255, 255, 0.7)'}>
                <Heading>Poke-next</Heading>
                <Text>Click on a pokemon to details</Text>
            </Flex>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} w={'100%'} h={'100%'} p={6} overflow={'auto'}>
                {data?.results.map((result) => (
                    <GridItem w={'100%'} key={result.name}>
                        <PokemonCard renderType={'server'} id={result.name} />
                    </GridItem>
                ))}
            </Grid>
            <Flex w={'100%'} justifyContent={'space-between'} px={10} my={4} alignItems={'center'}>
                <Button colorScheme="blue" isActive={data?.previous === null} as={Link}
                        href={`/server/${params.page - 1}`}>Previous</Button>
                <Text fontWeight={'bold'}>{params.page}</Text>
                <Button colorScheme="blue" isActive={data?.next === null} as={Link}
                        href={`/server/${+params.page + 1}`}>Next</Button>
            </Flex>
        </Flex>
    );

}