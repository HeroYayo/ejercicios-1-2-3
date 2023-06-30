import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import { Contact } from '../models/contact.class';
import { PropTypes } from 'prop-types';
class ContactContainer extends Component {
    constructor(contact) {
        super(contact);
        this.contact = new Contact(); 
    }
    
    render() {
        return (
            <div>
                <ContactInfo contact={this.contact}></ContactInfo>
            </div>
        );
    }
}
ContactContainer.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    online: PropTypes.bool,
};
export default ContactContainer;
