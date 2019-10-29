import React from "react";
import { Modal, Button } from "../src";

export default {
  title: "Modal"
};

class ModalTestComponent extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state;

    return (
      <>
        <Modal open={open} close={() => this.setState({ open: false })}>
          <h1>Modal Test</h1>
        </Modal>
        <Button onClick={() => this.setState({ open: true })}>
          Open modal
        </Button>
      </>
    );
  }
}

export const ModalTest = () => <ModalTestComponent />;
