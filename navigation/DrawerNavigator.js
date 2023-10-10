import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import Stack from "./StackNavigator";
//import StackNavigation from "./StackNavigator";
//import Navigator from "./StackNavigator";
//import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            //<Drawer.Screen name="Inicio" component={Stack} />
            //<Drawer.Screen name="Inicio" component={Navigator} />
            //<Drawer.Screen name="Inicio" component={TabkNavigator} />
            //<Drawer.Screen name="Inicio" component={StackNavigator} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
