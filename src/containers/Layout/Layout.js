import React from 'react';
import './Layout.scss';
import Toolbar from "../../components/Header/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <>
            <Toolbar/>
            <main className="content">
                {props.children}
            </main>
        </>
    );
};

export default Layout;