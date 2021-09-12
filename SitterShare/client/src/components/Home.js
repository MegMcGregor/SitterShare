import React from "react";
import { Media, Card, CardBody } from "reactstrap";
import img from "./faces.png"

export const Welcome = () => {

    const imgStyle = {
        maxWidth: 400
    }

    const homeContainer = {
        marginLeft: 0,
        marginRight: 0,
        marginTop: "4rem",
        textAlign: "center"
    }

    const fontFamily = {
        fontFamily: 'Poppins',
        fontWeight: "bold",
        color: "white",
        letterSpacing: 4
    }

    return (
        <div style={homeContainer}>
            <Card className="mx-4 card border-0 shadow-sm mx-auto" style={{ width: "30%" }}>
                <Media className="faces-logo" className="mx-auto image-fluid" style={imgStyle} src={img}></Media>
                <CardBody className="mt-6" style={{ backgroundColor: "#50ACE4" }}>
                    <h3 style={fontFamily} className="p-4">Welcome!</h3>
                </CardBody>
            </Card >
        </div>
    );
}

export default Welcome;