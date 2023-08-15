import '../App.css';
import { Flex } from '@chakra-ui/react';
import HeroSection from '../sections/HeroSection';

export default function Login() {
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
		<HeroSection
			title="Bridging Dreams with Digital Minds"
			subtitle="Crafting digital solutions that harness the power of AI automation for a smarter, seamless future."
		/>
	</Flex>
	);
}