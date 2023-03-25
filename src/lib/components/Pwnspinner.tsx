//import React from "react";

interface PwnspinnerProps {
    color?: string;
    thickness?: number;
    speed?: number;
}
//TODO v2 props: color, thickness, speed 
//TODO v2 css object from props color=red/blue/grey, thickness=1-5 speed=1-10
const Pwnspinner = (props: PwnspinnerProps = {}) => {
    console.log(props);
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
        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 5px solid #f3f3f3; /* Light grey */
          border-top: 5px solid #383636; /* Blue */
          border-radius: 50%;
          animation: spinner 1.5s linear infinite;
        }
        .spinner-container {
          display: grid;
          justify-content: center;
          align-items: center;
          height: 70px;
        }
        `}
            </style>
            {/*Component starts here*/}
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </>
    )
};
export { Pwnspinner };