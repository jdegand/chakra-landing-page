import { Flex } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

export default function Landing(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Hero
        title="Adapted Chakra Landing Page Tutorial"
        subtitle="Used Create-React-App Chakra Template"
        image="https://loremflickr.com/800/600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
      <Footer />
    </Flex>
  )
}
