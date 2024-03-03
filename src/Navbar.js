import React from "react";
import styled from "styled-components";
import { FaBatteryFull } from "react-icons/fa";



const Navbarr=styled.div`
    height:9%;
    width:100%;
    display:flex;
    margin-top:0px;
    background-color:white;
    z-index: 2;
    overflow:hidden;
`
const Logo=styled.div`
    position:relative;
    font-weight:700;
    left:5%;
`
const Time=styled.div`
    position:relative;
    left:32%;
`
const Battery=styled.div`
    position:relative;
    left:62%;
`

export default class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            time:this.current_time()
        }
    }
    current_time=()=>{
        const Today=new Date();
        var mins=Today.getMinutes();
        var hrs=Today.getHours();
        if(hrs<10)
        hrs="0"+hrs;
        if(mins<10)
        mins="0"+mins;
        var time=hrs+":"+mins;
        return time;
    }
    
    render()
    {
        return(
            <>
                <Navbarr>
                    <Logo>IPOD</Logo>
                    <Time>{this.state.time}</Time>
                    <Battery><FaBatteryFull/></Battery>
                </Navbarr>
            </>
        )
    }
}