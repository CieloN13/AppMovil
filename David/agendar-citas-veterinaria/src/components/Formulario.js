
import React, { useState } from "react";
import {Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes}) => {
  const [fecha, setFecha] = useState(new Date());
  const [Paciente, setPaciente] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Sintomas, setSintomas] = useState("");

const handleCita=()=>{
  if ([Paciente,Propietario,Email,Telefono,Sintomas].includes('')){
    Alert.alert(
      'Error',
      'Todos los campos son iblogatorios'
    )
    return
  }
  const nuevoPaciente={
    id: Date.now(),
    Paciente,
    Propietario,
    Email,
    Telefono,
    fecha,
    Sintomas
  }
  setPacientes([...pacientes, nuevoPaciente])
  setModalVisible(!modalVisible)

  setPaciente('')
  setPropietario('')
  setEmail('')
  setTelefono('')
  setFecha(new Date())
  setSintomas('')
}

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del paciente
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Paciente "
                placeholderTextColor={"#666"}
                value={Paciente}
                onChangeText={setPaciente}
              />
            
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del propietario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Propietario "
                placeholderTextColor={"#666"}
                value={Propietario}
                onChangeText={setPropietario}
              />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Email propietario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#666"}
                keyboardType="Email-address"
                value={Email}
                onChangeText={setEmail}
              />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono propietario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Telefono"
                placeholderTextColor={"#666"}
                keyboardType="number-pad"
                value={Telefono}
                onChangeText={setTelefono}
              />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Fecha
              </Text>
              <View style={styles.FechaContenedor}>
                <DateTimePicker
                  date={fecha}
                  locale="es"
                  mode="date"
                  onValueChange={(date) => setFecha(date)}
                />
              </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Sintomas
            </Text>
              <TextInput
                style={[styles.input, styles.SintomasInput]}
                placeholder="Sintomas"
                placeholderTextColor={"#666"}
                value={Sintomas}
                onChangeText={setSintomas}
                multiline={true}
                rows={4}
              />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#6D28D9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  FechaContenedor: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  SintomasInput: {
    height: 100,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase,",
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default Formulario;