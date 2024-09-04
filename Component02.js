import React from "react";

class Component02 extends React.Component{
    t1=React.createRef();
    getMessage(){
        var t1=this.t1.current.value;
        this.setState({msg:`Hello ${t1}`});
    }
    render(){
        return <div>
            <h1>Reading input from the user</h1>
            Wnter Your Name:
            <input type="text" ref={this.t1}/> <br></br>
            <button onClick={()=>this.getMessage()}>Say Hello</button>
            {this.state.msg}
        </div>
    }
}
export default Component02