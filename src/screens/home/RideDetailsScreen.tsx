import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
   Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RideDetailsScreen({ route }: any) {
  const navigation = useNavigation<any>();
  const ride = route?.params?.ride;

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

        <Text style={styles.title}>Ride Details</Text>
      </View>

      {/* DRIVER INFO */}
      <View style={styles.card}>
        <Text style={styles.name}>{ride?.name}</Text>
        <Text style={styles.driver}>Driver ⭐ {ride?.rating}</Text>
      </View>

      {/* RIDE INFO */}
      <View style={styles.card}>
        <Text style={styles.info}>⏰ {ride?.time}</Text>
        <Text style={styles.info}>📍 {ride?.from}</Text>
        <Text style={styles.info}>📍 {ride?.to}</Text>
      </View>

      {/* SEATS & PRICE */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Available Seats</Text>
          <Text style={styles.value}>{ride?.seats}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Cost per passenger</Text>
          <Text style={styles.value}>{ride?.price}</Text>
        </View>
      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.outlineBtn}
          onPress={() =>
            navigation.navigate('Chat', {
              driverName: ride?.name,
            })
          }
        >
          <Text style={styles.outlineText}>Message Driver</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => Alert.alert('Booking confirmed!')}
        >
          <Text style={styles.primaryText}>Confirm Booking</Text>
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

  /* CONTENT */
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    margin: 16,
    marginBottom: 0,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  driver: {
    color: '#6B7280',
    marginTop: 4,
  },

  info: {
    marginTop: 6,
    color: '#374151',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },

  label: {
    color: '#6B7280',
  },

  value: {
    fontWeight: '700',
    color: '#2563EB',
  },

  /* ACTIONS */
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },

  outlineBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
  },

  outlineText: {
    color: '#3B82F6',
    fontWeight: '600',
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
});
