import React, { useEffect, useState } from "react";

const UserList = (props) => {
  const [filter, setFilter] = useState(props.children);
  const onChange = (e) => {
    console.log(e.target.value);
    console.log(
      props.children.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilter(
      props.children.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setFilter(props.children);
  }, [props.children]);

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return props.childred;
  };
  const userSearch = getSearch();

  return (
    <>
      {props.search && (
        <div className="row s12">
          <form className="col s12">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <textarea
                id="icon_prefix2"
                className="materialize-textarea"
                placeholder="Search"
                onChange={onChange}
              ></textarea>
            </div>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.children &&
            userSearch.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>
                  <i
                    className="material-icons"
                    onClick={() => {
                      props.deleteUser(user.id);
                    }}
                  >
                    delete
                  </i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
