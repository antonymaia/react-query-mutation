import { StyleSheet, Text, View, TextInput, Button, Image,TouchableOpacity } from "react-native";

export default function Home({navigation}){
    return (
        <View style={styles.container}> 
            <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Image style={styles.icon} source={require('../assets/images/person_add_white.png')}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#363636",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    button: {
        margin: 15,
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: '#868686',
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        width: 70,
        height: 70
    }
})