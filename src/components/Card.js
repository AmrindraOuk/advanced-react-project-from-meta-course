import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box
      maxW="m"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Heading as="h3" size="xl" color="black">
            {title}
          </Heading>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          pt={4}
          pb={4}
        >
          <Text color="gray">{description}</Text>
        </Box>

        <Box color="black">
          See more
          <Box as="span" color="gray.600" fontSize="sm" ml={2}>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
