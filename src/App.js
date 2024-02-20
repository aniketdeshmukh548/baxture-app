import {Flex, MantineProvider, Text } from "@mantine/core";
import InfoCard from "./Components/InfoCard";
import '@mantine/core/styles.css'

function App() {
  return (
    <MantineProvider>
      <Text>Baxture Assignment</Text>
      <Flex direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }} wrap="wrap" pl={90}>
      <InfoCard />
      </Flex>
    </MantineProvider>
  );
}

export default App;
