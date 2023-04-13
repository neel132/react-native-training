import React from 'react';
import { FlatList, Text } from 'react-native';

const App = () => {
  const renderItem = ({item, index}) => {
    console.log("Render item -", item);
    return (
      <Text style={{fontSize: 21, textAlign: 'center'}}>
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

export default App;