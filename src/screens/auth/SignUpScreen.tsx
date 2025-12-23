import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export default function SignUpScreen({ navigation }: any) {
  const [role, setRole] = useState<'driver' | 'passenger'>('passenger');

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.appName}>UniCarpool</Text>

      {/* Title */}
      <Text style={styles.title}>Create Your Account</Text>

      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
      />

      {/* Role */}
      <Text style={styles.sectionTitle}>I am a:</Text>

      {/* Driver */}
      <TouchableOpacity
        style={[
          styles.roleCard,
          role === 'driver' && styles.roleSelected,
        ]}
        onPress={() => setRole('driver')}
      >
        <Text style={styles.roleTitle}>🚗 Driver</Text>
        <Text style={styles.roleSubtitle}>Offer rides and earn money.</Text>
      </TouchableOpacity>

      {/* Passenger */}
      <TouchableOpacity
        style={[
          styles.roleCard,
          role === 'passenger' && styles.roleSelected,
        ]}
        onPress={() => setRole('passenger')}
      >
        <Text style={styles.roleTitle}>🧍 Passenger</Text>
        <Text style={styles.roleSubtitle}>
          Find and book affordable rides.
        </Text>
      </TouchableOpacity>

      {/* Continue */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      {/* Login */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Log In
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 20,
  },

  appName: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#3B82F6',
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    backgroundColor: '#F9FAFB',
  },

  sectionTitle: {
    fontWeight: '600',
    marginVertical: 10,
  },

  roleCard: {
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },

  roleSelected: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },

  roleTitle: {
    fontWeight: '600',
    fontSize: 16,
  },

  roleSubtitle: {
    color: '#6B7280',
    marginTop: 4,
  },

  continueButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  continueText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6B7280',
  },

  loginLink: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});
