import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Login = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.khungChua}>
        <Text style={styles.StyleText}>SFootShop</Text>
        <Text style={styles.StyleText1}>Sạch sẽ - An toàn - Tiện lợi</Text>
      </View>
      <Text style={styles.StyleText2}>Login in your account</Text>

      <View style={styles.containerInput}>
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
        <View>
          <Text style={{marginLeft: 150, marginTop: 15}}>Forgot password?</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainNavigation')}
          style={styles.button}>
          <Text style={styles.buttonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <View style={styles.chuaOr}>
          <View style={styles.line} />
          <Text style={styles.text}>Or login with</Text>
          <View style={styles.line} />
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity>
            <View style={styles.shadow}>
              <Text style={styles.bold}>Google</Text>
              <Icon
                name="google"
                size={15}
                color="black"
                style={{position: 'absolute', left: 15}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.shadow}>
              <Text style={styles.bold}>Facebook</Text>
              <Icon
                name="facebook"
                size={15}
                color="blue"
                style={{position: 'absolute', left: 15}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginTop: 40, color: 'black'}}>
            Bạn có muốn tạo tài khoản không?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{marginTop: 40, color: 'green', fontWeight: 'bold'}}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    width: '70%',
    marginTop: 50,
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chuaOr: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
  },
  shadow: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 150,
    height: 45,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  containerInput: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
