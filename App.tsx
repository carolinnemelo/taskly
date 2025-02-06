import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Press Me" />
      <Pressable onPress={()=> console.log("Pressed")}>
        <Text>Delete</Text>
      </Pressable>
      <View style={styles.itemContainer}>
        <Text style={{ fontSize: 18, fontWeight: "200" }}>
          Open up App.tsx to start working on your app!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    backgroundColor: "red",
    paddingHorizontal: 16,
  },
});
