import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';



export default function App() {

  return (
    <View style={styles.container}>
      <img style={styles.bike} src={require('./assets/bike.png')} />

        <View>
          <img src={require('./assets/avatar.png')} />
          </View>

      <Text>Makenna Beptista</Text>
      <Text style={{fontWeight: 'bold', backgroundColor: '#d9d8da', borderRadius: 5}}>Novo</Text>
      <Text style={{fontWeight: 'bold'}}>Bicicleta</Text>
      <Text>R$ 120,00</Text>
      <Text>Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh
            mauris mauris accumsan, euismod. Aenean leo
            nunc, purus iaculis in aliquam.</Text>

      <Text style={{fontWeight: 'bold'}}>Aceita troca?</Text>
      <Text>Sim</Text>
      <Text style={{fontWeight: 'bold'}}>Meios de pagamento: </Text>
      <MaterialIcon name="qr-code-scanner" size={30} color="#000" />
      <MaterialIcon name="qr-code" size={30} color="#000" />
      <FontAwesome name="money" size={30} color="#000" />
      <Icon name="creditcard" size={30} color="#000" />
      <MaterialC name="bank-outline" size={30} color="#000" />

      <Text>R$ 120,00</Text>
      <TouchableOpacity>Entrar em contato</TouchableOpacity>

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
  bike: {
    height: 250,
  },
});
