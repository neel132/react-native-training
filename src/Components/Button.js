import React from "react"
import {
  TouchableOpacity,
	Text,
} from 'react-native'

const Button = (props) => {
	// Always destructure inside a component.
	// Props can be anything, value, function, component.
	const {
		onPress,
		label, // Also can use default value as label = "Add"
	} = props;
	if(!label) return null; // Conditional Rendering
	return (
		<TouchableOpacity
			onPress={onPress}
		>
			<Text
				style={{fontSize: 30, textAlign: 'center', borderWidth: 0.4}}
			>
			{label}
			</Text>
		</TouchableOpacity>
	)
}

export default Button;