import React from "react";

interface PwnspinnerProps {
    color?: string;
    thickness?: number;
    speed?: number;
}

const Pwnspinner = (props: PwnspinnerProps = {}) => {
    console.log(props);
    const Styles = {
        loadingSpinner: {
            width: '30px',
            height: '30px',
            borderWidth: `${props.thickness || 5}px`,
            borderStyle: 'solid',
            borderColor: `#f3f3f3`,
            borderTopWidth: `${props.thickness || 5}px`,
            borderTopColor: `${props.color || '#383636'}`,
            borderRadius: '50%',
            animation: `spinner ${props.speed || 1.5}s linear infinite`,
        },
        spinnerContainer: {
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70px',
        },
    };
    //console.log(Styles)
    return (
        <>
            <style type="text/css">
                {`
                @keyframes spinner {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                `}
            </style>
            {/*Component starts here*/}
            {/*<div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>*/}
            <div style={Styles.spinnerContainer}>
                <div style={Styles.loadingSpinner}></div>
            </div>
        </>
    )
};
export { Pwnspinner };