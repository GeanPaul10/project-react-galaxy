import {Navbar,NavbarBrand } from "flowbite-react";

function NavbarComponent(){
  return (
    <Navbar fluid >
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavbarBrand href="/">
              <img alt="" src="/images/image.png" className="mr-3 h-6 sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                HelpDesk App
              </span>
            </NavbarBrand>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
export default NavbarComponent;
