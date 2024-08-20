import MainLayout from "./components/layout/MainLayout";
import { Provider } from 'react-redux'
import { store } from "./redux/store";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <div>
    <Provider store={store}>
    <ProtectedRoute role={undefined}>
    <MainLayout></MainLayout>
    </ProtectedRoute>
    </Provider>
    </div>
  );
}

export default App;
