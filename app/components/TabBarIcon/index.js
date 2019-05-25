import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const index = name => ({ tintColor }) => (
    <Icon
        style={{ backgroundColor: 'transparent' }}
        name={name}
        color={tintColor}
        size={24}
    />
);

export default index;
