import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Passenger */}
      <TouchableOpacity
        style={styles.btnPassenger}
        onPress={() =>
          navigation.replace('Home', { role: 'Passenger' })
        }
      >
        <Text style={styles.btnText}>Login as Passenger</Text>
      </TouchableOpacity>

      {/* Driver */}
      <TouchableOpacity
        style={styles.btnDriver}
        onPress={() =>
          navigation.replace('Home', { role: 'Driver' })
        }
      >
        <Text style={styles.btnText}>Login as Driver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 40,
  },

  btnPassenger: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  btnDriver: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 12,
  },

  btnText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});
