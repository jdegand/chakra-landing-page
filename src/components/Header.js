import { Link } from "react-router-dom"
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from "./Logo";

const MenuItem = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  )
}

const Header = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">
       <Logo height={44} />
      </Flex>

      <Box
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing">Pricing </MenuItem>
          <MenuItem to="/signup">
            <Button
              size="sm"
              rounded="md"
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
            >
              Create Account
            </Button>
          </MenuItem>
          <MenuItem><ColorModeSwitcher  /></MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header