import React from "react";
import Navbar from "./components/display_components/Navbar";
import LockScreen from "./components/display_components/LockScreen";
import styled from "styled-components";

const Displayer=styled.div`

  background-size:cover;
  background-position:center;
  width:100%;
  height:50%;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  display:flex;
  flex-direction:column;
  align-items: center;
  z-index: 2;
  overflow:hidden;
`
export default class Display extends React.Component{
    render()
    {
        return(
            <>
            <Displayer>
                <Navbar/>
                <LockScreen/>
            </Displayer>
            </>
        )
        
    }
}