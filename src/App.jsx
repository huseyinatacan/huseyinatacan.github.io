import './App.css'
import './index.css';
import { Box, Heading, Text, Button, Image, IconButton, HStack, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import profileImg from "./assets/profile_picture.jpeg";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { colors } from "./theme/colors";

function App() {
  const name = "Hüseyin Atacan Akgün";
  const field = "Software Engineer";
  const phone = "+90 555 142 29 12";
  const email = "huseyinatacana@gmail.com";
  const github = "huseyinatacan";
  const linkedin = "Hüseyin Atacan Akgün";
  const location = useLocation();

  return (

    <Box p="8" background={colors.background} minH="100vh" display="flex" justifyContent="center" width="100%"> 
      <Box display="flex" maxW="1200px" width="100%">
      <Box p="8" background={colors.sidebar} borderRadius="lg" textAlign="center" boxShadow="xl" border="1px solid" borderColor="blackAlpha.100">
        <Image 
          src={profileImg} 
          alt="Profile" 
          borderRadius="full"
          boxSize="180px"
          objectFit="cover"
          mx="auto"
          mb="4"
          boxShadow="lg"
          border={`3px solid ${colors.accent}`}
        />
        <Heading color={colors.primaryText}>{name}</Heading>
        <Text fontSize="lg" color={colors.primaryText} mt="2" fontWeight="medium">{field}</Text>
        
        
        
        <VStack justify="center" mt="4" gap="3" align="stretch">
          
          <Button as="a" href={`tel:${phone}`} justifyContent="left" bg={colors.background} color={colors.mainCard} _hover={{ bg: colors.accentHover, color: colors.primaryText }}>
              <FaPhone />{phone}
          </Button>
          <Button as="a" href={`mailto:${email}`} justifyContent="left" bg={colors.background} color={colors.mainCard} _hover={{ bg: colors.accentHover, color: colors.primaryText }}>
              <FaEnvelope />{email}
          </Button>
          <Button as="a" href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" justifyContent="left" bg={colors.background} color={colors.mainCard} _hover={{ bg: colors.accentHover, color: colors.primaryText }}>
              <FaGithub />{github}
          </Button>
          <Button as="a" href={`https://www.linkedin.com/in/h%C3%BCseyin-atacan-akg%C3%BCn-55a13128a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLfVs2CBuSbeyC9IzvVVetQ%3D%3D`} target="_blank" rel="noopener noreferrer" justifyContent="left" bg={colors.background} color={colors.mainCard} _hover={{ bg: colors.accentHover, color: colors.primaryText }}>
              <FaLinkedin />{linkedin}
          </Button>
        </VStack>
      </Box>
      <Box flex="1" ml="8" p="8" background={colors.mainCard} borderRadius="lg" boxShadow="lg">
        
        <HStack alignItems="center" mb="6" justifyContent="space-between">
          <Heading color={colors.primaryText} size="2xl" fontWeight="800">
            {location.pathname === "/" || location.pathname === "/about" ? "About Me" : 
             location.pathname === "/resume" ? "Resume" : "Portfolio"}
          </Heading>
          <HStack gap="6" fontSize="sm" fontWeight="500">
            <Text 
              as={Link} 
              to="/" 
              color={location.pathname === "/" || location.pathname === "/about" ? colors.accent : colors.primaryText}
              fontWeight={location.pathname === "/" || location.pathname === "/about" ? "600" : "500"}
              opacity={location.pathname === "/" || location.pathname === "/about" ? 1 : 0.7}
              _hover={{ opacity: 1, color: colors.accentHover }}
              textDecoration="none"
              borderBottom={location.pathname === "/" || location.pathname === "/about" ? `2px solid ${colors.accent}` : "none"}
              pb="1"
              transition="all 0.2s"
            >
              About
            </Text>
            <Text 
              as={Link} 
              to="/resume"
              color={location.pathname === "/resume" ? colors.accent : colors.primaryText}
              fontWeight={location.pathname === "/resume" ? "600" : "500"}
              opacity={location.pathname === "/resume" ? 1 : 0.7}
              _hover={{ opacity: 1, color: colors.accentHover }}
              textDecoration="none"
              borderBottom={location.pathname === "/resume" ? `2px solid ${colors.accent}` : "none"}
              pb="1"
              transition="all 0.2s"
            >
              Resume
            </Text>
            <Text 
              as={Link} 
              to="/portfolio"
              color={location.pathname === "/portfolio" ? colors.accent : colors.primaryText}
              fontWeight={location.pathname === "/portfolio" ? "600" : "500"}
              opacity={location.pathname === "/portfolio" ? 1 : 0.7}
              _hover={{ opacity: 1, color: colors.accentHover }}
              textDecoration="none"
              borderBottom={location.pathname === "/portfolio" ? `2px solid ${colors.accent}` : "none"}
              pb="1"
              transition="all 0.2s"
            >
              Portfolio
            </Text>
          </HStack>
        </HStack>
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Box>
      </Box>
    </Box>
  );
}

export default App
