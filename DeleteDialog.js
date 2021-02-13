import React from "react";
import {Button, Text, View} from "react-native";

const DeleteDialog = (props) => {
    if (props.isShow) {

        return (
            <View style={{
                textAlign: 'center',
                alignItems: 'center',
                position: "absolute",
                right: '20%',
                top: '30%',
                width: '60%',
                zIndex: 10,
                backgroundColor: "white",
                borderColor: 'lightgray',
                borderWidth: 1,
                justifyContent: 'center',
                padding: 20
            }}>
                <Text style={{fontSize: 15, textAlign: 'center'}}>
                    Are you sure you want to delete {props.color}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginTop: 20}}>
                    <Button style={{}} title="Yes" onPress={() => {
                        props.onYes(props.index);
                    }}/>

                    <Button title="no" onPress={() => {
                        props.onNo();
                    }}/>
                </View>
            </View>
        );
    }
    else {
        return (<></>);
    }
};

export default DeleteDialog;
