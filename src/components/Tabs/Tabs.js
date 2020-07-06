import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import React, {useState} from 'react';

function ControlledTabs(props) {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Home">
                {props.children}
            </Tab>
            <Tab eventKey="profile" title="Profile">
                {props.children}
            </Tab>
        </Tabs>
    );
}

export default ControlledTabs;