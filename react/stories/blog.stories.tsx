import React from "react";

import { storiesOf } from "@storybook/react";
import { Flexbox, Dropdown, Button, useDropdown, DropdownHeader, DropdownItem, DropdownDivider } from "../src";

function NavbarLink({ children }: { children: React.ReactNode }) {
  return (
    <Flexbox alignItems="center" justifyContent="center" >
      {children}
    </Flexbox>
  );
}

function LanguageSwitcher() {
  const { toggle, open } = useDropdown(false);

  return (
    <Dropdown trigger={
      <Button variant="primary" onClick={toggle}>Dropdown here</Button>
    } open={open} menuAlignment="right">
      <DropdownHeader>Header</DropdownHeader>
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem active={true}>Item 2</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
  );
}

function Navbar() {

  return (
    <Flexbox justifyContent="space-between">
      <Flexbox>
        <h3>Logo</h3>
      </Flexbox>
      <Flexbox maxWidth="300px" alignItems="center">
        <NavbarLink>
          Link 1
      </NavbarLink>
        <NavbarLink>
          Link 2
      </NavbarLink>
        <NavbarLink>
          Link 3
      </NavbarLink>
        <LanguageSwitcher />
      </Flexbox>
    </Flexbox>
  );
}

storiesOf("Blog example", module)
  .add("Article List Page", () => {
    return (
      <div>
        <Navbar />
      </div>
    )
  });
