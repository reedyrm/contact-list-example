import React, { Component, Fragment } from 'react';
import ContactList from './ContactList';
import EditContact from './EditContact';


class Contacts extends Component {
  
  render() {
    const { contactList, selectedContact, selectedContactId } = this.props;
    
    return (
      <Fragment>
        <div>
          <ContactList contactList={contactList} onContactSelected={this.props.onContactSelected} selectedContactId={selectedContactId}/>
        </div>
        <hr />
        <EditContact contact={selectedContact} onUpdate={this.props.onUpdate} />
      </Fragment>
    );
  }
}

export default Contacts;
