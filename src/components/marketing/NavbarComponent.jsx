import { Navbar } from "flowbite-react";
import PrimaryButton from "./ButtonPrimary";


export function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Marketing</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <PrimaryButton text="Get Started"/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Home</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">About</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Service</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Blog</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
