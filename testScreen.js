import React from "react";
import {Animated, View} from "react-native";
import SwitchButton from "./components/SwitchButton";
import {useRef, useEffect} from "react";

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};
const testScreen = ({navigation}) => {

    return (
        <FadeInView>
            <SwitchButton textColor="#5050F0"
                          activeColor="#05F001" selectedChoice={1} firstChoiceText="hello" secondChoiceText="marhaba"
                          firstChoiceImage={require('../../images/delete.png')}
                          secondChoiceImage={require('../../images/delete.png')}/>
        </FadeInView>
    );
};

export default testScreen;
