"use client";
import { pokedex } from "@/fetcher/pokedex";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import PokemonCard from "./components/pokemonCard";
import ErrorComponent from "./components/errorComponent";

export default function Home() {
  }
