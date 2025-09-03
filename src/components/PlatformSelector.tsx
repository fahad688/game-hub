// src/components/PlatformSelector.tsx
import usePlatform, { Platform } from "@/hooks/usePlatform";
import { Button, Menu, Portal, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { HiCog } from "react-icons/hi";

interface Props {
  onSelectPlatform: (Platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data: platforms, loading, error } = usePlatform();
  const [selected, setSelected] = useState<string>("");

  //if (loading) return <Spinner />;
  if (error) return null;

  return (
    <Menu.Root onSelect={(details) => setSelected(details.value)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <HiCog />
          {selected
            ? platforms.find((p) => p.slug === selected)?.name
            : "Platforms"}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content className="bg-white shadow rounded p-2">
            {platforms.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onSelectPlatform(platform)}
                className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
