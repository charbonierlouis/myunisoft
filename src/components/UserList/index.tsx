import React from "react";
import { Table, Loader } from "../../ui";
import { User } from "../../types";
import { userListToUserTableData } from "../../tools";

const UserList = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const header = ["Name", "Age", "Dev", "Company", "Years", "Features"];

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Pompette/technical_test/master/users.json"
    )
      .then((response) => response.json())
      .then((response: { users: Array<User> }) => {
        setUsers(response.users);
      });
  }, []);

  return (
    <div className="table-container">
      {users ? (
        <Table data={userListToUserTableData(users)} header={header} />
      ) : (
        <Loader size="fa-10x" />
      )}
    </div>
  );
};

export default UserList;
