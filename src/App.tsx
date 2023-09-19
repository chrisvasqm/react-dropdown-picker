import { Button, Container, HStack, Heading, Stack } from '@chakra-ui/react';
import Dropdown from './components/Dropdown';
import data from './data/fruits.json';

function App() {
  const fruits = data.map(fruit => fruit.name);

  return (
    <Container size={['md', 'sm']} padding={2}>
      <Stack spacing={2}>
        <Heading>Dropdown Picker App</Heading>

        <HStack spacing={2}>
          <Dropdown items={fruits} />
          <Button colorScheme='blue'>Add</Button>
        </HStack>
      </Stack>
    </Container>
  );
}

export default App;
