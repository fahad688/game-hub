import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiCog } from "react-icons/hi";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <HiCog />
          Order by Relevance
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content className="bg-white shadow rounded p-2 min-w-[180px]">
            <Menu.Item
              value="relevance"
              className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              Relevance
            </Menu.Item>
            <Menu.Item
              value="date"
              className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              Date Added
            </Menu.Item>
            <Menu.Item
              value="name"
              className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              Name
            </Menu.Item>
            <Menu.Item
              value="popularity"
              className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              Popularity
            </Menu.Item>
            <Menu.Item
              value="rating"
              className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100"
            >
              Average Rating
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
