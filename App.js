import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ColorsScreen from "./Screens/ColorsScreen/ColorsScreen";
import AddEditColorsScreen from "./Screens/AddColorScreen/AddEditColorScreen"
import testScreen from "./Screens/TestScreen/testScreen";


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen*/}
                    {/*name="test" component={testScreen}*/}
                    {/*options={{title: 'testScreen'}}*/}
                {/*/>*/}
                <Stack.Screen
                    name="ColorsList" component={ColorsScreen}
                  options={{title: 'Products'}}
                />
                <Stack.Screen
                    name="AddColor"
                    component={AddEditColorsScreen} options={{title: 'AddColor'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
