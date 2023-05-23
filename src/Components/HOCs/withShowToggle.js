import { useState } from "react";

const withShowToggle = (OriginalComponent) => {
    const NewComponent = (props) => {
        
        const [showInfo, setShowInfo] = useState(false);

        const toggleShowInfoHandler = () => {
            setShowInfo((prevShowInfo) => !prevShowInfo);
        };

        return <OriginalComponent showInfo={showInfo} toggleShowInfoHandler={toggleShowInfoHandler} {...props}  />
    };

    return NewComponent
};

export default withShowToggle;
