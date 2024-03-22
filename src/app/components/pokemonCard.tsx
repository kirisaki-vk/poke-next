"use client";
import { pokedex } from "@/fetcher/pokedex";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Skeleton,
  Tag,
  Text,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import useSWR from "swr";
import { PokemonType, capitalize, pokemonTypeColors } from "./utils";
import Link from "next/link";

export type PokemonCardProps = {
  id: string | number;
};

export default function PokemonCard(props: PokemonCardProps) {
  const { data, isLoading, error } = useSWR("get" + props.id, (_) =>
    pokedex.getPokemonByName(props.id)
  );
  const [d, { on, off }] = useBoolean();
  const {isOpen, onClose, onOpen} = useDisclosure();
  return (<>
    <Card
      variant={"outline"}
      transition={"0.7s"}
      _hover={{
        boxShadow: "dark-lg",
        scale: 2,
        bgColor: "gray.100",
        cursor: "pointer",
      }}
      position={"relative"}
      onMouseEnter={() => on()}
      onMouseLeave={() => off()}
      onClick={onOpen}
      as={Link}
      href={`/details/${props.id}`}
    >
      <CardBody>
        <Flex gap={5}>
          <Skeleton isLoaded={isLoading || data?.sprites.front_default !== null}>
            <Image
              h={"100px"}
              w={"100px"}
              borderRadius={"lg"}
              alt={""}
              src={data?.sprites.other.showdown.front_default || undefined}
            />
          </Skeleton>
          <Flex direction={"column"}>
            <Heading size={"md"}>{capitalize(data?.name)}</Heading>
            <Flex direction={"row"} h={"fit-content"} gap={2}>
              {data?.types.map((res) => (
                <Tag key={res.type.name} textColor={"white"} backgroundColor={pokemonTypeColors[res.type.name as PokemonType]}>
                  {capitalize(res.type.name)}
                </Tag>
              ))}
            </Flex>
          </Flex>
          {d ? (
            <Text position={"absolute"} bottom={2} right={5} color={"gray.500"}>
              Click to see details
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </CardBody>
    </Card>
  </>
  );
}
