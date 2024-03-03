import React from "react";
import wallpaper1 from "../../assets/images/wallpaper1.jpg";
import styled from "styled-components";
const LockScreeen=styled.div`
    width:100%;
    height:91%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
    font-size:28px;
    font-weight:700px;
`;

export default class LockScreen extends React.Component{
    render()
    {
        return(
            <>
            <LockScreeen>
                <div style={{position:"relative", top:"42%" ,width:"100%",display:"flex",justifyContent:"center"}}>
                Press Ok to unlock!
                </div>
            </LockScreeen>
            </>
        )
    }
}