import React from 'react';
import './SideDrawer.scss';
import NavigationItems from "../navigation-items/NavigationItems";
import Backdrop from "../../ui/back-drop/Backdrop";

const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer', 'close'];
    if (props.isOpen) {
        attachedClasses = ['side-drawer', 'open'];
    }

    return (
        <>
            <Backdrop show={props.isOpen} cancel={props.hideDrawer}/>
            <div className={attachedClasses.join(' ')} onClick={props.hideDrawer}>
                <div className="side-drawer__cross">
                    <i className="fas fa-times cross"/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;
