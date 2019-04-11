import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface IContainerProps {
  background: string;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props:IContainerProps) => props.background ? props.background : 'white'};
`;
const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {};
interface State {};

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container background="red">
        <MainText>Hello world!</MainText>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
