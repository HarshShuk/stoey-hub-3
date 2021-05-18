import React from 'react';
import { Stylesheet, View, Text} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Read Story</Text>
            </View>
        )
    }
}

const styles = Stylesheet.create({
    color: 'orange'
})