import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native'

// FUNCTION
function FunctionTimerApp() {

    // STATE
    const [counter, setCounter] = useState(0);

    // TIMER
    let timer;

    // Start
    counterTimerStart = () => {
        // setInterval(function(){}, 1000) //1000ms=1s ==> Sonsuza kadar sürekli çalışır
        // setTimeOut(function(){}, 1000) //1000ms=1s  ==> sadece 1 kere çalışır
        this.timer = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

    }

    // Stop
    counterTimerStop = () => {
        clearTimeout(this.timer);
    }

    // Reset
    counterTimerReset = () => {
        setCounter(0);
        clearTimeout(this.timer);
    }

    // RETURN
    return (
        <View style={styles.container}>
            {/* BUTTON GROUP */}
            <View>
                <Text style={styles.textStyle}> Timer: {counter}</Text>
            </View>

            {/* Button Group */}
            <View style={styles.buttonGroup}>
                {/* BUTTON (Start) */}
                <TouchableOpacity style={styles.buttonStyle} onPress={this.counterTimerStart}>
                    <Text style={styles.textStyle}> Start</Text>
                </TouchableOpacity>

                {/* BUTTON (Stop) */}
                <TouchableOpacity style={styles.buttonStyle} onPress={this.counterTimerStop}>
                    <Text style={styles.textStyle}> Stop</Text>
                </TouchableOpacity>

                {/* BUTTON (Reset) */}
                <TouchableOpacity style={styles.buttonStyle} onPress={this.counterTimerReset}>
                    <Text style={styles.textStyle}> Reset</Text>
                </TouchableOpacity>

            </View>
        </View>
    ) //end return
}

// CSS
const styles = StyleSheet.create({
    container: {
        // flex-start:sol
        // flex-end: sağ
        // center
        flex: 1,
        alignItems: 'center',     // satır düzleminde (X)
        justifyContent: 'center', // sutun düzleminde (Y)
        backgroundColor: '#fff',
    },

    buttonGroup: {
        flexDirection: "row"
    },

    buttonStyle: {
        backgroundColor: 'blue',
        padding: 2,
        borderRadius: 12.5,
        height: 40,
        marginRight: 3,
        marginBottom: 10
    },

    textStyle: {
        color: "black",
        fontSize: 21,
        marginBottom: 10
    }
});

// EXPORT
export default FunctionTimerApp