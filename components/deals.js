import {
	Box,
	Button,
	ListItem,
	SimpleGrid,
	Text,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import React from 'react';

function Deals() {
	return (
		<Box>
			<Text
				fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl' }}
				textAlign={'center'}
				fontWeight={'bold'}
			>
				Deals
			</Text>
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
				m={'0 auto'}
				maxW={'6xl'}
				spacing={{ base: 4, sm: 4, md: 6, lg: 6, xl: 0 }}
			>
				<VStack mt={{ base: 6, sm: 8, md: 12, lg: 14, xl: 16 }}>
					<Text
						fontWeight={'bold'}
						fontSize={{ base: 'lg', sm: 'xl', md: '2xl', lg: '2xl', xl: '3xl' }}
					>
						PREMIUM PROGRAM
					</Text>
					<Box>
						<Text
							fontWeight={'medium'}
							fontSize={{ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl', xl: '2xl' }}
						>
							Starting at $130 /mo
						</Text>
						<UnorderedList
							fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl' }}
						>
							<ListItem>Webinars</ListItem>
							<ListItem>Daily Trading Signals</ListItem>
							<ListItem>Tips</ListItem>
							<ListItem>Analysis</ListItem>
							<ListItem>Chat with Our Team</ListItem>
							<ListItem>Start a Demo Account</ListItem>
							<ListItem>Lifetime Mentorship</ListItem>
						</UnorderedList>
					</Box>
					<Box>
						<cardElement />
						<Button colorScheme={'blue'}>
							{' '}
							<a
								href='https://t.me/Geniussignalbot'
								target={'_blank'}
								rel='noreferrer'
							>
								Buy Now
							</a>
						</Button>
					</Box>
				</VStack>
			</SimpleGrid>
		</Box>
	);
}

export default Deals;
