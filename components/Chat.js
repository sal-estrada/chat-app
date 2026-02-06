import { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat, SystemMessage, Bubble } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const Chat = ({ route, navigation }) => {
  const { name, backgroundColor } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages),
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#4f46e5", // your messages
          },
          left: {
            backgroundColor: "#e5e7eb", // other user's messages
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#111",
          },
        }}
      />
    );
  };

  const renderSystemMessage = (props) => {
    return (
      <SystemMessage
        {...props}
        textStyle={{
          color: "#555",
          fontSize: 14,
          fontStyle: "italic",
        }}
        containerStyle={{
          marginBottom: 10,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      >
        <GiftedChat
          renderSystemMessage={renderSystemMessage}
          messages={messages}
          renderBubble={renderBubble}
          onSend={(messages) => onSend(messages)}
          user={{ _id: 1 }}
          bottomOffset={Platform.OS === "ios" ? 30 : 0}
          textInputStyle={{
            borderRadius: 20, // rounded iOS style
            paddingHorizontal: 12,
            backgroundColor: "#f1f1f1",
          }}
          alwaysShowSend
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
