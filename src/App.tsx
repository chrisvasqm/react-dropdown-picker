import { Container, Heading } from '@chakra-ui/react';
import Dropdown from './components/Dropdown';

function App() {
  const fruits = ['Apple', 'Orange', 'Banana'];
  return (
    <Container size={['md', 'sm']}>
      <Heading>Dropdown Picker App</Heading>

      <Dropdown items={fruits} />
    </Container>
  );
}

export default App;
