import React, { useState }  from "react";
import { FNameContext, LNameContext } from "./ComponentA";
export default function ComponentD(){

    return(
        <>
            <h3>ComponentD</h3>
            <FNameContext.Consumer>
                {
                    fname => {
                        return <LNameContext.Consumer>
                                {
                                    lname => {
                                        return <div>Fname: {fname}- lname: {lname}</div>
                                    }
                                }
                        </LNameContext.Consumer>
                    }
                }
            </FNameContext.Consumer>
        </>
    )
}