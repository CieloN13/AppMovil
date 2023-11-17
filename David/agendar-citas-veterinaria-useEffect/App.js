
import { Text, View, StyleSheet, Pressable, Modal, } from "react-native";
import React, { useState, useEffect } from "react";

import Formulario from "./src/components/Formulario";
import Paciente from "./src/components/Paciente";
import { FlatList } from "react-native-web";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes]=useState([])
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El botón "Nueva cita" ha sido presionado ${contador} veces.`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => {
          setModalVisible(!modalVisible);
          setContador(contador+1);
        }}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>
      {pacientes.length===0?
        <Text style={styles.noPacientes}>No hay pacientes aun</Text>:
        <FlatList
        data={pacientes}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return(
            <Paciente
              item={item}
            />
          )
        }}
        />
      }
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#374151",
    textAlign: "center",
  },
  tituloBold: {
    fontWeight: 900,
    color: "#6D28D9",
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: 900,
    textTransform: "uppercase",
  },
  noPacientes: {	
  marginTop: 40,
  textAlign:'center',
  fontSize: 24,
  fontWeight: '600',
  }
});
