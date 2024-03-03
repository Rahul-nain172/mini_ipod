import React from "react";
import Menu from "./Menu";
import styled from "styled-components";

const MainScreeen=styled.div`
    transition: all 2s linear;
    width:100%;
    height:${props=> props.nav?"91%":"100%"};
    display:flex;
    justify-content:${props => props.left === 0 ? 'center' : 'left'};
    align-items:center;
    align-content:center;
    font-size:28px;
    font-weight:700px;
    background-image: ${props => `url(${props.wallpaper[props.ind]})`};
    background-size: cover;
    z-index:3;

`;
const Music=styled.div`
    transition: all 2s linear;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-content:center;
    align-items:center;
    overflow:hidden;
    width:100%;
    height:100%;
    background-color:black;
    text-transform: capitalize;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;

`;
const Song =styled.img`
    height:50%;
    width:50%;
    position:relative;
    margin:0;
    padding:0;
    box-sizing: border-box;
    box-shadow: 0px 0px 12px 7px rgba(255, 255, 255, 1);
    overflow-clip-margin: content-box;
    overflow: clip;
`
const Sname=styled.p`
    font-family: Lobster;
    text-align: center; 
    margin-top: 20px; 
    width: 90%; 
    color: white; 
    font-weight: bolder; 
    font-size: 30px; 
    letter-spacing: 0.15rem;
`

export default class MainScreen extends React.Component{
    render()
    {
        const {shownav,menu,islockscreen,screen,songsList}=this.props;

        return(
            <>
            <MainScreeen nav={shownav} left={islockscreen} wallpaper={screen.wallpaper} ind={screen.wallpaperIndex}>
    
               {islockscreen&&<div style={{position:"relative", top:"42%" ,width:"100%",display:"flex",justifyContent:"center"}}>
                Press Ok to unlock!</div>}
                {!islockscreen&&menu.SongVisible=="no"&&<Menu menu={menu} />}
                {!islockscreen&&menu.SongVisible=="yes"&&<Music>
                    <Song src={songsList.thumbnails[songsList.songIndex]}>

                    </Song>
                    <Sname>{songsList.name[songsList.songIndex]}</Sname>
                    <timer>

                    </timer>
                </Music>
                }
    
            </MainScreeen>
            </>
        )
    }
}