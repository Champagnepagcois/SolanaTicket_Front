import AppRouter from "./routes/AppRouter";
import configureStore from "./redux/store/configureStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
