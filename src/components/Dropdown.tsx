import { Select } from '@chakra-ui/react';

interface Props {
  items: string[];
}
function Dropdown({ items }: Props) {
  return (
    <Select placeholder='Select option'>
      {items &&
        items.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </Select>
  );
}

export default Dropdown;
