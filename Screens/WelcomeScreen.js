import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        return alert(
          'Successfully Logined the user'
        );
      })
      .catch((error) =>{
        return alert(
          'Something Went Wrong'
        );
      });
    this.setState({
      emailId: '',
      password: '',
    });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        return alert(
          'Congratulations ! Now you can use the application with the email and password.'
        );
      })
     .catch((error) =>{
        return alert(
          'Something Went Wrong'
        );
      });
    this.setState({
      emailId: '',
      password: '',
    });
  };

  render() {
    return (
      <View style={styles.allData}>
        <Text style={styles.header}>
          <u>
            <b>Barter System</b>
          </u>
        </Text>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://permaculturenoosa.com.au/wp-content/uploads/2019/05/Barter-Systems.png',
          }}
        />
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email here"
            placeholderTextColor="black"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter the password here"
            placeholderTextColor="black"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allData: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  header: {
    fontFamily: 'britannic',
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#ffc700',
    margin: 5,
    border: 'dashed',
  },
  imageIcon: {
    width: 300,
    height: 210,
    border: 'dashed',
    alignSelf: 'center',
    marginTop: 10,
  },
  textInput: {
    width: '90%',
    height: 40,
    border: 'dashed',
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontFamily: 'britannic',
    marginTop: 10,
    fontSize: 18,
  },
  buttonText: {
    fontFamily: 'britannic',
    fontSize: 20,
    textAlign: 'center',
    padding: 6,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ffc700',
    marginLeft: 10,
    border: 'dashed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});