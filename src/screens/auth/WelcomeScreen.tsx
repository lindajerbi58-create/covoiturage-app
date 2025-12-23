import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />

      {/* Illustration */}
      <Image
        source={require('../../assets/images/carpool.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 70,
    height: 70,
    marginTop: 40,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 260,
    marginBottom: 40,
  },

  signUpButton: {
    width: '100%',
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  signUpText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  loginButton: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  loginText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },
});
