import { Box, Heading, Text, SimpleGrid, Image, VStack, Link, Badge, HStack } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { colors } from "../theme/colors";

function Portfolio() {
  const projects = [
    {
      title: "Traffic Accident Data Analysis",
      description: "Conducted data cleaning, feature engineering, and exploratory data analysis on a traffic accident dataset with 20k+ rows. Applied machine learning techniques including classification, clustering, association rule mining, and regression models to analyze accident severity patterns and to predict accident counts based on temporal features.",
      tags: ["Python", "Pandas", "Scikit-learn"],
      github: null,
      live: null
    },
    {
      title: "Cookify",
      description: "Developed a cross-platform Flutter social recipe app with Firebase backend and real-time updates. Integrated ingredient-based search, user profiles, and social features (comments, likes, sharing) across mobile devices.",
      tags: ["Flutter", "Firebase"],
      github: null,
      live: "https://youtu.be/Oz0Zk6smT94?si=DNA91jiekb5Jf49o"
    },
    {
      title: "Campus Facility Booking and Maintenance Tracker",
      description: "Developed a full-stack ASP.NET Core system for 14 campus facilities with role-based access, reservation management, and maintenance tracking using RESTful APIs and SQLite.",
      tags: ["C#", "ASP.NET Core"],
      github: null,
      live: "https://youtu.be/MLjoOIJSDxI?si=8zAgTqjiH0Qa6jZK"
    },
    {
      title: "Image Restoration Under Combined Noise and Blur",
      description: "Developed a multi-stage image restoration pipeline to remove mixed noise and blur using Lazy Alpha-Trimmed Mean, Adaptive Median, and Non-Local Means filters, combined with Sobel, Laplacian, and Unsharp Masking for detail enhancement. Achieved significant improvements in PSNR, SSIM, and MSE, demonstrating effective recovery of degraded grayscale images.",
      tags: ["MATLAB"],
      github: null,
      live: "https://youtu.be/grdmId4d99g?si=orkwGmoHuqb9USwK"
    },
    {
      title: "Inventory Management System",
      description: "Developed a robust desktop application for stock and order tracking with multi-currency support. Implemented comprehensive unit testing with JUnit to ensure system reliability and data integrity.",
      tags: ["Java", "SQLite", "JUnit"],
      github: null,
      live: "https://youtu.be/vc7VVCp_5As?si=69ZtN0Zahdp9_xm_"
    },
    {
      title: "Hotel Information Scraper",
      description: "Created an automated data extraction tool to scrape real-time pricing data from Booking.com. Integrated a custom Graphical User Interface (GUI) to allow users to filter results dynamically.",
      tags: ["Python", "Tkinter"],
      github: null,
      live: "https://youtu.be/md9445zUtEE?si=YkPfn7ML6OnbjNQt"
    },
    
  ];

  return (
    <Box>
      <Heading mb="6" color={colors.primaryText}></Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
        {projects.map((project, index) => (
          <Box 
            key={index} 
            p="6" 
            bg={colors.background} 
            borderRadius="lg" 
            border="1px solid" 
            borderColor={colors.sidebar}
            _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
            transition="all 0.2s"
            display="flex"
            flexDirection="column"
          >
            <VStack align="stretch" gap="3" flex="1" justifyContent="space-between">
              <Box>
                <Heading size="md" color={colors.mainCard} fontWeight="700" mb="2">{project.title}</Heading>
                <Text color={colors.mainCard} fontSize="sm" lineHeight="1.7" fontWeight="400" textAlign="left">{project.description}</Text>
              </Box>
              <Box>
                <HStack wrap="wrap" gap="2" mb="3">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} bg={colors.sidebar} color={colors.primaryText} px="2" py="1" >{tag}</Badge>
                  ))}
                </HStack>
                <HStack gap="4" mt="auto">
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" color={colors.mainCard} _hover={{ color: colors.accent }}>
                      <HStack>
                        <FaGithub />
                        <Text fontSize="sm">Code</Text>
                      </HStack>
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" color={colors.accent} _hover={{ color: colors.accentHover }}>
                      <HStack>
                        <FaYoutube />
                        <Text fontSize="sm">View Demo</Text>
                      </HStack>
                    </Link>
                  )}
                </HStack>
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Portfolio;
