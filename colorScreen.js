import React from "react";
import {Button, Image, TouchableOpacity, View} from "react-native";
import ColorScrollView from "./Components/ColorScrollView";
import ColoredArea from "./Components/ColoredArea";
import Colors from "../../Enums/Colors";

import {useState} from "react";
import Orientation from "react-native-orientation";
const ColorsScreen = ({navigation}) => {
    const [color, setColor] = useState("#b7b7b7");
    const [description, setDescription] = useState("no color");


    const portStyle = {flexDirection: "column", flex: 1};
    const landStyle = {flexDirection: "row", flex: 1};
    let defaultStyle = {flexDirection: "column", flex: 1};

    //handle orientation
    if (Orientation.getInitialOrientation() === 'LANDSCAPE') {
        defaultStyle = landStyle;
    }
    const [style, setStyle] = useState(defaultStyle);
    const _orientationDidChange = (orientation) => {

        if (orientation === 'LANDSCAPE') {
            setStyle(landStyle);
        } else {
            setStyle(portStyle);
        }
    };
    Orientation.addOrientationListener(_orientationDidChange);
    //handle orientation


    let displayColor = (value, description) => {
        console.log(value);
        setColor(value);
        setDescription(description);
    };



    return (
        <View style={style}>
            <ColorScrollView handleShow={displayColor} navigation={navigation} />

            <ColoredArea color={color} description={description}/>
        </View>
    );

};

export default ColorsScreen;
