import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import logo from ''

import { styles } from './styles';

const batLogo = require('../../../assets/logoYellow.jpeg')
export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={batLogo} style={{resizeMode:'contain', height:280}} />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.textButton}>
                Activate bat signal  
                </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
}