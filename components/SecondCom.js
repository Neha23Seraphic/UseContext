import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { FirstName, LastName } from './App';


const SecondCom = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <View style={{
            flex: 1, alignContent: 'center',
            justifyContent: 'center', fontWeight: 'bold'
        }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                My Lorem Paragraph
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                My FirstName is {fname}
            </Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                My LastName is {lname}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>
                Lorem Ipsum has been the industry's standard dummy
                ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting,
                essentially unchanged.
            </Text>
        </View>
    )
}

export default SecondCom;




