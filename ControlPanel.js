import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlPanel = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.controlTitle}>Control Panel</Text>
      
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/fc88/ad86/145ae3279c300625af88adb1763ba6f8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuMG7ViTDtktpvirG6BJpmCUO2WbdmRBL0S5I6SJO94~brGSTrlbGPIQt~tQ-CBmlNfI72HVZcXI6biDsLUgv7qxKFk8Byqu-3Uq9--rCR6Tkfvz-BKiJntBdn--i08bDySBOHt0G7eRFAP6GRsoenUrHg5d3IkzIKTkHHeOONKgEeTL0kd3mm4CxUX5bLKhnKOgnAkAfWTrw8wpytn3CcF70ElmwYRUfNFT9gcQqaw1hCBIEondpu6QQlpraiNG5mBGDvR174rXHK6ozD8c-QsavVMSV-oeJVwnafjLBuk108j9BUzSgbUs-exvaF9SI7q7lAbmYebcR8LkTu0itg__' }}
          style={styles.fanImage}
        />
        <Text style={styles.fanLabel}>Black Ceiling Fan</Text>

        <View style={styles.speedContainer}>
          <Icon name="fan" size={20} color="#FFA500" />
          <Text style={styles.speedText}>20</Text>
          <Icon name="fan" size={20} color="#FFA500" />
        </View>

        <View style={styles.powerControl}>
          <Text style={styles.lowText}>Low</Text>
          <TouchableOpacity style={styles.powerButton}>
            <Icon name="power" size={40} color="#FFA500" />
          </TouchableOpacity>
          <Text style={styles.highText}>High</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    padding: 20,
  },
  controlTitle: {
    color: '#AAA',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 1,
  },
  fanImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  fanLabel: {
    color: '#FFA500',
    fontSize: 20,
    marginVertical: 10,
  },
  speedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  speedText: {
    color: '#FFA500',
    fontSize: 24,
    marginHorizontal: 10,
  },
  powerControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  lowText: {
    color: '#FFA500',
  },
  highText: {
    color: '#FFA500',
  },
  powerButton: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 50,
  },
  backButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  backButtonText: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default ControlPanel;
