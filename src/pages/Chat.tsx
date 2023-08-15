import '../App.css';
import { Flex } from '@chakra-ui/react';
import HeroSection from '../sections/HeroSection';

export default function Chat() {
	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="center"
			minHeight="80vh"
			gap={2}
			mb={8}
			w="full"
	>
		<HeroSection>
      <h3>Hello World</h3>
    </HeroSection>
	</Flex>
	);
}