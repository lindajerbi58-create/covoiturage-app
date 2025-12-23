import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

export default function CreateRideScreen() {
  const navigation = useNavigation<any>();

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [seats, setSeats] = useState<number>(1);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Post New Ride</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Starting Point */}
        <Text style={styles.label}>Starting Point</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter starting location"
        />

        {/* Destination */}
        <Text style={styles.label}>Destination</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter destination"
        />

        {/* DATE */}
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDate(true)}
        >
          <Text>
            {date ? date.toDateString() : 'Select date'}
          </Text>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="calendar"
            onChange={(event, selectedDate) => {
              setShowDate(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}

        {/* TIME */}
        <Text style={styles.label}>Time</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTime(true)}
        >
          <Text>
            {time
              ? time.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : 'Select time'}
          </Text>
        </TouchableOpacity>

        {showTime && (
          <DateTimePicker
            value={time || new Date()}
            mode="time"
            display="clock"
            onChange={(event, selectedTime) => {
              setShowTime(false);
              if (selectedTime) setTime(selectedTime);
            }}
          />
        )}

        {/* SEATS */}
        <Text style={styles.label}>Available Seats</Text>
        <View style={styles.seatsRow}>
          {[1, 2, 3, 4].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.seatBtn,
                seats === num && styles.seatSelected,
              ]}
              onPress={() => setSeats(num)}
            >
              <Text
                style={[
                  styles.seatText,
                  seats === num && styles.seatTextSelected,
                ]}
              >
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* COST */}
        <Text style={styles.label}>Cost per passenger</Text>
        <TextInput
          style={styles.input}
          placeholder="Optional cost"
          keyboardType="numeric"
        />

        {/* ADD BUTTON */}
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() =>
            Alert.alert(
              'Success',
              `Ride added\nDate: ${date?.toDateString()}\nTime: ${time?.toLocaleTimeString()}\nSeats: ${seats}`,
              [{ text: 'OK', onPress: () => navigation.goBack() }]
            )
          }
        >
          <Text style={styles.addText}>➕ Add Ride</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

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

  back: {
    fontSize: 22,
    marginRight: 12,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  container: {
    padding: 16,
  },

  label: {
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  seatsRow: {
    flexDirection: 'row',
    marginTop: 6,
  },

  seatBtn: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  seatSelected: {
    backgroundColor: '#3B82F6',
  },

  seatText: {
    fontWeight: '600',
    color: '#3B82F6',
  },

  seatTextSelected: {
    color: '#fff',
  },

  addBtn: {
    marginTop: 30,
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
