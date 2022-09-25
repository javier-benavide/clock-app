import React, {useState, useEffect} from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';

const TimerScreen = () => {
    
    //cronometro

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
    }

    const handlePause = () => {
        setIsActive(false);
    }

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    }

    //funcion para el timer
    
    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer((timer: any) => timer + 10);
            }, 10);
        } else if (!isActive && !isPaused) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused]);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{timer}</Text>
            <View style={styles.buttonContainer}>
                <TouchableNativeFeedback onPress={handleStart}
                    background={TouchableNativeFeedback.Ripple('#000', false,35)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Empezar</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={handlePause}
                    background={TouchableNativeFeedback.Ripple('#000', true)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Parar</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={handleReset}
                    background={TouchableNativeFeedback.Ripple('#000', true)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Resetear</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

// estilos para los botones
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#264653',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        color: '#e9c46a',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#e9c46a',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
    }
});

export default TimerScreen
