import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
