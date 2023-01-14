import logo from "./logo.svg";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Statistics from "./Layout/Pages/Statistics/Statistics";
import Topics from "./Layout/Pages/Topics/Topics";
import About from "./Layout/Pages/About/About";
import Questions from "./Layout/Pages/Questions/Questions";
import ErrorPage from "./Layout/Pages/ErrorPage/ErrorPage";
import Profile from "./Layout/Pages/Profile/Profile";

// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout></Layout>}
      errorElement={<ErrorPage></ErrorPage>}
    >
      <Route
        path="/"
        element={<Topics />}
        loader={async () => fetch("quiz.json")}
      />
      <Route
        path="/statistics"
        element={<Statistics></Statistics>}
        loader={async () => fetch("quiz.json")}
      />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/:id"
        element={<Questions></Questions>}
        loader={async ({ params }) => {
          const res = await fetch(`quiz.json`);

          const data = await res.json();
          console.log(data);

          const topic = data.find((d) => d.data.id === +params.id);
          return topic;
        }}
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
