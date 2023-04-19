import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { HomeStyles as styles } from './Home.style';
import { getEmployeeData } from '../../server_apis/employee_apis';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../../App';

const Home = () => {
	const [employeeData, setEmployeeData] = useState([]);
	const {value} = useSelector(state => state.counter);
	// const theme = useContext(ThemeContext);
	// console.log("Value of Theme Context on Home Component => ", theme);
	console.log("Reading Value from Home Component => ", value);
	useEffect(() => {
		getEmployeeData().then(employees => {
			console.log("employees -", employees?.length);
			if(employeeData?.length === 0 && employees) { // Business Logic
				setEmployeeData(employees)
			}
		});
	}, [employeeData]);
  const renderItem = ({item}) => {
		console.log("Render Item List -", item);
    return (
			<View style={styles.listInnerContainer}>
				<Text style={[styles.textItem, styles.textColor]}>
					{`Employee Name - ${item.employee_name}`}
				</Text>
			</View>
    )
  }
	console.log("employeeData => ", employeeData);
  return (
    <View style={styles.container}>
			<FlatList
				data={employeeData}
				renderItem={renderItem}
			/>
    </View>
  )
}

export default Home;