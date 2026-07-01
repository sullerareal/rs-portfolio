import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../Assets/Css/Layout.css";

function Layout({ title, children }) {
    return (
        <header className="App-header">

            <Sidebar />

            <div className="container2">

                <div className="title1">
                    <h1 className="title">{title}</h1>
                    <Navbar />
                </div>

                <div className="content">
                    {children}
                </div>

            </div>

        </header>
    );
}

export default Layout;