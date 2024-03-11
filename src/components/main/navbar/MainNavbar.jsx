
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
  } from "@nextui-org/react";
const MainNavbar = () => {
    const menuItems = [
        "Home",
        "Services",
        "Tour packages",
        "Blog",
        "About Us",
        "Contact",
      ];
    return (
        <div>
            <Navbar disableAnimation isBordered>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <img
              src="https://i.ibb.co/GCr9mQd/Picsart-24-02-05-15-20-00-425.png"
              alt="main_logo"
              className="w-14"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <img
              src="https://i.ibb.co/GCr9mQd/Picsart-24-02-05-15-20-00-425.png"
              alt="main_logo"
              className="w-14"
            />
          </NavbarBrand>
          <NavbarItem justify="center" className="ms-14 font-medium">
            <Link isActive href="#" color="warning">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className="font-medium">
            <Link href="#" aria-current="page" color="foreground">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem className="font-medium">
            <Link color="foreground" href="#">
              Tour Packages
            </Link>
          </NavbarItem>
          <NavbarItem className="font-medium">
            <Link color="foreground" href="#">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem className="font-medium">
            <Link color="foreground" href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem className="font-medium">
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              color="warning"
              className="ps-0 pe-3"
              variant="shadow"
              startContent={
                <svg
                className="ps-0 pe-0"
                  width="64px"
                  height="64px"
                  viewBox="-10.56 -10.56 45.12 45.12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.336"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
                      stroke="#000000"
                      strokeWidth="1.848"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              }
            >
              <a href="tel:01733977556">CLICK TO CALL</a>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 0
                    ? "warning"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
        </div>
    );
};

export default MainNavbar;