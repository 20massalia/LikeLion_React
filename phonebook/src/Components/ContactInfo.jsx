import React, { Component } from 'react';

export default class ContactInfo extends Component {
    render() {
        return (
            <ul>
                <li>
                    <div>{this.props.contact.name}</div>
                    <div>{this.props.contact.phone}</div>
                </li>
            </ul>
        );
    }
}
