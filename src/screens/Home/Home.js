import React from 'react';
import { FlatList, Text } from 'react-native';
import { HomeStyles as styles } from './Home.style';

const Home = () => {
  const renderItem = ({item, index}) => {
    return (
      <Text style={[styles.textItem, styles.textColor]}>
        {`Item No. ${index + 1}`}
      </Text>
    )
  }
  return (
    <FlatList
      data={[1, 2, 3, 4]}
      renderItem={renderItem}
    />
  )
}

export default Home;