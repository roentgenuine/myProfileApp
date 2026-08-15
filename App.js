import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* 1. Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to My Profile!</Text>
      </View>

      {/* 2. Profile Information */}
      <View style={styles.profileSection}>
        <Image
          source={require('./assets/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Roentgen Compra</Text>
        <Text style={styles.intro}>
          Hi! I'm a BSIT Student who love playing and building dreams. I enjoy learning something new every day.
        </Text>
      </View>

      {/* 3. Interests */}
      <View style={styles.interestsSection}>
        <Text style={styles.sectionTitle}>My Interests</Text>
        <Text style={styles.interestItem}>🎮 Playing online games</Text>
        <Text style={styles.interestItem}>🎬 Watching movies</Text>
        <Text style={styles.interestItem}>💻 Learning programming</Text>
        <Text style={styles.interestItem}>📚 Reading books</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDE3E9',
    width: '100%',
    marginBottom: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4A90E2',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 8,
  },
  intro: {
    fontSize: 14,
    color: '#5D6D7E',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  interestsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDE3E9',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  interestItem: {
    fontSize: 15,
    color: '#34495E',
    marginBottom: 8,
    paddingLeft: 5,
  },
});