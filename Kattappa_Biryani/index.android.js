
import React from 'react';
import { AppRegistry} from 'react-native';
import App from './App';

export default class RootComponent extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return  <App/>
      
  }

}

AppRegistry.registerComponent('Kattappa_Biryani', () => RootComponent);
