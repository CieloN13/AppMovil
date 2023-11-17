import React from 'react';
import {Text} from 'react-native';

const Paciente = ({item})=>{
    const {paciente,fecha}=item
    return(
        <Text>{paciente}</Text>
    )
}
export default Paciente