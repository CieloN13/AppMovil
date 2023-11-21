import React, { useState } from "react";
import {Modal,Text,Button,StyleSheet,View,TextInput,ScrollView,Pressable,Alert} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

const Formulario = ({modalVisible, setModalVisible,pacientes,setPacientes}) => {
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState("");

  const handleCita=()=>{
    if ([paciente,propietario,email,fecha,sintomas,telefono].includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }
    const nuevoPaciente={
      id: Date.now(),
      paciente,
      propietario,
      email,
      fecha,
      telefono,
      sintomas
    }
    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible(false)
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
          <Text style={styles.titulo}>Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          {/*creacion del boton para cerrar el moda*/}
          <Pressable
            style={styles.btnCancelar}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del paciente
              <TextInput
                style={styles.input}
                placeholder="Nombre del paciente "
                placeholderTextColor={"#666"}
                value={paciente}
                onChangeText={setPaciente}
              />
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del propietario
              <TextInput
                style={styles.input}
                placeholder="Nombre del propietario "
                placeholderTextColor={"#666"}
                value={propietario}
                onChangeText={setPropietario}
              />
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Email propietario
              <TextInput
                style={styles.input}
                placeholder="E-mail del propietario"
                placeholderTextColor={"#666"}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono propietario
              <TextInput
                style={styles.input}
                placeholder="Telefono del propietario"
                placeholderTextColor={"#666"}
                keyboardType="number-pad"
                value={telefono}
                onChangeText={setTelefono}
                maxLength={10}
              />
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Fecha
              <View style={styles.FechaContenedor}>
                <DateTimePicker
                  date={fecha}
                  locale="es"
                  mode="date"
                  onValueChange={(date) => setFecha(date)}
                />
              </View>
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Sintomas
              <TextInput
                style={[styles.input, styles.SintomasInput]}
                placeholder="Sintomas paciente"
                placeholderTextColor={"#666"}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
                rows={4}
              />
            </Text>
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
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
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
    textTransform: "uppercase",
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
  FechaContenedor: {
    borderRadius: 10,
  },
});

export default Formulario;