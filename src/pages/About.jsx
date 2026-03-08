import { Box, Heading, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { colors } from "../theme/colors";

function About() {
  return (
    <Box p="6">
      {/* About Title */}


      <Text fontSize="md" color={colors.primaryText} mb="8" lineHeight="1.8" textAlign="left">
        Hello! I'm Hüseyin Atacan Akgün, a High-Honor Senior Software Engineering student, experienced with building applications and testing and analyzing real data, including traffic incident data analysis using datasets provided by the Izmir Metropolitan Municipality. Passionate about learning new concepts and discussing them with others. Adaptable to new technologies and quick to apply them to create software solutions for real world problems.      </Text>

      {/* Skills Section */}
      <HStack align="start" gap="3" mb="6">

        <Heading fontSize="xl" color={colors.primaryText} fontWeight="700">Skills</Heading>
      </HStack>

      <VStack align="start" gap="4" maxW="600px">
        {/* Programming */}
        <HStack align="start" gap="6" w="100%">
          <Text color={colors.background} fontSize="sm" fontWeight="600" minW="90px" pt="1">Programming</Text>
          <HStack wrap="wrap" gap="2" flex="1">
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Java</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Python</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">JavaScript</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">SQL</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Dart</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">C#</Badge>
          </HStack>
        </HStack>

        {/* Frameworks */}
        <HStack align="start" gap="6" w="100%">
          <Text color={colors.background} fontSize="sm" fontWeight="600" minW="90px" pt="1">Frameworks</Text>
          <HStack wrap="wrap" gap="2" flex="1">
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Flutter</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">React.js</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Node.js</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">JUnit</Badge>
          </HStack>
        </HStack>



        {/* Concepts */}
        <HStack align="start" gap="6" w="100%">
          <Text color={colors.background} fontSize="sm" fontWeight="600" minW="90px" pt="1">Concepts</Text>
          <HStack wrap="wrap" gap="2" flex="1">
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">OOP</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">SOLID Principles</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Agile/Scrum</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Design Patterns</Badge>
          </HStack>
        </HStack>

        {/* Languages */}
        <HStack align="start" gap="6" w="100%">
          <Text color={colors.background} fontSize="sm" fontWeight="600" minW="90px" pt="1">Languages</Text>
          <HStack wrap="wrap" gap="2" flex="1">
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">English (Professional)</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">Turkish (Native)</Badge>
            <Badge bg={colors.background} color={colors.mainCard} px="3" py="1" borderRadius="md">German (A2)</Badge>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export default About;
