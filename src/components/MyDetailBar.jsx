import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
} from "@nextui-org/react";

import SearchInput from "./SearchInput";

function ArrowDownIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#d4d4d8"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
    </svg>
  );
}

export default function MyDetailBar({ shouldHideOnScroll = true}) {

  return (
    <Navbar shouldHideOnScroll={shouldHideOnScroll} className="z-999 shadow-sm bg-slate-50" maxWidth="xl">
      {/* Toggle button for small screens */}
      <NavbarContent>
        <SearchInput />
      </NavbarContent>
      {/* Menu items for large screens */}
      {/* -------------------------------------------------------------------- */}
      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<ArrowDownIcon />}>Ubicación</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="tpc">Tepic</DropdownItem>
              <DropdownItem key="gdl">Guadalajara</DropdownItem>
              <DropdownItem key="cmx">Ciudad de México</DropdownItem>
              <DropdownItem key="mty">Monterrey</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<ArrowDownIcon />}>Marca</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="audi">Audi</DropdownItem>
              <DropdownItem key="mazda">Mazda</DropdownItem>
              <DropdownItem key="nissan">Nissan</DropdownItem>
              <DropdownItem key="vw">Volkswagen</DropdownItem>
              <DropdownItem key="vw">Jeep</DropdownItem>
              <DropdownItem key="delete" className="text-primary" color="primary">
                Ver todos...
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" endContent={<ArrowDownIcon />}>Tipo</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="audi">Hatchback</DropdownItem>
              <DropdownItem key="mazda">SUV</DropdownItem>
              <DropdownItem key="nissan">Sedán</DropdownItem>
              <DropdownItem key="vw">Coupé</DropdownItem>
              <DropdownItem key="vw">Pickup</DropdownItem>
              <DropdownItem key="vw">Minivan</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      {/* -------------------------------------------------------------------- */}
      {/* Menu items for small screens */}
    </Navbar>
  );
}
