import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";

import { SearchIcon } from "../assets/searchIcon";

export default function SearchInput() {
    return (
        <Input
          classNames={{
            base: "max-w-full md:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-base sm:text-small placeholder:text-base sm:placeholder:text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Buscar por marca, modelo..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
    );
}