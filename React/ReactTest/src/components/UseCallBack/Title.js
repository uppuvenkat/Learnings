import React from "react";

function Title(){
    console.log('Rendering title component!')
    return(
        <>
            <h3>Title component</h3>
        </>
    )
}

export default React.memo(Title);