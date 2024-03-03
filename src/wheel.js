import React from "react";
import styled from "styled-components";
import { HiMiniPlayPause } from "react-icons/hi2";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

const Wheelbox=styled.div`
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-reflect: below -5px linear-gradient(transparent, transparent, #0004);
    filter: brightness(100%);
    z-index: 0;
`;
const Wheeel=styled.div`
    position:relative;
    top:15%;
    border-radius:50%;
    width:200px;
    height:200px;
    cursor:pointer;
	background: linear-gradient(45deg, #cacaca, gray);
`;
const Menubtn=styled.div`
    position:absolute;
    font-weight:900;
    font-size:23px;
    left:37%;
    top:11%;
    width:40px;
    height:20px;
`;
const Nextbtn=styled.div`
    position:absolute;
    font-weight:900;
    font-size:23px;
    right:4%;
    top:45%;
    width:40px;
    height:20px;
`;
const Backbtn=styled.div`
    position:absolute;
    font-weight:900;
    font-size:23px;
    left:8%;
    top:45%;
    width:40px;
    height:20px;
`;
const Playbtn=styled.div`
    position:absolute;
    font-weight:900;
    font-size:23px;
    bottom:11%;
    left:44%;
    width:40px;
    height:20px;
`;

const Okbtn=styled.div`
    width:80px;
    height:80px;
    border-radius:50%;
	background: linear-gradient(200deg, #cacaca, gray);
    position:relative;
    left:0%;
    top:-33%;
`
class Wheel extends React.Component{
    render()
    {
        return(
            <Wheelbox>
                <Wheeel>
                    <Menubtn><div>Menu</div></Menubtn>
                    <Nextbtn className="buttons" id="next"><FaForward/></Nextbtn>
                    <Playbtn className="buttons" id="play"><HiMiniPlayPause/></Playbtn>
                    <Backbtn className="buttons" id="back"><FaBackward/></Backbtn>               
                </Wheeel>
                <Okbtn className="okbtn"></Okbtn>
            </Wheelbox>
        )
    }
}
export default Wheel;