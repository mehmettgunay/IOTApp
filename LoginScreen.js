import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ onLogin }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://s3-alpha-sig.figma.com/img/fe4b/e05b/9534cbcf2964e75e28e6efcb733925b9?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz0azeZeqdNMBmq60Jm7FFgmdsPUGtEOcVEpDE7ZOyx030MZIe555dl0-iylxT7nleJWXPqbouKBrJYvT6WRWmgHVU8PQohP~F3bBbjEHPjqtwEVevcxk6ris7CVpRgDjHEF2dq7N6gQst0UJx7e2vZuPq6rYVYsdT0XWJmR7~dPURyLwPJ3ZJV2b23O1XtidfdMNvzNjclRhy54Ie8ef0oE1DbBYEv9C8z~HaKQJ3Zbgv~2PRQ0kFQPlaikSl23X2GLJgtq45MGpSEkEzTMNX3gZq292KxiEDZArN2uEja4UHC2YDOS9t3QAHZgxxhHngYRilv6QHVavQDMDOun2w__' }}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SAMPLE</Text>
        <Text style={styles.subtitle}>IOT APP</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.signInText}>Sign In</Text>

          <View style={styles.inputBox}>
            <Icon name="email-outline" size={20} color="#FFA500" />
            <TextInput placeholder="Email ID" placeholderTextColor="#FFF" style={styles.input} />
          </View>

          <View style={styles.inputBox}>
            <Icon name="lock-outline" size={20} color="#FFA500" />
            <TextInput placeholder="Enter Password" placeholderTextColor="#FFF" style={styles.input} secureTextEntry />
          </View>

          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>Don't have an account yet? <Text style={styles.linkText}>Create an account</Text></Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  signInText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#FFA500',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
