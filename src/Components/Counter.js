import React, {useEffect, useState} from "react";
import { Text } from "react-native";
import Strings from "../utils/Strings";

const Counter = (props) => {
	const [counter, setCounter] = useState(props.counter);
	useEffect(() => {
		console.log("calling the useEffect hook");
		setCounter(props.counter);
		return () => {
			console.log("gets called while leaving the stack");
		}
	}, [props.counter]);
	console.log("returning the counter view");
	return (
		<Text style={{fontSize: 30, textAlign: 'center'}}>
			{`${Strings.label} - ${counter}`}
		</Text>
	)
}

export default Counter;