import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {
  TextInput,
  Button,
  Paragraph,
  Menu,
  Divider,
  Provider,
} from 'react-native-paper';

export default class HomeScreen extends React.Component {
  state = {
    name: '',
    dataTxt: '',
    type: '',
    visible: false,
  };
  onTypeChanged(value) {
    this.setState({
      type: value,
    });
  }

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  async rememberData() {
    const name = this.state.name;
    const dataTxt = this.state.dataTxt;
    const type = this.state.type;

    if (name !== '' && (dataTxt !== '') & (type !== '')) {
      const data = {
        name: name,
        dataTxt: dataTxt,
        type: type,
      };

      await AsyncStorage.setItem(Date.now().toString(), JSON.stringify(data))
        .then(() => {
          this.props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    } else {
      alert('Please enter some data');
    }
  }
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Text>Add screen</Text>
          <TextInput
            label='Name'
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            label='Data'
            value={this.state.dataTxt}
            onChangeText={(dataTxt) => this.setState({ dataTxt })}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Menu
              visible={this.state.visible}
              onDismiss={this._closeMenu}
              anchor={<Button onPress={this._openMenu}>Show menu</Button>}
            >
              <Menu.Item
                onPress={() => {
                  this._closeMenu();
                  this.setState({ type: 'email' });
                }}
                title='email'
              />
              <Menu.Item
                onPress={() => {
                  this._closeMenu();
                  this.setState({ type: 'website' });
                }}
                title='website'
              />
              <Menu.Item
                onPress={() => {
                  this._closeMenu();
                  this.setState({ type: 'location' });
                }}
                title='location'
              />
              <Menu.Item
                onPress={() => {
                  this._closeMenu();
                  this.setState({ type: 'phone' });
                }}
                title='phone'
              />
              <Menu.Item
                onPress={() => {
                  this._closeMenu();
                  this.setState({ type: 'link' });
                }}
                title='link'
              />
            </Menu>
          </View>
          <Button
            mode='contained'
            onPress={() => {
              this.rememberData();
            }}
            style={{ marginTop: 20 }}
          >
            Remember this
          </Button>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
