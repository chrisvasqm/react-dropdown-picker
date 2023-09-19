import { Select } from '@chakra-ui/react';

interface Props {
  items: string[];
  onSelected: (item: string) => void;
}

function Dropdown({ items, onSelected }: Props) {
  return (
    <Select placeholder='Select option' onChange={e => onSelected(e.target.value)}>
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
