import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Register = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.khungChua}>
        <Text style={styles.StyleText}>SFootShop</Text>
        <Text style={styles.StyleText1}>Sạch sẽ - An toàn - Tiện lợi</Text>
      </View>
      <Text style={styles.StyleText2}>Register in your account</Text>

      <View style={styles.containerInput}>

      <View style={styles.input}>
          <Icon name="user" size={15} color="gray" />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#aaa"
            style={{padding: 0, marginStart: 12}}
          />
        </View>


        <View style={styles.input}>
          <Icon name="envelope" size={15} color="gray" />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            style={{padding: 0, marginStart: 12}}
          />
        </View>

        <View style={styles.input}>
          <Icon name="key" size={15} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            style={{padding: 0, marginStart: 12}}
          />
          <Icon name="eye" size={15} color="gray" style={{marginLeft: 160}} />
        </View>


        <View style={styles.input}>
          <Icon name="key" size={15} color="gray" />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#aaa"
            style={{padding: 0, marginStart: 12}}
          />
          <Icon name="eye" size={15} color="gray" style={{marginLeft: 110}} />
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={styles.button1} >
          <Text style={styles.buttonText1}>Hủy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}  style={styles.button} >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
        </View>

       

       
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  khungChua: {
    width: '100%',
    height: '27%',
    backgroundColor: '#2e8b57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  StyleText: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 30,
  },
  StyleText1: {
    color: 'white',
    fontSize: 13,
  },
  StyleText2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginLeft: 35,
  },
  input: {
    color: 'black',
    width: '80%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    width: '40%',
    margin:10,
    marginTop:50,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button1: {
    width: '40%',
    margin:10,
    marginTop:50,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  containerInput: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
