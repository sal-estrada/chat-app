import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  return (
    <ImageBackground
      source={require("../assets/images/background-image.png")}
      style={styles.backgroundImage}
    >

      <SafeAreaView style={styles.safeArea}>

        <Text style={styles.titleContainer}>myChat</Text>

        <View style={styles.container}>
          <TextInput
            
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type username"
            placeholderTextColor="#757083, 0.5"
          ></TextInput>

          <Text style={styles.chooseText}>Choose Background Color</Text>

          <View style={styles.colorButtons}>
            <TouchableOpacity style={styles.black} onPress={() => setBackgroundColor("#090C08")}></TouchableOpacity>
            <TouchableOpacity style={styles.purple} onPress={() => setBackgroundColor("#474056")}></TouchableOpacity>
            <TouchableOpacity style={styles.blue} onPress={() => setBackgroundColor("#8A95A5")}></TouchableOpacity>
            <TouchableOpacity style={styles.green} onPress={() => setBackgroundColor("#B9C6AE")}></TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Chat", { name, backgroundColor })}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    height: "44%",
    width: "88%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  textInput: {
    width: "88%",
    padding: 15,
    textAlign: "center",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 30,
    fontSize: "16",
    fontWeight: "300",
  },
  titleContainer: {
    marginTop: "15%",
    fontWeight: "600",
    fontSize: "45",
    color: "#000000",
  },
  button: {
    justifyContent: "center",
    width: "88%",
    height: "15%",
    backgroundColor: "#757083",
    borderRadius: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "16",
    fontWeight: "600",
  },
  chooseText: {
    fontSize: "16",
    fontWeight: "300",
    color: "#757083",
    opacity: "100"
  },
  black: {
    width: "50",
    height: "50",
    borderRadius: 25,
    backgroundColor: "#090C08",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  purple: {
    width: "50",
    height: "50",
    borderRadius: 25,
    backgroundColor: "#474056",
  },
  blue: {
    width: "50",
    height: "50",
    borderRadius: 25,
    backgroundColor: "#8A95A5",
  },
  green: {
    width: "50",
    height: "50",
    borderRadius: 25,
    backgroundColor: "#B9C6AE",
  },
  colorButtons: {
    width: "88%",
    flexDirection: "row",
    marginBlock: 10,
    justifyContent: "space-evenly",
  },
});

export default StartScreen;
