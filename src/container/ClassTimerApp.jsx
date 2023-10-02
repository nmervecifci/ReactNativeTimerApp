import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'

// CLASS 
class ClassTimerApp extends Component {

    // constructor ile yaparsak
    constructor(props) {
        super(props);

        // STATE
        this.state = {
            counter: 0,
        }

        // BIND
        this.counterTimerStart = this.counterTimerStart.bind(this);
        this.counterTimerStop = this.counterTimerStop.bind(this);
    }

    // constructorsuz yaparsak (State)
    /*
       state = {
        counter: 0,
    }
    */

    // TIMER
    timer = () => {
    }

    // Start
    counterTimerStart = () => {
        // setInterval(function(){}, 1000) //1000ms=1s ==> Sonsuza kadar sürekli çalışır
        // setTimeOut(function(){}, 1000) //1000ms=1s  ==> sadece 1 kere çalışır
        this.timer = setInterval(
            () => this.setState(() => ({ counter: this.state.counter + 1, })),
            1000
        );
    }

    // Stop
    counterTimerStop = () => {
        clearTimeout(this.timer);
    }

    // Reset
    counterTimerReset = () => {
        this.setState(() => ({ counter: 0, }))
        clearTimeout(this.timer);
    }

    // RENDER
    render() {

        // RETURN
        return (
            <View style={styles.container}>
                {/* BUTTON GROUP */}
                <View>
                    <Text style={styles.textStyle}> Timer: {this.state.counter}</Text>
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
    } //end render
} //end class

// CSS
const styles = StyleSheet.create({
    container: {
        // flex-start:sol
        // flex-end: sağ
        // center
        flex: 1,
        alignItems: 'center',     // satır düzleminde (X)
        justifyContent: 'center', // sutun düzleminde (Y)
        backgroundColor: '#000',
    },
    buttonGroup: {
        flexDirection: "row"
    },
    buttonStyle: {
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 12.5,
        height: 40,
        marginRight: 3,
        marginBottom: 10
    },
    textStyle: {
        color: "blue",
        fontSize: 21,
        marginBottom: 10
    }
});

// EXPORT
export default ClassTimerApp