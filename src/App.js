import React, { Component } from 'react';
import logo from './logo.svg';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      selectedIndex: 0,
      contactList: [
        {
          id: 1,
          name: 'Kurt Palmer',
          phoneNumber: '(111) 111-1111'
        },
        {
          id: 2,
          name: 'Jane Watson',
          phoneNumber: '(222) 222-2222'
        }
      ]
    };
  }
  
  handleContactSelected = (contactId) => {
    let selectedIndex;
    let contactObject;
    for(let index = 0; index < this.state.contactList.length; index++) {
      contactObject = this.state.contactList[index];
      
      if(contactId === contactObject.id) {
        selectedIndex = index;
        break;
      }
    }
    
    this.setState({
      selectedContactId: contactId,
      selectedIndex
    });
    
  };
  
  handleContactUpdated = (updatedContact) => {
    
    const copiedContactList = [
      ...this.state.contactList
    ];
  
    copiedContactList[this.state.selectedIndex] = updatedContact;
    
    this.setState({
      contactList: copiedContactList
    });
  };
  
  render() {
    const { contactList, selectedContactId, selectedIndex } = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact List</h1>
        </header>
        <Contacts contactList={contactList}
                  selectedContactId={selectedContactId}
                  selectedContact={this.state.contactList[selectedIndex]}
                  onUpdate={this.handleContactUpdated}
                  onContactSelected={this.handleContactSelected} />
      </div>
    );
  }
}

export default App;
