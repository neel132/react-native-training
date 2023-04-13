import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
const HomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		borderWidth: 5,
		borderColor: 'red',
	},
	listContainer: {
		flex: 0.5,
		borderWidth: 5,
		borderColor: 'green',
	},
	listInnerContainer: {
		minHeight: 40,
		// borderWidth: 1,
	},
	contentContainer: {
		flex: 0.5,
		borderWidth: 5,
		borderColor: 'blue',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	textItem: {
		fontSize: 21,
		textAlign: 'center',
	},
	textColor: {
		color: Colors.secondary,
	},
	floatingText: {
		position: 'absolute',
		top: '45%',
		right: 0,
	}
})

export { HomeStyles};
/*
Flex box - 


*/