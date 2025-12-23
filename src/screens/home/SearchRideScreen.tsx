import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const rides = [
  {
    id: '1',
    name: 'Alice Johnson',
    rating: 4.8,
    time: '08:30 AM',
    from: 'University Main Campus',
    to: 'City Center Mall',
    seats: 2,
    price: '5.50€',
  },
  {
    id: '2',
    name: 'Bob Williams',
    rating: 4.7,
    time: '12:30 PM',
    from: 'Engineering Faculty',
    to: 'Downtown Campus',
    seats: 3,
    price: '3.75€',
  },
];

export default function SearchRideScreen() {
  const navigation = useNavigation<any>();

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const renderRide = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.rowBetween}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>

      <Text style={styles.info}>🕒 {item.time}</Text>
      <Text style={styles.info}>👥 {item.seats} seats</Text>

      <Text style={styles.location}>📍 {item.from}</Text>
      <Text style={styles.location}>📍 {item.to}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.price}>{item.price} / person</Text>

        <TouchableOpacity
          style={styles.bookBtn}
          onPress={() =>
            navigation.navigate('RideDetails', { ride: item })
          }
        >
          <Text style={styles.bookText}>Book Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Search Rides</Text>
      </View>

      {/* FILTERS */}
      <View style={styles.container}>
        <TouchableOpacity style={styles.input}>
          <Text>📍 Starting Point</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text>📍 Destination</Text>
        </TouchableOpacity>

        {/* DATE */}
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDate(true)}
        >
          <Text>
            📅 {date ? date.toDateString() : 'Select Date'}
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
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTime(true)}
        >
          <Text>
            ⏰{' '}
            {time
              ? time.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : 'Select Time'}
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

        {/* RESULTS */}
        <FlatList
          data={rides}
          keyExtractor={(item) => item.id}
          renderItem={renderRide}
          showsVerticalScrollIndicator={false}
        />
      </View>
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

  backBtn: {
    padding: 6,
    marginRight: 10,
  },

  back: {
    fontSize: 22,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
  },

  container: {
    flex: 1,
    padding: 16,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  rating: {
    color: '#F59E0B',
    fontWeight: '600',
  },

  info: {
    marginTop: 4,
    color: '#374151',
  },

  location: {
    marginTop: 6,
    color: '#374151',
  },

  price: {
    fontWeight: '700',
    color: '#2563EB',
  },

  bookBtn: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  bookText: {
    color: '#fff',
    fontWeight: '600',
  },
});
