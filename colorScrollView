import React from "react";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ColorCell from "./ColorCell";
import Orientation from 'react-native-orientation';
import {useState} from 'react';
import ColorCellModel from "../../../models/ColorCellModel";
import Colors from "../../../Enums/Colors";
import DeleteDialog from "./DeleteDialog";

const ColorScrollView = (props) => {

    const [colorName, setColorName] = useState("");
    const [index, setIndex] = useState(-1);
    const [isDeleteOperaion, setIsDeleteOperation] = useState(false);
    let navigation = props.navigation;
    let selectedColorIndex = -1;
    let getUpdatedCells = () => {
        return Colors.instance.getAllColors().map((c, i) => {
            return <ColorCell navigation={navigation} key={i} index={i} name={c.name} value={c.color}
                              description={c.description}
                              handleShow={handleShow} handleDelete={deleteColorFromList} handleEdit={editColor}/>
        })
    };
    let editColor = (colorName, colorValue, description, index) => {
        let color = Colors.instance.get(index);
        color.name = colorName;
        color.color = colorValue;
        color.description = description;

        setColorsCells(getUpdatedCells());

        if (selectedColorIndex === index) {
            handleShow(colorValue, description);
        }
    };
    let handleShow = (colorValue, description, index) => {
        props.handleShow(colorValue, description);
        if (index != null) {
            selectedColorIndex = index;
        }
    };

    let colorItems = getUpdatedCells();

    const [colorsCells, setColorsCells] = useState(colorItems);

    let defaultFlex = 1;
    if (Orientation.getInitialOrientation() === 'LANDSCAPE') {
        defaultFlex = 2;
    }
    const [flex, setFlex] = useState(defaultFlex);

    const _orientationDidChange = (orientation) => {

        if (orientation === 'LANDSCAPE') {
            setFlex(2);
        } else {
            setFlex(1);
        }
    };
    Orientation.addOrientationListener(_orientationDidChange);

    function deleteColorFromList(colorName, index) {
        console.log(props);
        setIndex(index);
        setColorName(colorName);
        setIsDeleteOperation(true);
        // colorsArray.forEach((obj, index, arr) => {
        //     if (obj.color === color) {
        //         colorsArray.splice(index, 1);
        //     }
        //
        //     return true;
        // });
        //
        // setColorsCells(colorsArray.map((c, i) => {
        //     return <ColorCell navigation={navigation} key={i} index={i} name={c.name} value={c.color}
        //                       description={c.description}
        //                       handleShow={handleShow} handleDelete={deleteColorFromList} handleEdit={editColor}/>
        // }));
    }

    let addColor = (colorName, colorValue, description) => {
        let newColor = new ColorCellModel(colorValue, description, colorName);
        Colors.instance.add(newColor);

        setColorsCells(getUpdatedCells());
    };


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{marginStart: 10}} onPress={
                    () => {
                        navigation.navigate('AddColor', {handleAddEdit: addColor, title: "Add Color"});
                    }
                }>
                    <Image style={{width: 30, height: 30, resizeMode: "stretch", marginRight: 15}}
                           source={require("../../../images/addIcon.png")}/>

                </TouchableOpacity>),

        });
    }, [navigation]);
    let onYes = (index) => {
        setIsDeleteOperation(false);
        // remove element with the following index
        Colors.instance.remove(index);
        // call callback
        setColorsCells(getUpdatedCells());
    };

    let onNo = () => {
        setIsDeleteOperation(false);
    };

    return (
        <View style={{flex: flex}}>
            <ScrollView>
                {colorsCells}
            </ScrollView>
            <DeleteDialog color={colorName} index={index} isShow={isDeleteOperaion} onYes={onYes} onNo={onNo}/>
        </View>
    );
};

export default ColorScrollView;
