import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Image, Text } from 'react-native'



export default class ListItem extends React.Component {
    render() {
        const { result } = this.props;
        return (
            <Touchable
                key={key}
                style={styles.option}
                background={Touchable.Ripple('#ccc', false)}
                onPress={() => this.handlePress(result.link)}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.optionIconContainer}>
                        <Image
                            source={require('../assets/images/pdf-icon.png')}
                            resizeMode="contain"
                            fadeDuration={0}
                            style={{ width: 20, height: 20, marginTop: 1 }}
                        />
                    </View>
                    <View style={styles.optionTextContainer}>
                        <Text style={styles.optionText}>
                            {result.title}
                        </Text>
                    </View>
                </View>
            </Touchable>
        )
    }
}