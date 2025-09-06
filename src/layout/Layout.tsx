import NavbarComponent from "../components/Navbar/NavbarComponent";
import SidenavComponent from "../components/Sidenav/SidenavComponent";
import FooterComponent from "../components/Footer/FooterComponent";


function Layout( { children , isFooter = true }){
   return (
      <>
        <NavbarComponent />
        <div className="flex items-start pt-10">
          <SidenavComponent />
          <MainContent isFooter={isFooter}>{children}</MainContent>
        </div>
      </>
    );
  };

function MainContent( {children,isFooter}){
  return (
 <main className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
      {children}
      {isFooter && (<div className="mx-4 mt-4"> <FooterComponent /> </div> )}
    </main>
  );
};

export default Layout;