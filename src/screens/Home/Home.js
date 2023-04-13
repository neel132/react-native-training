import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { HomeStyles as styles } from './Home.style';

const Home = () => {
  const renderItem = ({item, index}) => {
    return (
			<View style={styles.listInnerContainer}>
				<Text style={[styles.textItem, styles.textColor]}>
					{`Item No. ${index + 1}`}
				</Text>
			</View>
    )
  }
  return (
    <View style={styles.container}>
			<View style={styles.listContainer}>
				<FlatList
					data={[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]}
					renderItem={renderItem}
				/>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.floatingText}>
					<Text>Floating text...</Text>
				</View>
				<Text style={styles.textItem}>1</Text>
				<Text style={styles.textItem}>2</Text>
			</View>
    </View>
  )
}

export default Home;