import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function ErrorComponent() {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
        <Image alt="pika-sad" src={"/sad_pika.png"} width={120} height={120}/>
      <Heading>Uh Oh! Pikachu made a mess again</Heading>
      <Text>We can&apost process your request for now</Text>
    </Flex>
  );
}
