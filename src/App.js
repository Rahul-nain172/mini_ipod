import React from 'react';
import ZingTouch from "zingtouch";
import Wheel from '../src/wheel';
import Display from './display';
import images from "../src/assets/images/images";
import songs from "../src/assets/songs/songs";
import styled from 'styled-components';

const IPOD=styled.div`
  height: 580px;
  width: 370px;
  background: linear-gradient(90deg, #e3e4e5, #cacaca);
  box-shadow: ${props=>props.themeIndex===1?"rgba(151, 151, 151, 0.72) 0px 1px 15px 13px":"rgba(151, 151, 151, 0.72) 1px 4px 15px 10px;"};
  border-radius: 10%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:0;
`




class App extends React.Component{

  constructor(){
    super();		
    const song1 = new Audio(songs.music1);
		const song2 = new Audio(songs.music2);
		const song3 = new Audio(songs.music3);
    this.state={
		islockscreen:true,
        menu:	{
        	options:[
					{
						Music: ["all-songs", "artists", "albums"],
					},
					{
						Games: [],
					},
					{
						Coverflow: [],
					},
					{
						Settings: [
							"change-wallpaper",
							"change-orientation",
							"change-theme",
						],
					},
        ],				
			optionsIndex: 2,
			musicIndex: 0,
			settingsIndex: 0,
			SongVisible:"no",
			menuVisible: "no",
			musicVisible: "no",
			gamesVisible:"no",
			artistVisible:"no",
			albumsVisible:"no",
			settingsVisible: "no",
			wallpaperchange:"no",
			coverflowVisible:"no",
			themechange:"no",
			pageRender:"no",
			home:true,
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
					images.artists,
					images.games,
					images.albums,
				],
				wallpaperIndex: 0,
				lastIndex: 0,
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

	//rotational functionality
	rotate = (menu) => {
		this.activeRegionOuter.bind(this.containerElementOuter, 'rotate', (event) => {
			event.stopPropagation();
			if (menu.menuVisible === 'yes') {
				const angle = event.detail.angle;
				let optionsIndex = 0;
	
				if (angle >= 0 && angle <= 90) {
					optionsIndex = 0;
				} else if (angle > 90 && angle <= 180) {
					optionsIndex = 1;
				} else if (angle > 180 && angle <= 270) {
					optionsIndex = 2;
				} else if (angle > 270 && angle <= 360) {
					optionsIndex = 3;
				} else if (angle >= -90 && angle < 0) {
					optionsIndex = 3;
				} else if (angle >= -180 && angle < -90) {
					optionsIndex = 2;
				} else if (angle >= -270 && angle < -180) {
					optionsIndex = 1;
				} else if (angle >= -360 && angle < -270) {
					optionsIndex = 0;
				}
	
				menu.optionsIndex = optionsIndex;
			}
			if(menu.musicVisible=="yes")
			{
				const angle = event.detail.angle;
				let musicIndex = 0;
	
				if (angle >= 0 && angle <= 120) {
					musicIndex = 0;
				} else if (angle > 120 && angle <= 240) {
					musicIndex = 1;
				} else if (angle > 240 && angle <=360) {
					musicIndex = 2;
				}
				 else if (angle >= -120 && angle < 0) {
					musicIndex = 2;
				} else if (angle >= -240 && angle < -120) {
					musicIndex = 1;
				} else if (angle >= -360 && angle < -240) {
					musicIndex = 0;
				}
	
				menu.musicIndex = musicIndex;
			}
			if(menu.settingsVisible=="yes")
			{
				const angle = event.detail.angle;
				let settingsIndex = 0;
	
				if (angle >= 0 && angle <= 120) {
					settingsIndex = 0;
				} else if (angle > 120 && angle <= 240) {
					settingsIndex = 1;
				} else if (angle > 240 && angle <=360) {
					settingsIndex = 2;
				}
				 else if (angle >= -120 && angle < 0) {
					settingsIndex= 2;
				} else if (angle >= -240 && angle < -120) {
					settingsIndex = 1;
				} else if (angle >= -360 && angle < -240) {
					settingsIndex = 0;
				}
	
				menu.settingsIndex =settingsIndex;
			}
		this.setState({ menu });
		});
	};
	playpause=(menu,forceplay)=>{
		let updatedSongsList=this.state.songsList;
		if(forceplay)updatedSongsList.isPlaying=true;
		else updatedSongsList.isPlaying=!updatedSongsList.isPlaying;

		if(updatedSongsList.isPlaying)
		{
			updatedSongsList.songs[updatedSongsList.songIndex].play();
		}
		else
		{
			updatedSongsList.songs[updatedSongsList.songIndex].pause();
		}
		this.setState({
			menu:menu,
			songsList:updatedSongsList
		});
	}
	//pressing "middle (ok) button functionality"
	play_prev_next=(next)=>{
		if(this.state.menu.SongVisible=="yes"){
		let updatedSongsList=this.state.songsList;
		updatedSongsList.songs[updatedSongsList.songIndex].pause();
		updatedSongsList.isPlaying=true;
		let l=updatedSongsList.songs.length;
		updatedSongsList.songIndex=(updatedSongsList.songIndex+(next?1:-1)+l)%l;
		updatedSongsList.songs[updatedSongsList.songIndex].play();
		this.setState(updatedSongsList);
		}
	}
	changewallpaper=()=>
	{
		let prevscreen=this.state.screen;
		let len=5;
		prevscreen.wallpaperIndex=(prevscreen.wallpaperIndex+1)%len;
		this.setState({screen:prevscreen});
	}
	tap=(menu)=>{
		if(this.state.islockscreen==true)
		{
			this.setState({islockscreen:false});
			return;
		}
		if(menu.home)
		{
			return;
		}
		if(menu.optionsIndex==0)
		{
			if(menu.musicVisible=="no"&&menu.SongVisible=="no") //music menu wasn't visible
			{
				menu.musicIndex=0;
				menu.menuVisible="no";
				menu.musicVisible="yes";
				this.setState({menu:menu});
				return;
			}
			else //inside the music menu
			{
				if(menu.musicIndex==0)
				{
					let forceplay=false;
					if(menu.SongVisible=="no")
					{
						menu.SongVisible="yes"
						menu.musicVisible="no";
						forceplay=true;
					}
					this.playpause(menu,forceplay);
					return;
				}
				else if(menu.musicIndex==1)
				{
					if(menu.artistVisible=="no")
					{
						menu.artistVisible="yes";
						menu.musicVisible="no";
						let dup=this.state.screen;
						dup.lastIndex=this.state.screen.wallpaperIndex;
						dup.wallpaperIndex=6;
						this.setState({menu:menu,screen:dup});
						return;
					}
				}
				else
				{
					if(menu.albumsVisible=="no")
					{
						menu.albumsVisible="yes";
						menu.musicVisible="no";
						let dup=this.state.screen;
						dup.lastIndex=this.state.screen.wallpaperIndex;
						dup.wallpaperIndex=8;
						this.setState({menu:menu,screen:dup});
						return;
					}
				}
			}
		}
		else if(menu.optionsIndex==1)
		{
			if(menu.gamesVisible=="no")
			{
				menu.gamesVisible="yes";
				menu.menuVisible="no";
				let dup=this.state.screen;
				dup.lastIndex=this.state.screen.wallpaperIndex;
				dup.wallpaperIndex=7;
				this.setState({menu:menu,screen:dup});
				return;
			}
		}
		else if(menu.optionsIndex==2)
		{
			if(menu.coverflowVisible=="no")
			{
				menu.coverflowVisible="yes";
				menu.menuVisible="no";
				let dup=this.state.screen;
				dup.lastIndex=this.state.screen.wallpaperIndex;
				dup.wallpaperIndex=5;
				this.setState({menu:menu,screen:dup});
				return;
			}
		}
		else if(menu.optionsIndex==3)
		{
			if(menu.settingsVisible=="no"&&menu.wallpaperchange=="no"&&menu.themechange=="no")
			{
				menu.menuVisible="no";
				menu.settingsVisible="yes";
				this.setState({menu});
				return;
			}
			else{
				if(menu.settingsIndex==0)
				{
					if(menu.wallpaperchange=="no")
					{
						menu.settingsVisible="no";
						menu.wallpaperchange="yes";
						this.setState(menu);
					}
					else{
						this.changewallpaper()
					}
				}
				else if(menu.settingsIndex==1)
				{
					alert("This functionality will be there in the next version release!");
					return;
				}
				else
				{
					let updatedMenu=menu;
					if (menu.themechange === "no") {
						updatedMenu = {
						  ...menu,
						  themechange: "yes"
						};
					}
						const newThemeIndex = (this.state.theme.themeIndex + 1) % 2;
						const updatedTheme = {
						  ...this.state.theme,
						  themeIndex: newThemeIndex
						};
						this.setState({
						  menu: updatedMenu,
						  theme: updatedTheme
						});
					  
					  return;
				}
			}
		}
	}

	tapup=(menu)=>{
		if(this.state.islockscreen==true)
		{
			return;
		}
		if(menu.SongVisible=="yes")
		{
			menu.musicVisible="yes";
			menu.SongVisible="no";
		}
		else if(menu.musicVisible=="yes")
		{
			menu.menuVisible="yes";
			menu.musicVisible="no";
		}
		else if(menu.artistVisible=="yes"||menu.albumsVisible=="yes")
		{
			menu.artistVisible="no";
			menu.musicVisible="yes";
			menu.albumsVisible="no";
			let dup=this.state.screen;
			dup.wallpaperIndex=dup.lastIndex;
			this.setState({menu:menu,screen:dup});
			return;
		}
		else if(menu.wallpaperchange=="yes"||menu.themechange=="yes")
		{
			menu.wallpaperchange="no";
			menu.themechange="no"
			menu.settingsVisible="yes";
		}
		else if(menu.settingsVisible=="yes")
		{
			menu.settingsVisible="no";
			menu.menuVisible="yes";
		}
		else if(menu.coverflowVisible=="yes"||menu.gamesVisible=="yes")
		{
			let dup=this.state.screen;
			dup.wallpaperIndex=dup.lastIndex;
			menu.gamesVisible="no"
			menu.coverflowVisible="no";
			menu.menuVisible="yes";
			this.setState({menu:menu,screen:dup});
			return;
		}
		else if(menu.menuVisible=="no")
		{
			menu.menuVisible="yes";
			menu.home=false;
		}
		else
		{
			menu.menuVisible="no";
			menu.home=true;
		}
		this.setState(menu);

	}
	setBodyBackgroundColor=()=>{
		const ind=this.state.theme.themeIndex;
		const bodyBackgroundColor = ind === 0 ? 'white' : 'black';
		document.body.style.backgroundColor = bodyBackgroundColor;
	}
  componentDidMount() {
	this.containerElementOuter = this.controllerRef.current;
	this.activeRegionOuter = new ZingTouch.Region(this.containerElementOuter);
	this.setBodyBackgroundColor();
}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.theme.themeIndex !== this.state.theme.themeIndex) {
			this.setBodyBackgroundColor();
		}
  }

  render(){
    return (
      <IPOD themeIndex={this.state.theme.themeIndex}>
	<Display menu={this.state.menu} islockscreen={this.state.islockscreen} screen={this.state.screen} songsList={this.state.songsList} theme={this.state.theme}/>
    <Wheel menu={this.state.menu} rotate={this.rotate} controllerRef={this.controllerRef} tap={this.tap} tapup={this.tapup} prevnext={this.play_prev_next}
	screen={this.state.screen} theme={this.state.theme}/>
      </IPOD>
    );
  }
}

export default App;
