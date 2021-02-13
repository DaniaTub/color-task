import React, {useState} from "react";
import {Text, View} from "react-native";
import ColorsOperaions from "../../../utilities/ColorsOperaions";

const ColoredArea = (props) => {
    let textColor = "black";
    textColor = ColorsOperaions.invertColor(props.color);

    return (
        <View style={{backgroundColor: props.color, flex: 1}}>
            <Text style={{textAlign: "center", marginTop: 20,color:textColor, fontSize:30}}>
                {props.description}
            </Text>
        </View>
    )
};
export default ColoredArea;
