import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
    visibleAlert: false
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false
      });
    }
  }

  handleCancel = () => {
    this.setState({
      visibleAlert: true
    });
  }

  handleConfirm = () => {
    this.setState({
      value: '',
      visibleButtons: false,
      visibleAlert: false
    });
  }

  handleReturn = () => {
    this.setState({
      visibleAlert: false
    })
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
        <div className={styles.alert + (this.state.visibleAlert ? ' ' + styles.alertShown : '')}>
          <h3>Are you sure you want to cancel?</h3>
          <Button onClick={this.handleConfirm}>Yes</Button>
          <Button onClick={this.handleReturn} variant='danger'>No</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
