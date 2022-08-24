import React, { useState, useContext }  from "react";
import ComponentD from "./ComponentD";
import { FNameContext, LNameContext } from "./ComponentA";

export default function ComponentC(){
    let fname = useContext(FNameContext)
    let lname = useContext(LNameContext)
    return(
        <>
            <div>
                <h3>ComponentC</h3>
                <div>Fname:{fname} - Lname:{lname}</div>
                <ComponentD /> 
            </div>
        </>
    )
}