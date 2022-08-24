import React, { useState }  from "react";
import ComponentB from "./ComponentB";
export let FNameContext = React.createContext()
export let LNameContext = React.createContext()

export default function ComponentA(){
    return(
        <>
            <FNameContext.Provider value={'venkat'} >
                <LNameContext.Provider value={'ramana'}>
                    <ComponentB />
                </LNameContext.Provider>
            </FNameContext.Provider>

        </>
    )
}