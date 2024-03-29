import React, { useState } from "react";
import { FlatList, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert('Participante existe ', 'Já existe um participante com esse nome na lista')
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')

  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de presença?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 23 de fevereiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* 
      * ScrollView renderiza todos os componentes, mesmo que não estejam visíveis na tela
      * FlatList renderiza apenas os componentes que estão visíveis na tela
      */}

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={(
          <Text style={styles.emptyListText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presança.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        } 
      </ScrollView> */}
      
    </View>
  );
}
