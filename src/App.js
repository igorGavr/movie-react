import {Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {MoviesListPage} from "./pages/MoviesListPage/MoviesListPage";
import {MoviePage} from "./pages/MoviePage/MoviePage";
import {GenresPage} from "./pages/GenresPage/GenresPage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>}/>
              <Route path={'movies'} element={<MoviesListPage/>}/>
              <Route path={'movie'} element={<MoviePage/>}/>
              <Route path={'genres'} element={<GenresPage/>}/>
          </Route>
      </Routes>

  );
}

export default App;
