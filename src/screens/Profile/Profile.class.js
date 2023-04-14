import React, {Component} from 'react';
import { SafeAreaView, Text } from 'react-native';
import Strings from '../../utils/Strings';
import Button from '../../Components/Button';

// Class approach
class Profile extends Component {
	constructor() {
		super();
		console.log("constructor called -");
		this.state = {
			counter: 0,
		};
	}
	onPress = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}
	
	render() {
		console.log("render method invoked -");
		const {counter} = this.state;
		return (
			<SafeAreaView>
				<Text style={{fontSize: 30, textAlign: 'center'}}>
					{`${Strings.label} - ${counter}`}
				</Text>
				<Button onPress={this.onPress} />
			</SafeAreaView>
		)
	}
	componentDidMount() {
		// setInterval(() => {
		// 	this.setState({
		// 		...this.state,
		// 		counter: this.state.counter + 1
		// 	})
		// }, 1000); // 1000 ms = 1sec
		// It gets called after render method.
		console.log("componentDidMount method invoked -");
	}
	componentWillUnmount() {
		// It gets called whenever component leaves the stack.
		console.log("componentWillUnmount method invoked -");
	}
}

export default Profile;