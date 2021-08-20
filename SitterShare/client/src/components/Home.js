import React from "react";
import { Media } from "reactstrap";
import img from "./faces.png"

export const Welcome = () => {
    const imgStyle = {
        maxHeight: 400,
        maxWidth: 400
    }

    const homeContainer = {
        marginLeft: 0,
        marginRight: 0,
        top: "50%",
        marginTop: "4rem",
        textAlign: "center"
    }

    return (
        <div style={homeContainer} className="home">
            <Media className="faces-logo" style={imgStyle} src={img}></Media>
            <h4>Welcome!</h4>
        </div>
    );
}

export default Welcome;