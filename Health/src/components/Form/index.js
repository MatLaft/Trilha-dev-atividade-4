import React, { useState } from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc/";

export default function Form(){
    
const [height,setHeight ]= useState(null)
const [weigth,setWeigth ]= useState(null)
const [messageImc,setMessageImc ]= useState('Preencha o peso e altura')
const [imc,setImc]= useState(null)
const [textButton,setTextButton ]= useState('Calcular')
    
function imcCalculator(){
    return setImc((weigth/Math.pow(height,2)).toFixed(2))
}

function validationImc(){
    if(weigth != null && height!= null){
        imcCalculator()
        setHeight(null)
        setWeigth(null)
        setMessageImc('Seu imc e igual:')
        setTextButton('Calcular Novamente')
        return
    }
    setImc(null)
    setTextButton('Calcular')
    setMessageImc('Preencha o peso e altura')
}
    return(
      <View>
        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value = {height}
            placeholder='Ex. 1.75'
            keyboardType=''
            />
            <Text>Peso</Text>
            <TextInput 
            onChangeText={setWeigth}
            value = {weigth}
            placeholder='Ex. 82.30'
            keyboardType=''
            />
            <Button 
            onPress={()=>validationImc()}
            title={textButton}/>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
      </View>
    );
}