import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, View, Button, Pressable, Modal} from 'react-native';

const App = () => {

  const [clientes, setClientes] = useState([])
  

  const nuevaCitaHandler = () => {
    console.log("Diste click");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={(styles.tituloBold)}>Veterinaria</Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPressIn={
          nuevaCitaHandler
        }
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      <Modal
        animationType='slide'
        visible = {false}
      >
        <Text>Desde modal</Text>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#F3F4F6",
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: "#6D28D9"
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,

  },
  btnTextoNuevaCita: {
    fontSize: 20,
    fontWeight : '900',
    textAlign: 'center',
    color: 'white',
    textTransform : 'uppercase'
  },
});

export default App;
