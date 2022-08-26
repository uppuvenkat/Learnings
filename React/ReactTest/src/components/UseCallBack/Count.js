import React from "react";

function Count({type, value}){
    console.log(`Rendering ${type} Count component!`)
    return(
        <>
            <h3>{type}: {value}</h3>
        </>
    )
}

export default React.memo(Count);
