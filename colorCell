import React from "react";
import {Button, Image, Text, TouchableOpacity, View} from "react-native";

const ColorCell = (props) => {
    let navigation = props.navigation;

    return (
        <TouchableOpacity
            onPress={
                () => {
                    props.handleShow(props.value, props.description, props.index);
                }
            }

            style={{
                flexDirection: 'row',
                backgroundColor: "white",
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray'
            }}>
            <Text style={{fontSize: 20}}>
                {props.name}
            </Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", verticalAlign: "center"}}>
                {/*<View style={{marginEnd: 10}}>*/}
                {/*<Button title="Show" onPress={*/}
                {/*() => {*/}
                {/*props.handleShow(props.value, props.description, props.index)*/}
                {/*}*/}
                {/*}/>*/}
                {/*</View>*/}

                <View>
                    <Button style={{marginStart: 10}} title="Edit" onPress={
                        () => {
                            navigation.navigate('AddColor', {
                                handleAddEdit: props.handleEdit,
                                title: "Edit Color",
                                index: props.index,
                                colorName: props.name,
                                colorValue: props.value,
                                description: props.description
                            });
                        }
                    }/>
                </View>
                <TouchableOpacity style={{marginStart: 10}} onPress={
                    () => {
                        props.handleDelete(props.name,props.index)
                    }
                }>
                    <Image style={{width: 20, height: 40, resizeMode: "center"}}
                           source={require("../../../images/delete.png")}/>

                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
export default ColorCell;
