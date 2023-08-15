import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      position="absolute"
      bottom={0}
    >
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link href="https://adaptive.biz" isExternal rel="noopener noreferrer">
          Prompt Engineers AI
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
