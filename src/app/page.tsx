import {
    Button,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
    return <Flex
        w={'100vw'}
        h={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={"column"}
    >
        <Heading>Welcome to Poke-next</Heading>
        <Text>Please select a rendering method to start</Text>
        <Flex justifyContent={'center'} alignItems={'center'} gap={5}>
            <Button as={Link} href={'/server'} colorScheme={"blue"}>Server</Button>
            <Button as={Link} href={'/client'} colorScheme={"green"}>Client</Button>
        </Flex>
    </Flex>;
}
