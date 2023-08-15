import {
  Stack,
  Box,
  Flex,
  Button,
  Text,
  VStack,
  Tooltip,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaMeetup,
  FaGithub,
  FaGitlab,
} from 'react-icons/fa';

const IMAGE = '/blur.gif';

interface Props {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function HeroSection(props: Props) {
  const flexDirection: 'column' | 'row' = 'row';

  function settings() {
    if (props.children) {
      return {
        w: '100vw',
        align: 'center',
        spacing: 6,
      };
    }
    return {
      maxW: '2xl',
      align: 'flex-start',
      spacing: 6,
    };
  }

  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage={`url(${IMAGE})`}
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={{ base: 4, md: 8 }}
        // bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack {...settings()}>
          <Stack direction="row" spacing={4}>
            <Tooltip
              hasArrow
              label="Github - ryaneggz"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://github.com/ryaneggz"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaGithub size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>
            <Tooltip
              hasArrow
              label="Gitlab - kre8mymedia"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://gitlab.com/portfolio-apps"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaGitlab size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>
            <Tooltip
              hasArrow
              label="Plano Prompt Engineers Meetup"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://www.meetup.com/plano-prompt-engineers"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaMeetup size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>
            <Tooltip
              hasArrow
              label="LinkedIn - Prompt Engineers AI"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://www.linkedin.com/company/promptengineers-ai"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaLinkedin size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>

            <Tooltip
              hasArrow
              label="Instagram - @promptengineers.ai"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://www.instagram.com/promptengineers.ai"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaInstagram size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>
            <Tooltip
              hasArrow
              label="Youtube - @promptengineersai"
              bg="gray.300"
              color="black"
              placement="top"
            >
              {/* <Link
                href="https://www.youtube.com/@promptengineersai"
                target="_blank"
                rel="no-referrer"
              > */}
                <Box>
                  <FaYoutube size={30} />
                </Box>
              {/* </Link> */}
            </Tooltip>
          </Stack>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={{ base: '6xl' }}
          >
            {props.title}
          </Text>
          <Text
            color="gray.300"
            fontWeight={500}
            fontSize={{ base: 'xl', md: '2xl' }}
          >
            {props.subtitle}
          </Text>
          <Flex width="100%" align="start" direction={flexDirection}>
            {props.children ? (
              props.children
            ) : (
              <Stack direction="row" spacing={4}>
                <Link to="/chat">
                  <Button
                    bg="blue.400"
                    rounded="full"
                    color="white"
                    _hover={{ bg: 'blue.500' }}
                  >
                    Chat
                  </Button>
                </Link>
                <Link
                  to="https://calendly.com/adaptivebiz"
                  target="_blank"
                  rel="no-referrer"
                >
                  <Button
                    bg="whiteAlpha.300"
                    rounded="full"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.500' }}
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </Stack>
            )}
          </Flex>
        </Stack>
      </VStack>
    </Flex>
  );
}
