// import './App.css';
import AllBlogs from './componentsblog/AllBlogs';
import Header from './componentsblog/Header';
import SideBar from './componentsblog/SideBar';
import Reviews from './componentsblog/Reviews';
import Update from "./componentsblog/Update";
import Comments from './componentsblog/Comments';
import Settings from './componentsblog/Settings';
import BlogForm from './componentsblog/postblog';
import { Route, Switch } from 'react-router-dom';
import Footer from './comp/Home/Footer/index';
import { BlogProvider } from './BlogProvider';


function Rote() {
  
  
  return (
    <div className="App">

      <Header />


      <div className="container">
        <SideBar />
        <BlogProvider>
        <Switch>
        
          <Route path= '/blogpost' element={<BlogForm/>}></Route>
          <Route path='/allblogs' element={<AllBlogs />}></Route>
          <Route path='/update/:slug/:id' element={<Update />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/comment' element={<Comments />}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        
        </Switch>
        </BlogProvider>
      </div>

      <Footer/>



    </div>
  );
}

export default Rote;
