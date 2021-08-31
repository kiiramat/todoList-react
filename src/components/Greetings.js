import React from "react";

function Greetings() {
    const actualDate = new Date();
    const actualHours = actualDate.getHours();
    let timeOfDay;
    const titleStyle = {
        color: "#FF8C00"
    }

    if (actualHours < 12) {
        timeOfDay = "Morning";
        titleStyle.color = "#B0E2FF";
    } else if (actualHours >= 12 && actualHours < 17) {
        timeOfDay = "Afternoon";
        titleStyle.color = "#82CFFD";
    } else if (actualHours >= 17 && actualHours < 20) {
        timeOfDay = "Evening";
        titleStyle.color = "#A4D3EE";
    } else {
        timeOfDay = "Night";
        titleStyle.color = "#8DB6CD";
    }

    return(
        <h1 className="greetings" style={titleStyle}>{`Good ${timeOfDay}, Kiiramat!`}</h1>
    )
}

export default Greetings;