import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1F25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    name: {
        color: '#FFFFFF',
        fontSize: 16,
        flex: 1,
        marginLeft: 16,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },

    button: {
        backgroundColor: '#E23C44',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});