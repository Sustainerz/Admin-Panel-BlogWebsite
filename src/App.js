import './App.css';
import AllBlogs from './components/AllBlogs';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Reviews from './components/Reviews';
import Update from "./components/Update";
import Comments from './components/Comments';
import Settings from './components/Settings';
import BlogForm from './components/postblog';
import { Route, Routes } from 'react-router-dom';
import Footer from './components1/Home/Footer/index';
import { BlogProvider } from './BlogProvider';


function App() {
  
  
  return (
    <div className="App">

      <Header />


      <div className="container">
        <SideBar />
        <BlogProvider>
        <Routes>
        
          <Route path= '/blogpost' element={<BlogForm/>}></Route>
          <Route path='/allblogs' element={<AllBlogs />}></Route>
          <Route path='/update/:slug' element={<Update />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/comment' element={<Comments />}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        
        </Routes>
        </BlogProvider>
      </div>

      <Footer/>



    </div>
  );
}

export default App;
