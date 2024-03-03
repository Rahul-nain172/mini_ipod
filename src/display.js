import React from "react";
import Navbar from "./Navbar";
import MainScreen from "./MainScreen";
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
  z-index: 1;
  overflow:hidden;
`
export default class Display extends React.Component{
    render()
    {
        const menu=this.props.menu;
        const ls=this.props.islockscreen;
        const screen=this.props.screen;
        const songsList=this.props.songsList;
        const themeIndex=this.props.theme.themeIndex;
        let shownav=!(menu.SongVisible==="yes"||menu.coverflowVisible==="yes"||menu.gamesVisible==="yes"||menu.albumsVisible==="yes"||menu.artistVisible==="yes");
        return(
            <>
            <Displayer themeIndex={themeIndex}>
            {shownav&&!ls&&<Navbar/>}
            <MainScreen shownav={shownav&&!ls} menu={menu} islockscreen={ls}  screen={screen}  songsList={songsList} />
            </Displayer>
        
            </>
        )
        
    }
}