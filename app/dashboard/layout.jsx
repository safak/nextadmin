import NavBar from "../ui/dashboard/navbar/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({children}) => {
    return(
        <div>
            <div>
                <SideBar/>
            </div>
            <div>
                <NavBar/>
                {children}
            </div>
        </div>
    )

}

export default Layout