import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { addUser, editUser } from '../../actions';
import { getUserList } from '../../reducers';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  border: 1px solid black;
  button {
    margin: 10px;
  }
`;
const WrapperRow = styled.div`
   display: flex;
   justify-content: space-between;
    margin: 10px;
    line-height: 28px;
    input {
      width: 300px;
    }
    input.error {
      border-color: red;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  align-items: center;
  padding-top: 100px;
`;

class UserCard extends Component {
  state = {
    firstName: '',
    middleName: '',
    lastName: '',
    errorList: []
  };

  componentDidMount() {
    const { match: { params: { id } }, curState } = this.props;
    const userInfo = curState.userList[id];
    this.setState(userInfo);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { errorList } = this.state;
    const index = errorList.indexOf(name);
    if (value !== '' && index !== -1) {
      errorList.splice(index, 1);
    }
    this.setState({
      [name]: value,
      errorList: errorList
    });
  };
  clearUserInfo = () => {
    this.setState({
      firstName: '',
      middleName: '',
      lastName: ''
    })
  };
  handleAddUser = () => {
    const { firstName, middleName, lastName } = this.state;
    const { addUser, editUser, match: { params: { id } } } = this.props;
    const userObj = { firstName, middleName, lastName };
    const newErrorList = [];
    for (let key in userObj) {
      if (userObj[key] === '') {
        newErrorList.push(key);
      }
    }
    if (newErrorList.length === 0) {
      if (id === 'new-user') {
        addUser(userObj);
        alert('Юзер добавлен');
        this.clearUserInfo();
      } else {
        editUser({ id, userObj });
        alert('Изменения сохранены')
      }
    } else {
      this.setState({ errorList: newErrorList });
      alert('Заполните все поля');
    }
  };

  getClassName = (value) => classNames({ error: this.state.errorList.indexOf(value) !== -1 });

  render() {
    const { firstName, middleName, lastName } = this.state;
    return (
      <Container>
        <div>
          <Link to="/">Вернуться к списку</Link>
          <Wrapper>
            <WrapperRow>
              <span>Фамилия</span>
              <input
                className={this.getClassName('lastName')}
                type="text"
                name="lastName"
                onChange={this.handleChange}
                value={lastName}
              />
            </WrapperRow>
            <WrapperRow>
              <span>Имя</span>
              <input
                className={this.getClassName('middleName')}
                type="text"
                name="middleName"
                onChange={this.handleChange}
                value={middleName}
              />
            </WrapperRow>
            <WrapperRow>
              <span>Отчество</span>
              <input
                className={this.getClassName('firstName')}
                type="text"
                name="firstName"
                onChange={this.handleChange}
                value={firstName}
              />
            </WrapperRow>
            <button onClick={this.handleAddUser}>Сохранить</button>
          </Wrapper>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  curState: getUserList(state)
});
const mapDispatchToProps = {
  addUser,
  editUser
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCard);