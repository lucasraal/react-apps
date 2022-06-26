import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((users) => {
          return (
            <li key={users.id}>
              {users.username} ({users.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
