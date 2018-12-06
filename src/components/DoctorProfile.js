import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
// import Popup from "reactjs-popup";
import { Button, Header, Image, Modal } from "semantic-ui-react";



class DoctorProfile extends React.Component {
  state = {
    open: false
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    let style = {
      background: "#00B4AC"
    }

    let space = {
      padding: '10em'
    }

    return (
      <div>
        <Button
          className="ui blue button"
          style={style}
          onClick={this.show("blurring")}
        >
        Contact
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{this.props.docProfile.first_name} {this.props.docProfile.last_name}</Modal.Header>

          <Modal.Content image>
          <Image space={space} wrapped size='small' src='./bdcard.png' />
            <Modal.Description>
              <Header>Address:</Header>
              <address >
                {this.props.docProfile.street}, <br/>
                <span>{this.props.docProfile.city} {this.props.docProfile.state}</span>
                  {this.props.docProfile.zipcode}
              </address>
              <h5>Phone:  {this.props.docProfile.phone}</h5>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Close"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default DoctorProfile;
