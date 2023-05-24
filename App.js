import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';



export default function App() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <img src={require('./assets/logo.png')} />
      <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 25,}}>Boas vindas!</Text>
      <Text style={styles.texto}>Crie sua conta e use o espaço para comprar {"\n"}     itens variados e vender seus produtos</Text>
      <img style={{marginBottom: 20}} src={require('./assets/cadastro.png')} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Telefone"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Senha"
      />
            <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Confirmar Senha"
      />

<TouchableOpacity style={styles.login}>Criar</TouchableOpacity>

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
  texto:{
    marginBottom: 15,
    marginTop: 5,
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
    backgroundColor: '#000',
    color: '#fff',
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
});
