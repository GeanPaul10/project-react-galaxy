import { Footer, FooterLinkGroup, FooterLink } from "flowbite-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
function FooterComponent() {
  return (
    <>
      <Footer container>
        <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:justify-center items-center lg:gap-y-0">
          <FooterLinkGroup>
            <div className="flex gap-x-1 justify-center items-center w-full">
              <FooterLink target="_blank"
                href="https://github.com/GeanPaul10"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                <FaGithub className="text-lg" />
              </FooterLink>
              <FooterLink target="_blank"
                href="https://www.linkedin.com/in/gean-paul-ar%C3%A1mbulo-aquijes-11a31119a/"
                className="hover:[&>*]:text-black dark:hover:[&>*]:text-gray-300"
              >
                <FaLinkedin className="text-lg"/>
              </FooterLink>
            </div>
          </FooterLinkGroup>
        </div>
      </Footer>
      <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
        Hecho con ❤️  &copy; 2025 All rights reserved.
      </p>
    </>
  );
}
export default FooterComponent;