import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiCog } from "react-icons/hi";

const sortOptions = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average Rating", value: "-rating" },
];

interface Props {
  onSelectSortOrder: (sortOption: string) => void;
  selectedSortOder: string | null;
}

const SortSelector = ({ onSelectSortOrder,selectedSortOder }: Props) => {
  // Find the label of the currently selected sort option
  const currentLabel =
    sortOptions.find((option) => option.value === selectedSortOder)?.label ||
    "Relevance";
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <HiCog />
          Order by {currentLabel}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content className="bg-white shadow rounded p-2 min-w-[180px]">
            {sortOptions.map((option) => (
              <Menu.Item
                key={option.value}
                value={option.value}
                onClick={() => onSelectSortOrder(option.value)}
                className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
