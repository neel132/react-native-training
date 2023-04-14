import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Strings from '../../utils/Strings';
import Button from '../../Components/Button';

/*

State - State is mutable
Props - Props is immutable

*/

// Functional approach
const Profile = () => {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log("calling of useEffect hook");
	})
	console.log("returning the view");
	const onPress = () => {
		setCounter(counter + 1);
	}
	return (
		<SafeAreaView>
			<Text style={{fontSize: 30, textAlign: 'center'}}>
				{`${Strings.label} - ${counter}`}
			</Text>
			<Button label={Strings.add} onPress={onPress} />
		</SafeAreaView>
	)
}

export default Profile;