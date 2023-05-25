import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [password1, onChangePassword1] = React.useState('');
  const [telefone, onChangeTelefone] = React.useState('');
  const [nome, onChangeNome] = React.useState('');

  return (
    <View style={styles.container}>
      <img src={require('./assets/logo.png')} />
      <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 25,}}>Boas vindas!</Text>
      <Text style={styles.texto}>Crie sua conta e use o espaço para comprar {"\n"}     itens variados e vender seus produtos</Text>
      <img style={{marginBottom: 20}} src={require('./assets/cadastro.png')} />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNome}
        value={nome}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeTelefone}
        value={telefone}
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
        onChangeText={onChangePassword1}
        value={password1}
        placeholder="Confirmar Senha"
      />

      <TouchableOpacity style={styles.criar}>Criar</TouchableOpacity>

      <Text style={{marginTop: 25}}>Já tem uma conta?</Text>
      <TouchableOpacity style={styles.login}>Ir para login</TouchableOpacity>

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
  criar: {
    backgroundColor: '#000',
    color: '#fff',
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
    alignItems: 'center',
  },
  login: {
    backgroundColor: '#d9d8da',
    color: '#000',
    width: 250,
    height: 40,
    padding: 10,
    borderRadius: 7,
    marginTop: 5,
    alignItems: 'center',
  },
});
