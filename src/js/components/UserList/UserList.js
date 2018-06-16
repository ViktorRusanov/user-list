import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { getUserList } from '../../reducers';
import { deleteUser } from '../../actions';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  width: 600px;
  ul {
    display: flex;
    list-style: none;
  }
  li {
   margin: 10px;
   border: 1px solid black;
   padding: 10px;
  }
  li.active {
    background: lightgrey;
   }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
     border: 1px solid black;
     padding: 4px;
    }
  td:first-child {
    width: 30px;
  }
    td:last-child {
    width: 30px;
  }
`;

class UserList extends Component {
  state = {
    offset: 10
  }
  handleClick = (id) => {
    const { history } = this.props;
    history.push(`/${id}`);
  }
  handleDelete = (id) => {
    this.props.deleteUser(id);
  }

  handlePageClick = (data) => {
    let selected = (data.selected + 1);
    let offset = selected * 10;

    this.setState({ offset: offset });
  };

  render() {
    const { offset } = this.state;
    const { curState } = this.props;
    const userList = curState && curState.userList;
    let content = null;
    let pageCount = 1;
    if (Array.isArray(userList)) {
      const min = offset - 10;
      const max = offset;
      pageCount = Math.ceil(userList.length / 10);
      content = userList.map((item, index) => {
        if (index >= min && index < max) {
          const { lastName, firstName, middleName } = item;
          const fio = `${lastName} ${firstName} ${middleName}`;
          return (
            <tr key={index}>
              <td>
                <button onClick={() => this.handleDelete(index)}>Удалить</button>
              </td>
              <td>{fio}</td>
              <td>
                <button onClick={() => this.handleClick(index)}>Редактировать</button>
              </td>
            </tr>
          )
        }
      });
    }
    return (
      <Container>
        <Wrapper>
          <Link to="/new-user">Добавить нового юзера</Link>
          <Table>
            <tbody>
            {content}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"Предыдущая"}
            nextLabel={"Следующая"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  curState: getUserList(state)
});

const mapDispatchToProps = {
  deleteUser
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);