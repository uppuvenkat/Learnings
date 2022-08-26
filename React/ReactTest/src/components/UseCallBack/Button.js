import React from "react";

function Button({type, incrementBy}){
    console.log(`Rendering ${type} Button component!`)
    return(
        <>
            <button onClick={incrementBy}>{type}</button>
        </>
    )
}

export default React.memo(Button);
