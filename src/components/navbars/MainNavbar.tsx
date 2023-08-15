import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded="md"
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href="#"
//   >
//     {children}
//   </Link>
// );

export default function MainNavbar() {

  return (
    <Box
      // bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      pos="fixed"
      width="100%"
      zIndex={1}
    >
      <Flex h={10} alignItems="center" justifyContent="space-between">
        <Box>Prompt Engineers AI - Chrome Extension</Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={3}>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify="flex-end"
              direction="row"
              spacing={3}
            >
                {/* <Button
                  mt={1}\plano-prompt-engineers\
                  as="a"
                  fontSize="sm"
                  fontWeight={400}
                  variant="link"
                  onClick={() => signIn()}
                >
                  Sign In
                </Button> */}
                {/* <Button
                  as="a"
                  // display={{ base: 'none', md: 'inline-flex' }}
                  fontSize="sm"
                  fontWeight={600}
                  color="white"
                  mt={1}
                  size="sm"
                  bg="teal.400"
                  href="#"
                  _hover={{
                    bg: 'teal.300',
                  }}
                >
                  Sign Up
                </Button> */}
                {/* <Button onClick={toggleColorMode} size="sm" mt={1}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button> */}
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
