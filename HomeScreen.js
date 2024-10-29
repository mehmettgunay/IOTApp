import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ onFanPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Sweet Home</Text>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>22°C</Text>
          <Text style={styles.label}>Avg House Temp</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>60°F</Text>
          <Text style={styles.label}>Outside Temp</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>60 %</Text>
          <Text style={styles.label}>PPP</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>3</Text>
          <Text style={styles.label}>Devices</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Room</Text>
      <View style={styles.roomContainer}>
        <TouchableOpacity style={styles.roomBox}><Text style={styles.roomText}>Master Bedroom</Text></TouchableOpacity>
        <TouchableOpacity style={styles.roomBox}><Text style={styles.roomText}>Bedroom</Text></TouchableOpacity>
        <TouchableOpacity style={styles.roomBox}><Text style={styles.roomText}>Kids Room</Text></TouchableOpacity>
        <TouchableOpacity style={styles.roomBox}><Text style={styles.roomText}>Drawing Room</Text></TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Routines</Text>
      <View style={styles.routineContainer}>
        <TouchableOpacity style={styles.routineBox}><Icon name="weather-sunny" size={24} color="#FFA500" /><Text style={styles.routineText}>Morning</Text></TouchableOpacity>
        <TouchableOpacity style={styles.routineBox}><Icon name="exit-to-app" size={24} color="#FFA500" /><Text style={styles.routineText}>Out</Text></TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Device in Use</Text>
      <View style={styles.deviceContainer}>
        <TouchableOpacity onPress={onFanPress}>
          <Icon name="fan" size={24} color="#FFA500" style={styles.deviceIcon} />
        </TouchableOpacity>
        <Icon name="lightbulb-outline" size={24} color="#FFA500" style={styles.deviceIcon} />
        <Icon name="air-conditioner" size={24} color="#FFA500" style={styles.deviceIcon} />
        <Icon name="fridge-outline" size={24} color="#FFA500" style={styles.deviceIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    padding: 20,
  },
  header: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    width: '45%',
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    color: '#FFF',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  roomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  roomBox: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    marginBottom: 10,
  },
  roomText: {
    color: '#FFA500',
    fontSize: 14,
  },
  routineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  routineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  routineText: {
    color: '#FFA500',
    fontSize: 14,
    marginLeft: 8,
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  deviceIcon: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
  },
});

export default HomeScreen;
