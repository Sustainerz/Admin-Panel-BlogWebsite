// import './App.css';

import AllBlogs from './componentsblog/AllBlogs';
import { BlogProvider } from './BlogProvider';
import Header from './componentsblog/Header';
import SideBar from './componentsblog/SideBar';
import Reviews from './componentsblog/Reviews';
import Update from "./componentsblog/Update";
import Comments from './componentsblog/Comments';
import Settings from './components/screens/settings/Settings';
import BlogForm from './componentsblog/postblog';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Footer from './comp/Home/Footer/index';


function Rote() {


  return (
    
      /* <Header />


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


       <Header />



      {/* 
      <Router>
        <SideBar />


        <Switch>

          <Route exact to='/blogpost' component={BlogForm} />
          <Route exact to='/allblogs' component={<AllBlogs />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/comment' element={<Comments />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Switch>



        <Footer />

      </Router> */


      <>
            <Header />


<div className="container">
  <SideBar />
  <BlogProvider>
  <Switch>
  

            <Route exact path="/blogpost" component={BlogForm} />
            <Route exact path="/allblogs" component={AllBlogs} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/update/:id/:slug" component={Update} />
            <Route exact path="/comment" component={Comments} />
            <Route exact path="/settings" component={Settings} />
          
          </Switch>
          </BlogProvider>
        </div>

        <Footer />
      </>




  );
}

export default Rote;
