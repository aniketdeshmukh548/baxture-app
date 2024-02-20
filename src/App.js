import {MantineProvider, Text } from "@mantine/core";
import InfoCard from "./Components/InfoCard";
import '@mantine/core/styles.css'

function App() {
  return (
    <MantineProvider>
      <Text>Welcome</Text>
      <InfoCard />
      <InfoCard />
    </MantineProvider>
  );
}

export default App;
