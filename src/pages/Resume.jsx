import { Box, Heading, Text, VStack, HStack, Icon, List, Separator } from "@chakra-ui/react";
import { FaBook, FaBriefcase } from "react-icons/fa";
import { colors } from "../theme/colors";

function Resume() {
  const educationData = [
    {
      institution: "Izmir University of Economics",
      degree: "Bachelor's Degree in Software Engineering",
      years: "2022 — Present"
    }
  ];

  const experienceData = [
    {
      company: "Izmir University Of Economics",
      role: "Undergraduate Teaching Assistant",
      years: "Oct 2025 — Jan 2026",
      bullets: [
        "Mentored 50+ undergraduate students across four sections during laboratory sessions for Concepts of Programming Languages and Introduction to Programming courses.",
        "Guided students through complex debugging and hands-on coding exercises during weekly laboratory sessions."
      ]
    },
    {
      company: "ASELSAN",
      role: "Software Engineering Intern",
      years: "Aug 2025 — Sep 2025",
      bullets: [
        "Integrated Azure DevOps APIs into a React and Node.js application to automate QA test data retrieval.",
        "Built a template-based system to generate standardized QA reports programmatically."
      ]
    }
  ];

  return (
    <Box>
      {/* Education Section with connected timeline */}
      <Box position="relative" pl="10">
        {/* Vertical timeline line - connects heading to entries */}
        <Box
          position="absolute"
          left="12px"
          top="24px"
          bottom="0"
          width="2px"
          bg={colors.background}
        />

        {/* Education Heading */}
        <HStack align="center" mb="6" gap="3" position="relative">
          {/* Heading icon as timeline marker */}
          <Box
            position="absolute"
            left="-10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="24px"
            h="24px"
            borderRadius="md"
            bg={colors.background}
            color="white"
            zIndex="1"
          >
            <Icon as={FaBook} boxSize="3" color={colors.mainCard} />
          </Box>
          <Heading size="lg" color={colors.background} fontWeight="700">Education</Heading>
        </HStack>

        {/* Education Entries */}
        {educationData.map((edu, index) => (
          <HStack key={index} align="flex-start" gap="3" py="3" position="relative">
            {/* Timeline dot - centered on the line */}
            <Box
              position="absolute"
              left="-33px"
              w="12px"
              h="12px"
              borderRadius="full"
              bg={colors.background}
              top="18px"
              zIndex="1"
            />
            
            {/* Content */}
            <VStack align="flex-start" gap="1">
              <Text fontWeight="bold" fontSize="md" color={colors.primaryText}>
                {edu.institution}
              </Text>
              <Text fontSize="sm" color={colors.primaryText} opacity="0.8">
                {edu.degree}
              </Text>
              <Text fontSize="sm" color={colors.background} fontWeight="medium">
                {edu.years}
              </Text>
            </VStack>
          </HStack>
        ))}
      </Box>

      <Separator my="6" borderColor={colors.background} opacity="0.3" />

      <Box position="relative" pl="10" mt="8">
        {/* Vertical timeline line - connects heading to entries */}
        <Box
          position="absolute"
          left="12px"
          top="24px"
          bottom="0"
          width="2px"
          bg={colors.background}
        />

        {/* Experience Heading */}
        <HStack align="center" mb="6" gap="3" position="relative">
          {/* Heading icon as timeline marker */}
          <Box
            position="absolute"
            left="-10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="24px"
            h="24px"
            borderRadius="md"
            bg={colors.background}
            color="white"
            zIndex="1"
          >
            <Icon as={FaBriefcase} boxSize="3" color={colors.mainCard} />
          </Box>
          <Heading size="lg" color={colors.background} fontWeight="700">Experience</Heading>
        </HStack>

        {/* Experience Entries */}
        {experienceData.map((exp, index) => (
          <HStack key={index} align="flex-start" gap="3" py="3" position="relative">
            {/* Timeline dot - centered on the line */}
            <Box
              position="absolute"
              left="-33px"
              w="12px"
              h="12px"
              borderRadius="full"
              bg={colors.background}
              top="18px"
              zIndex="1"
            />
            
            {/* Content */}
            <VStack align="flex-start" gap="1" w="100%">
              <HStack justify="space-between" w="100%" flexWrap="wrap">
                <HStack gap="2">
                  <Text fontWeight="bold" fontSize="md" color={colors.primaryText}>
                    {exp.company}
                  </Text>
                  <Text fontSize="sm" color={colors.primaryText} opacity="0.8" fontStyle="italic">
                    - {exp.role}
                  </Text>
                </HStack>
                <Text fontSize="sm" color={colors.background} fontWeight="medium">
                  {exp.years}
                </Text>
              </HStack>
              <List.Root>
                {exp.bullets.map((bullet, i) => (
                  <List.Item key={i} fontSize="sm" color={colors.primaryText} _marker={{ color: colors.background }}>
                    <Text textAlign="left" lineHeight="1.7" fontWeight="400">{bullet}</Text>
                  </List.Item>
                ))}
              </List.Root>
            </VStack>
          </HStack>
        ))}
      </Box>
    </Box>
  );
}

export default Resume;
