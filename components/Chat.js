import { useEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat, SystemMessage, Bubble } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  collection,
  DocumentSnapshot,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Chat = ({ route, navigation }) => {
  const { name, backgroundColor, userID } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          _id: doc.id,
          text: data.text,
          createdAt: data.createdAt?.toDate(),
          user: data.user,
        };
      });

      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const onSend = (newMessages = []) => {
    addDoc(collection(db, "messages"), newMessages[0]).catch((error) =>
      console.log(error),
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
          user={{ _id: userID, name:name }}
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
