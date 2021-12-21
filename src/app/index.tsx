import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import Navbar from "./screens/Navbar";

const App: React.FC = () => {
  return (
    <Stack>
        <Box>< Navbar /></Box>
        <Container size="xl" alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Box>
          <Routes />
        </Box>
    </Container>
      </Stack>
  );
};

export default App;
