import { Box, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Image src="/images/financial-times-logo.png" alt="Financial Times Logo" boxSize="50px" />
        <Flex>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Markets</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaGlobe />
            <Text ml={2}>World</Text>
          </Link>
          <Link href="#" p={2} display="flex" alignItems="center">
            <FaCommentDots />
            <Text ml={2}>Opinion</Text>
          </Link>
        </Flex>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Top News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50">
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Market Index 1</Heading>
              <Text mt={2}>Value: 12345.67</Text>
              <Text mt={2} color="green.500">+1.23%</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Heading as="h3" size="md">Market Index 2</Heading>
              <Text mt={2}>Value: 76543.21</Text>
              <Text mt={2} color="red.500">-0.98%</Text>
            </Box>
          </VStack>

          <Heading as="h2" size="lg" mt={8} mb={4}>Trending Topics</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Text>Topic 1</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4}>
              <Text>Topic 2</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;