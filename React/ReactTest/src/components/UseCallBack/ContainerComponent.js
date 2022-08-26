import React, { useState, useCallback }  from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export const CountContext = React.createContext()

export default function ContainerComponent(){
    const [age, setAge] = useState(25)
    const [sal, setSal] = useState(50000)
   
    const increamentAge = useCallback(()=>{
        setAge(prev => prev+1)
    },[age])

    const increamentSalary = useCallback(()=>{
        setSal(prev => prev+5000)
    },[sal])

    return(
        <>
           <Title />
           <Count type={"Age"} value={age} />
           <Button type={"Age"} incrementBy = {increamentAge}/>
           <Count type={"Salary"} value={sal} />
           <Button type={"Salary"} incrementBy = {increamentSalary}/>
        </>
    )
}