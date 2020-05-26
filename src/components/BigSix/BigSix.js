import React from 'react';
import useWindowWidth from '../../functions/hooks/useWindowWidth';
import BigSixMobile from "./BigSixMobile/BigSixMobile";
import BigSixDesktop from "./BigSixDesktop/BigSixDesktop";

const BigSix = () => {
    const width = useWindowWidth();

    if (width < 650) {
        return <BigSixMobile/>
    }
    return <BigSixDesktop/>
};

export default BigSix;