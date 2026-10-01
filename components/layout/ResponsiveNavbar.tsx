import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function ResponsiveNavbar() {
    return (
        <>
            <div className="hidden lg:block">
                <Navbar />
            </div>

            <div className="lg:hidden block">
                <MobileNavbar />
            </div>
        </>
    )
}