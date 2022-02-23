import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import AuthRoute from "./components/AuthRoute";
import { Main } from "./App.style";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          {routes.map((item) => {
            if (item.meta && item.meta.isAuth) {
              return <AuthRoute key={item.name} {...item} />;
            } else {
              return <Route exact key={item.name} {...item} />;
            }
          })}
        </Switch>
      </Main>
    </>
  );
}

export default App;
