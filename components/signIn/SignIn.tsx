import React from "react";
import { StyleSheet, Text ,View} from "react-native";

const SignUp = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                SignIn page
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    text:{
        color:'#000000',
        fontSize:40,
    }
});


export default SignUp;