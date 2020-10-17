import React from "react";
import PageWrapper from "../UI/wrapper/pageWrapper";
import axios from "axios";
import queryString from "query-string";
import Pagination from "react-bootstrap/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./SearchForm.css";
import Avatar from "react-avatar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
    this.onSort = this.onSort.bind(this);
  }

  onSort(event, sortKey) {
    const data = this.state.persons;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ persons: data });
  }

  searchHandler = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    const { persons } = this.state;

    return (
      <PageWrapper>
        <h2 class="text-center mt-2 text">simple table in React</h2>
        <input
          type="text"
          id="myInput"
          onKeyUp={() => this.searchHandler()}
          placeholder="Search for id..."
          title="Type in a name"
        >
          {/* <FontAwesomeIcon icon={faSearch} style={{ color: "#0066ff" }} /> */}
        </input>
        <table class="table table-hover table-bordered" id="myTable">
          <thead>
            <tr class="table-primary text-center">
              <th>Id</th>
              <th></th>
              <th>
                Name
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "#0066ff" }}
                  onClick={(e) => this.onSort(e, "name")}
                />
              </th>
              <th>Username</th>
              <th>
                email
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "#0066ff" }}
                  onClick={(e) => this.onSort(e, "email")}
                />
              </th>
              <th>phone</th>
              <th>
                Company
                <FontAwesomeIcon
                  icon={faSort}
                  style={{ color: "#0066ff" }}
                  onClick={(e) => this.onSort(e, "website")}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {persons.length > 0 ? (
              persons.map((persons, index) => {
                return (
                  <tr key={index}>
                    <td>{persons.id}</td>
                    <td>
                      <Avatar name={persons.name} size={45} round={true} />
                    </td>
                    <td>{persons.name}</td>
                    <td>{persons.username}</td>
                    <td>{persons.email}</td>
                    <td>{persons.phone}</td>
                    <td>{persons.website}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination defaultCurrent={6} total={500} />
      </PageWrapper>
    );
  }
}
