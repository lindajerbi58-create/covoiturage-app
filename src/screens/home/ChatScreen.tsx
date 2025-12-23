import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const messages = [
  {
    id: '1',
    text: "Hi Sarah, I'm ready to pick you up. I'll be at the campus main gate in about 5 minutes.",
    time: '10:30 AM',
    fromMe: false,
  },
  {
    id: '2',
    text: "Great, Alex! I'm already here. I'm wearing a blue jacket.",
    time: '10:32 AM',
    fromMe: true,
  },
  {
    id: '3',
    text: 'Got it. See you in a moment!',
    time: '10:33 AM',
    fromMe: false,
  },
  {
    id: '4',
    text: "Looking forward to it! It's such a lifesaver this week with my early class.",
    time: '10:35 AM',
    fromMe: true,
  },
];

export default function ChatScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const driverName = route?.params?.driverName || 'Driver';

  const renderMessage = ({ item }: any) => (
    <View
      style={[
        styles.message,
        item.fromMe ? styles.fromMe : styles.fromOther,
      ]}
    >
      <Text style={item.fromMe ? styles.textMe : styles.textOther}>
        {item.text}
      </Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER BIEN DESCENDU */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Chat with {driverName}</Text>
      </View>

      {/* MESSAGES */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* INPUT */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.send}>➤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
      ? StatusBar.currentHeight + 10
      : 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },

  backBtn: {
    padding: 6,
    marginRight: 10,
  },

  back: {
    fontSize: 22,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  /* MESSAGES */
  message: {
    maxWidth: '75%',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },

  fromMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B82F6',
  },

  fromOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E7EB',
  },

  textMe: {
    color: '#fff',
  },

  textOther: {
    color: '#111827',
  },

  time: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.6,
  },

  /* INPUT */
  inputRow: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
  },

  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  sendBtn: {
    marginLeft: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },

  send: {
    color: '#fff',
    fontSize: 16,
  },
});
