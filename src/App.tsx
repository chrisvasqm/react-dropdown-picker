import { Button, Container, HStack, Heading, Stack } from '@chakra-ui/react';
import Dropdown from './components/Dropdown';
import data from './data/fruits.json';
import { useState } from 'react';

function App() {
  const fruits = data.map(fruit => fruit.name);
  const [shoppingCart, setShoppingCart] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState('');

  function handleSelected(item: string) {
    setSelectedItem(item);
  }

  function handleAdd() {
    setShoppingCart([...shoppingCart, selectedItem]);
  }

  return (
    <Container size={['md', 'sm']} padding={2}>
      <Stack spacing={2}>
        <Heading>Dropdown Picker App</Heading>

        <Heading fontSize={'2xl'}>Items: {shoppingCart.length}</Heading>

        <HStack spacing={2}>
          <Dropdown items={fruits} onSelected={handleSelected} />
          <Button colorScheme='blue' onClick={handleAdd}>
            Add
          </Button>
        </HStack>

        <ol>{shoppingCart && shoppingCart.map(item => <li>{item}</li>)}</ol>
      </Stack>
    </Container>
  );
}

export default App;
