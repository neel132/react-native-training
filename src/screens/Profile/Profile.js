import React, {useEffect} from 'react';
import { SafeAreaView, Text } from 'react-native';

/*

State - State is mutable
Props - Props is immutable

*/

// Functional approach
const Profile = () => {
	useEffect(() => {
		console.log("calling of useEffect hook");
	})
	console.log("returning the view");
	return (
		<SafeAreaView>
			<Text style={{fontSize: 30, textAlign: 'center'}}>
				Profile Screen
			</Text>
		</SafeAreaView>
	)
}

export default Profile;