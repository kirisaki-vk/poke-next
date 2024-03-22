"use client"
import { PokemonType, capitalize, pokemonTypeColors } from "@/app/components/utils";
import { pokedex } from "@/fetcher/pokedex";
import { Card, CardBody, Flex, Grid, GridItem, Heading, Image, Skeleton, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Tag, Text } from "@chakra-ui/react";
import useSWR from "swr";

type PokemonDetailsProps = {
    params: {
        name: string;
    }
}
export default function PokemonDetails(props: PokemonDetailsProps) {
    const { data, isLoading, error } = useSWR("get" + props.params.name, (_) => pokedex.getPokemonByName(props.params.name))
    return <Flex h={"100vh"} w={"100vw"} justifyContent={"center"} alignItems={"center"} position={"relative"}>
        <Heading position={"fixed"} top={40} left={"20%"} color={"gray"} fontSize={300}>{`#${data?.id}`}</Heading>

        <Card direction={{ base: 'column', sm: 'row' }} alignItems={"center"} w={"40%"} maxW={700} minW={300} p={5} boxShadow={"dark-lg"} gap={5} bgColor={"transparent"} backdropFilter={"blur(10px)"}>
            <Image alt={props.params.name} src={data?.sprites.other.dream_world.front_default || undefined} width={200} height={200} />
            <CardBody>
                <Flex direction={"column"} gap={5} >
                    <Heading>{capitalize(data?.name)}</Heading>
                    <StatGroup>
                        <Stat>
                            <StatLabel>Type</StatLabel>
                            <StatNumber as={Flex} direction={"row"} gap={2}>
                                {data?.types.map((res) => (
                                    <Tag key={res.type.name} textColor={"white"} backgroundColor={pokemonTypeColors[res.type.name as PokemonType]}>
                                        {capitalize(res.type.name)}
                                    </Tag>
                                ))}
                            </StatNumber>
                        </Stat>
                        <Stat>
                            <StatLabel>Weight</StatLabel>
                            <StatNumber>{data?.weight}</StatNumber>
                        </Stat>

                        <Stat>
                            <StatLabel>Height</StatLabel>
                            <StatNumber>{data?.height}</StatNumber>
                        </Stat>
                    </StatGroup>
                </Flex>
            </CardBody>
        </Card>
    </Flex>
}