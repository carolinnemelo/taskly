import { StyleSheet, View, Button, Text } from "react-native";
import { ShoppingListItem } from "./components/ShoppingListItem";
import { useState } from "react";

export default function App() {
  const [post, setPost] = useState("");
  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const posts = await response.json();
      console.log({ posts });
      setPost(JSON.stringify(posts, null, 2));
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <View style={styles.container}>
      <ShoppingListItem name={"coffee"} />
      <ShoppingListItem name={"milk"} />
      <ShoppingListItem name={"bread"} />
      <ShoppingListItem name={"sugar"} />
      <View>
        <Button title="Hello" onPress={handleClick} />
        {post !== "" ? <Text>{post}</Text> : ""}
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
});
