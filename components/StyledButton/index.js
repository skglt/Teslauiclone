import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    // const type=props.type;
    // const content=props.content;
    // const onPress=props.onPress;

    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'secondary' ? '#171A20' : '#FFFFFF';

  return (
      <View style={styles.container}>
        {/* <Text>not just a component</Text> */}
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => {
                onPress()
            }}
        >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
      </View>
  );
};

export default StyledButton;
