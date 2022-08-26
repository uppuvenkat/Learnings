import React from "react";

class TimerClass extends React.Component{
     interval;
    constructor(props){
        super()
        this.state={
            timer:0
        }
    }
    componentDidMount(){
      this.interval =  setInterval(()=>{
            this.setState(prevState => ({timer: prevState.timer + 1}))
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return(
            <>  
                <div>
                    Class Timer: {this.state.timer}
                    <button onClick={()=>{clearInterval(this.interval)}}>clearInterval</button>
                </div>
            </>

        )
    }
}

export default TimerClass