import React, {useState} from 'react';
import Toolbar from "../components/header/toolbar/Toolbar";
import SideDrawer from "../components/header/side-drawer/SideDrawer";
import './Layout.scss';

const Layout = (props) => {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleShowDrawer = () => {
        setShowDrawer(true);
    };

    const handleHideDrawer = () => {
        setShowDrawer(false);
    };

    return (
        <>
            <Toolbar showDrawer={handleShowDrawer}/>
            <SideDrawer hideDrawer={handleHideDrawer} isOpen={showDrawer}/>
            <main className="content">
                {props.children}
            </main>
        </>
    );
};

export default Layout;
