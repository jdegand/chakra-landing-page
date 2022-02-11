import {
    Flex,
    Text,
  } from '@chakra-ui/react';
  import Logo from './Logo';
  
  export default function Footer() {
    return (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={0}
          p={0}
          bg={["primary.500", "primary.500", "transparent", "transparent"]}
        >
          <Logo />
          <Text>© 2022 logoipsum. All Rights Reserved.</Text>
      </Flex>
    );
  }