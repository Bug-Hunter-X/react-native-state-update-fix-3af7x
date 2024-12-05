```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    // Correct way to update state
    setCount(prevCount => prevCount + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={handlePress} />
    </View>
  );
};

export default MyComponent;
```