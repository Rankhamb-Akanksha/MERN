import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./component/FirstComponent";
import ContextProvider from "./component/context/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Task_Router/Layout";
import home from "./component/Task_Router/HomePage";
import Information from "./component/Task_Router/Information";
import Contacts from "./component/Task_Router/Contacts";
import Proudcts from "./component/Task_Router/Proudcts";

// import Layout from "./routers/Layout";
import PageOne from "./routers/PageOne";
import PageTwo from "./routers/PageTwo";
import Compo_1 from "./routers/Compo_1";
import Compo_2 from "./routers/Compo_2";
// import Home from "./routers/Home";
import UseReducer from "./component/use Reducer/UseReducer";
//import Parent from "./routers/Parent";
import ReactHooks from "./component/reacthooks/ReactHooks";
import ReactHookForm from "./component/Forms/ReactHookForm";
import SecondComponent from "./component/SecondComponent";
import ParentForm from "./component/Forms/ParentForm";
import TaskForm from "./component/Tasks/TaskForm";
import Parents from "./component/context/Parents";
import TaskParent from "./component/Tasks/TaskParent";
import Store from "./Store";
import { Provider } from "react-redux";
import HomePage from "./component/Task_Router/HomePage";
import TicTacToe from "./component/projects/TicTacToe/TicTacToe";
import LoginForm from "./component/projects/Login Form/LoginForm";
import Header from "./component/Tasks/Header";
import ClassComponent from "./component/Tasks/ClassComponent"


function App() {
  let count = 50;
  let object = {
    name: "John",
    age: 20,
  }
  return (
    <div className="App">
      <Provider store={Store}>
        {/* <FirstComponent /> */}
        {/*  <SecondComponent /> */}
        {/* <ContextProvider /> */}
        {/*<UseReducer /> */}
        {/*<Parent /> */}
        {/*<ReactHooks /> */}
        {/*<ReactHookForm /> */}
        {/* <ParentForm /> */}
        {/*<TaskForm /> */}
        {/* <Parents /> */}
  {/*<TaskParent /> */}
{/*  <TicTacToe /> */}

  {/*<LoginForm /> */}


{/*<Header name="AK" />
<Header name="RK" />
  <Header name="RJ" />*/}

<ClassComponent />

       {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route state={object} Route path="/Component 1" element={<PageOne />} />
            <Route state={object} Route path="/Component 2" element={<PageTwo />} />
          </Route>
        </Routes>
  </BrowserRouter>*/}
  {/* <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout />}/>
  <Route path="/home" element={<HomePage />}/>
  <Route path="/info" element={<Information/>}/>
  <Route path="contacts" element={<Contacts/>}/>
  <Route path="/products" element={<Proudcts/>}/>
  </Routes>
</BrowserRouter> */}

      </Provider>
    </div>
  );
}

export default App;
