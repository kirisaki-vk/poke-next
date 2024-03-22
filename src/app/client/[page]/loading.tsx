import { Flex, Heading } from '@chakra-ui/react';

export default function PokemonLoading() {
    return <Flex w={'100vw'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Heading>Loading...</Heading>
    </Flex>;
}