import React,{ReactElement} from 'react';
import { SafeAreaView } from 'react-native';
import {default as Navigator} from './src/navigation/navigator';

const App = ():ReactElement  => {
  return (
      <Navigator/>
  );
};

export default App;