import React from "react";
import Wheel from '../src/wheel';
import Display from './display';
import images from "../src/assets/images/images";
import songs from "../src/assets/songs/songs";
import styled from 'styled-components';

const IPOD=styled.div`
  height: 580px;
  width: 370px;
  background: linear-gradient(90deg, #e3e4e5, #cacaca);
  border-radius: 10%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`




class App extends React.Component{

  constructor(){
    super();		
    const song1 = new Audio(songs.music1);
		const song2 = new Audio(songs.music2);
		const song3 = new Audio(songs.music3);
    this.state={
      menu:{
        options:[
					{
						music: ["all-songs", "artists", "albums"],
					},
					{
						games: [],
					},
					{
						coverflow: [],
					},
					{
						settings: [
							"change-wallpaper",
							"change-orientation",
							"change-theme",
						],
					},
        ],				
        optionsIndex: 0,
				musicIndex: 0,
				settingsIndex: 0,
				menuVisible: "no",
				musicVisible: "no",
				settingsVisible: "no",
        pageRender:"no",
      },
			screen: {
				// List of wallpapers, Pages in Background to Render
				wallpaper: [
					// wallpapers
					images.wallpaper1,
					images.wallpaper2,
					images.wallpaper3,
					images.wallpaper4,
					images.wallpaper5,
					images.coverflow,
					images.games,
					images.allsongs,
					images.artists,
					images.albums,
				],
				wallpaperIndex: 0,
				screenIndex: 0,
			},
			songsList: {
				songs: [song1, song2, song3],
				thumbnails: [images.song1Img, images.song2Img, images.song3Img],
				songIndex: 0,
				name: ["Stay", "Deserve You", "Yummy"],
				isPlaying: false,
			},
			theme: {
				themeList: ["Classic", "Dark"],
				themeIndex: 0,
			},
    };
    this.controllerRef = React.createRef();
    this.progressRef = React.createRef();
  
  }

  render(){
    return (
      <IPOD>
        <Display/>
        <Wheel/>
      </IPOD>
    );
  }
}

export default App;
