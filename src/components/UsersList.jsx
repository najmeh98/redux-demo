import { useEffect } from "react";
import { fetchUsers } from "./redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";

export default function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>
        {state.loading ? (
          <p>loading ...</p>
        ) : state.error ? (
          <p>{state.error}</p>
        ) : (
          <div>
            {state.data &&
              state.data.map((item) => <li key={item.id}>{item.name}</li>)}
          </div>
        )}
      </h2>
    </div>
  );
}
