import { Container, Heading } from '@chakra-ui/react';
import Dropdown from './components/Dropdown';
import data from './data/fruits.json';

function App() {
  const fruits = data.map(fruit => fruit.name);

  return (
    <Container size={['md', 'sm']}>
      <Heading>Dropdown Picker App</Heading>

      <Dropdown items={fruits} />
    </Container>
  );
}

export default App;
