import MainLayout from "./components/layout/MainLayout";
import { Provider } from 'react-redux'
import { store } from "./redux/store";

function App() {
  return (
    <div>
    <Provider store={store}>
      <MainLayout></MainLayout>
    </Provider>
    </div>
  );
}

export default App;
