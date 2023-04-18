import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Strings from '../../utils/Strings';
import Button from '../../Components/Button';
import Counter from '../../Components/Counter';
import NavigationKeys from '../../navigation/keys';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, setCounter } from '../../reducers/counterReducer';

/*

State - State is mutable
Props - Props is immutable

*/

// Functional approach
const Profile = (props) => {
	const {navigation, route} = props;
	const {value} = useSelector(state => state.counter);
	const dispatch = useDispatch();
	console.log("counterFromReducer => ", value);
	// const [counter, setCounter] = useState(0);
	/*
		1. If we pass empty dependency array that means it will run once
		2. If we provide dependency array then it will run only if dependency changes
		3. When there is no dependency passed that means it will run always
		4. If we provide return function to useEffect it will act as componentWillUnmount
	*/
	const onPress = () => {
		// setCounter(counter + 1);
		dispatch(incrementCounter());
	}
	const onDecrement = () => {
		dispatch(decrementCounter());
	}
	const setValue = () => {
		dispatch(setCounter({value: 10}));
	}
	const navigateTo = () => {
		navigation.navigate(NavigationKeys.home);
	}
	return (
		<SafeAreaView>
			<Counter counter={value} />
			<Button label={Strings.add} onPress={onPress} />
			<Button label={Strings.sub} onPress={onDecrement} />
			<Button label={Strings.setValue} onPress={setValue} />
			<Button label={Strings.navigateToHome} onPress={navigateTo} />
		</SafeAreaView>
	)
}

export default Profile;