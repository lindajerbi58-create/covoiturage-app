import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const pastRides = [
  {
    id: '1',
    from: 'University Campus',
    to: 'City Center Mall',
    date: '24 Oct 2023',
    time: '08:00 AM',
    price: '€5.00',
  },
  {
    id: '2',
    from: 'Student Dorms',
    to: 'Science Faculty',
    date: '20 Oct 2023',
    time: '09:30 AM',
    price: '€3.50',
  },
];

export default function ProfileScreen() {
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState<'Passenger' | 'Driver'>('Passenger');
  const [editing, setEditing] = useState(false);
  const rating = 4.9;

  const renderRide = ({ item }: any) => (
    <View style={styles.rideCard}>
      <Text style={styles.route}>
        📍 {item.from} → {item.to}
      </Text>
      <View style={styles.rowBetween}>
        <Text>📅 {item.date}</Text>
        <Text>⏰ {item.time}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity onPress={() => setEditing(!editing)}>
          <Text style={styles.edit}>✏️</Text>
        </TouchableOpacity>
      </View>

      {/* Profile card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
          style={styles.avatar}
        />

        {editing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}

        <Text style={styles.role}>User type: {role}</Text>

        <Text style={styles.rating}>⭐ {rating}</Text>

        {/* Role switch */}
        <TouchableOpacity
          style={styles.roleBtn}
          onPress={() =>
            setRole(role === 'Passenger' ? 'Driver' : 'Passenger')
          }
        >
          <Text style={styles.roleBtnText}>
            Switch to {role === 'Passenger' ? 'Driver' : 'Passenger'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Past rides */}
      <Text style={styles.section}>Past Rides</Text>

      <FlatList
        data={pastRides}
        keyExtractor={(item) => item.id}
        renderItem={renderRide}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  edit: {
    fontSize: 18,
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: '#3B82F6',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },

  role: {
    color: '#6B7280',
    marginTop: 4,
  },

  rating: {
    marginTop: 6,
    color: '#2563EB',
    fontWeight: '600',
  },

  roleBtn: {
    marginTop: 12,
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  roleBtnText: {
    color: '#fff',
    fontWeight: '600',
  },

  section: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  rideCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },

  route: {
    fontWeight: '600',
    marginBottom: 6,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  price: {
    marginTop: 6,
    fontWeight: '700',
  },
});
