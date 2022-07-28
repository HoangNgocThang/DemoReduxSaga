import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeCount } from '../../redux/actions/countAction';
import { testFetchDataRequest } from '../../redux/actions/testAction';

const HomeScreen = (props) => {
    const count = useSelector((state) => state.countReducer.count);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>HomeScreen</Text>
            <Text>{count}</Text>
            <TouchableOpacity
                onPress={() => {
                    dispatch(changeCount(1))
                }}>
                <Text>CLick</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    dispatch(testFetchDataRequest(1))
                }}
            >
                <Text>FETCH DATA</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

export default HomeScreen;
