import React from "react";
import styled from "styled-components";

const Menuu=styled.div`
    transition: all 2s linear;
    background-color:white;
    display:flex;
    flex-direction:column;
    width:40%;
    height:100%;
    margin-left:0;
    z-index:3;
`
const Optionss=styled.div`
    background-color:white;
    display:flex;
    justify-content:left;
    align-content:center;
    align-items:center;
    height:${props =>{
        switch(props.type){
            case "mainmenu":
                return "20%";
            case "musicmenu":
                return "30%";
            case "settingsmenu":
                return "30%";
        }
    }};
    position:relative;
    font-size:1.2rem;
    font-weight:500;
    background-color:${props => props.ind === props.ind2 ? 'cyan' : 'white'};
    z-index:3;
`
const Imgstyle=styled.img`
    height: 15px;
    width: 15px;
    position:absolute;
    left:85%;
    z-index:3;
`
const OpName=styled.p`
    width:80%;
    position:relative;
    left:10%;
    z-index:3;
`
export default class Menu extends React.Component{
    
    render(){
        const { menu } = this.props;
        const {
            options,
			optionsIndex,
			musicIndex,
			settingsIndex,
			SongVisible,
			menuVisible,
			musicVisible,
            gamesVisible,
			artistVisible,
			albumsVisible,
			settingsVisible,
			wallpaperchange,
			coverflowVisible,
			pageRender,
			home,
        } = menu;
        return(
            <>
                
                {menuVisible=="yes"&&<Menuu>
                <div  style={{textShadow: "lightgray 1px 2px 0px"}}>MainMenu</div>
                {options.map((opt, ind) => (
                    <Optionss key={ind} ind={optionsIndex} ind2={ind} type={"mainmenu"}>
                        <OpName>{Object.keys(opt)[0]}</OpName>  
                        {optionsIndex==ind&&<Imgstyle src="https://cdn-icons-png.flaticon.com/512/81/81068.png"></Imgstyle>}                  
                    </Optionss>
                ))}
                </Menuu>}

                    
                {
                    musicVisible=="yes"&&<Menuu>
                    <div>Music</div>
                    {
                        options[optionsIndex].Music.map((opt,ind)=>(
                            <Optionss key={ind} ind={musicIndex} ind2={ind} type={"musicmenu"}>
                                <OpName>{opt}</OpName>
                                {musicIndex==ind&&<Imgstyle src="https://cdn-icons-png.flaticon.com/512/81/81068.png"></Imgstyle>}
                            </Optionss>
                        ))
                    }
                    </Menuu>
                }
                {
                    settingsVisible=="yes"&&<Menuu>
                    <div>Settings</div>
                    {
                        options[optionsIndex].Settings.map((opt,ind)=>(
                            <Optionss key={ind} ind={settingsIndex} ind2={ind} type={"settingsmenu"}>
                                <OpName>{opt}</OpName>
                                {settingsIndex==ind&&<Imgstyle src="https://cdn-icons-png.flaticon.com/512/81/81068.png"></Imgstyle>}
                            </Optionss>
                        ))
                    }
                </Menuu>
                }
            </>
        )
    }
}