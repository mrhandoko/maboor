import React from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
    formText: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
    },
};

const App = () => (
    <View style={ styles.container }>
        <Text style={ styles.welcome }>
          Welcome to React Native!
        </Text>
        <Text style={ styles.instructions }>
          To get started, edit index.ios.js
        </Text>
        <Text style={ styles.instructions }>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
        <TextInput
          style={ styles.formText }
          placeholder={ "testing" }
        />
    </View>
);

export default App;
