import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export class About extends React.Component{
    render(){
        return <div>
            <Header/>
            <p style={{textAlign:"center"}}>Contact me for any queries</p>
            <p style={{textAlign:"center", color:"blue"}}>Helpline Number:1224 5678 98</p>
            <Footer></Footer>
        </div>
    }
}