import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Strings from '../../utils/Strings';
import Button from '../../Components/Button';
import Counter from '../../Components/Counter';

/*

State - State is mutable
Props - Props is immutable

*/

// Functional approach
const Profile = () => {
	const [counter, setCounter] = useState(0);
	/*
		1. If we pass empty dependency array that means it will run once
		2. If we provide dependency array then it will run only if dependency changes
		3. When there is no dependency passed that means it will run always
		4. If we provide return function to useEffect it will act as componentWillUnmount
	*/
	const onPress = () => {
		setCounter(counter + 1);
	}
	return (
		<SafeAreaView>
			<Counter counter={counter} />
			<Button label={Strings.add} onPress={onPress} />
		</SafeAreaView>
	)
}

export default Profile;