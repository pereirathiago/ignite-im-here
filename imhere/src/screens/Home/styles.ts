import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
  
    eventName: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
      marginTop: 8
    },

    input: {
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 12,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        backgroundColor: '#31CF62',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },

    emptyListText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    }
  });
