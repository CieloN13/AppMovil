import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import Formulario from "./assets/components/Formulario";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes,setPacientes] =useState([])
  console.log(modalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas <Text style={styles.tituloid}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>
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
  tituloid: {
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
});