import React from 'react';
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

const rides = [
  {
    id: '1',
    name: 'Alice Johnson',
    time: '08:00 AM',
    from: 'University Central Campus',
    to: 'Downtown Library',
    seats: 2,
    price: '€3.50',
  },
  {
    id: '2',
    name: 'Bob Smith',
    time: '04:30 PM',
    from: 'Student Dorms, North Wing',
    to: 'City Mall',
    seats: 3,
    price: '€5.00',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    time: '10:15 AM',
    from: 'Engineering Faculty',
    to: 'Cafeteria South',
    seats: 1,
    price: '€2.00',
  },
];

export default function HomeScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const role = route?.params?.role || 'Passenger';

  const renderRide = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Profile')}
    >
      <View style={styles.rowBetween}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      <Text style={styles.driver}>Driver</Text>

      <Text style={styles.location}>📍 {item.from}</Text>
      <Text style={styles.location}>📍 {item.to}</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.seats}>👥 {item.seats} seats left</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER BIEN DESCENDU */}
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.bell}>🔔</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.sub}>
          Connected as: {role}
        </Text>

        {/* ACTIONS */}
        <View style={styles.actions}>
          {role === 'Passenger' && (
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => navigation.navigate('SearchRide')}
            >
              <Text style={styles.searchText}>🔍 Search Ride</Text>
            </TouchableOpacity>
          )}

          {role === 'Driver' && (
            <TouchableOpacity
              style={styles.createBtn}
              onPress={() => navigation.navigate('CreateRide')}
            >
              <Text style={styles.createText}>＋ Create Ride</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* SECTION */}
        <Text style={styles.sectionTitle}>Upcoming Rides</Text>

        {/* LIST */}
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

  /* HEADER */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  title: {
    fontSize: 22,
    fontWeight: '700',
  },

  bell: {
    fontSize: 20,
  },

  container: {
    flex: 1,
    padding: 16,
  },

  sub: {
    color: '#6B7280',
    marginBottom: 12,
  },

  actions: {
    marginBottom: 16,
  },

  searchBtn: {
    borderWidth: 1.5,
    borderColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  searchText: {
    color: '#3B82F6',
    fontWeight: '600',
  },

  createBtn: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  createText: {
    color: '#fff',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontWeight: '700',
    fontSize: 16,
  },

  time: {
    color: '#3B82F6',
    fontWeight: '600',
  },

  driver: {
    color: '#6B7280',
    marginVertical: 4,
  },

  location: {
    marginTop: 4,
    color: '#374151',
  },

  seats: {
    color: '#6B7280',
    marginTop: 10,
  },

  price: {
    marginTop: 10,
    fontWeight: '700',
  },
});
