import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-web';



export default function App() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
       <img src={require('./assets/logo.png')} />
      <Text style={styles.fonte}>marketspace</Text>
      <Text style={styles.fonte2}>Seu espaço de compra e venda</Text>

      <Text style={styles.acesso}>Acesse sua conta</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Senha"
      />

      <TouchableOpacity style={styles.login}>Entrar</TouchableOpacity>
      <SafeAreaView style={styles.container2}>
        <Text style={styles.acess}>Ainda não tem acesso?</Text>
        <TouchableOpacity style={styles.signin}>Criar uma conta</TouchableOpacity>
      </SafeAreaView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edecee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120
  },
  fonte: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  fonte2: {
    fontSize: 16,
    color: '#9b999f',
    marginBottom: 70,
  },
  acesso: {
    fontSize: 15,
    marginBottom: 15,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#9b999f',
    borderRadius: 7,
    width: 250,
  },
  login: {
    backgroundColor: '#6879c1',
    color: '#fff',
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  signin: {
    backgroundColor: '#d9d8da',
    color: '#000',
    width: 250,
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    padding: 10,
  },
  container2: {
    marginTop: 40,
  },
  acess: {
    marginBottom: 15,
    marginLeft: 50,
  }
});
