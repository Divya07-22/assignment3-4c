// // // // import './App.css';
// // // // import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // import Header from './component/Header';
// // // // import Home from './pages/Home';
// // // // import Footer from './component/Footer';
// // // // import Gallery from './pages/Gallery';
// // // // import About from './pages/About';
// // // // import Package from './pages/Package';
// // // // import Roombook from './pages/Roombook';
// // // // import Contact from './pages/Contact';





// // // // function App() {

// // // //   return (
// // // //     <>



// // // //       <Router>

// // // //         <Header />
// // // //         <Routes>

// // // //           <Route exact path="/tourism-management-system" element={<Home />} />
// // // //           <Route exact path="/about-us" element={<About />} />
// // // //           <Route exact path="/Package" element={<Package />} />
// // // //           <Route exact path="/Roombook" element={<Roombook />} />
// // // //           <Route exact path="/Gallery" element={<Gallery />} />
// // // //           <Route exact path="/Contact" element={<Contact />} />


// // // //         </Routes>
// // // //         <Footer />
// // // //       </Router>

// // // //     </>
// // // //   );
// // // // }

// // // // export default App



// // // import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// // // import './App.css';
// // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Footer from './component/Footer';
// // // import Header from './component/Header';
// // // import About from './pages/About';
// // // import Contact from './pages/Contact';
// // // import Gallery from './pages/Gallery';
// // // import Home from './pages/Home';
// // // import Login from './pages/Login';
// // // import Package from './pages/Package';
// // // import Roombook from './pages/Roombook';
// // // import guide from './pages/Guide';
// // // import Destination from './pages/Destination';
// // // import Feedback from './pages/Feedback';
// // // import Maps from './pages/Maps';
// // // import Blog from './pages/Blog';
// // // import SignInForm from './pages/SignInForm';

// // // const PrivateRoutes = () => {
// // //   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
// // //   return (
// // //     isLoggedIn ? <Outlet /> : <Navigate to='/login' />
// // //   )
// // // }

// // // function App() {

// // //   return (
// // //     <>
// // //       <Router>
// // //         <Header />
// // //         <Routes>
// // //         <Route exact path="/SignInForm" element={<SignInForm />}/>
// // //           <Route exact path="login" element={<Login />} />
// // //           <Route exact path="/tourism-management-system" element={<Home />} />
// // //           <Route exact path="/blogs" element={<About />} />
// // //           <Route exact path="/destination" element={<Package />} />
// // //           <Route exact path="/about" element={<Gallery />} />
// // //           <Route exact path="/Contact" element={<Contact />} />
// // //           <Route exact path="/guide" element={<guide />} />
// // //           <Route exact path="/Blog" element={<Blog />} />
// // //           <Route element={<PrivateRoutes />}>
// // //           <Route exact path="/Roombook" element={<Roombook />} />
            
// // //           </Route>
// // //         </Routes>
// // //         <Footer />
// // //       </Router>
// // //     </>
// // //   );
// // // }

// // // export default App
// // // App.jsx
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Footer from './component/Footer';
// // import Header from './component/Header';
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Contact from './pages/Contact';
// // import Gallery from './pages/Gallery';
// // import Package from './pages/Package';
// // import Roombook from './pages/Roombook';
// // import Blog from './pages/Blog';
// // import SignInForm from './pages/SignInForm';

// // const PrivateRoutes = () => {
// //   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
// //   return (
// //     isLoggedIn ? (
// //       <>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/gallery" element={<Gallery />} />
// //         <Route path="/package" element={<Package />} />
// //         <Route path="/roombook" element={<Roombook />} />
// //         <Route path="/blog" element={<Blog />} />
// //       </>
// //     ) : null
// //   );
// // };

// // const App = () => {
// //   return (
// //     <Router>
// //       <Header />
// //       <Routes>
// //         <Route path="/signin" element={<SignInForm />} />
// //         <Route path="/" element={<PrivateRoutes />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // };

// // export default App;
// import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import Footer from './component/Footer';
// import Header from './component/Header';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Gallery from './pages/Gallery';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Package from './pages/Package';
// import Roombook from './pages/Roombook';
// import guide from './pages/Guide';
// import Blog from './pages/Blog';
// import SignInForm from './pages/SignInForm';

// const PrivateRoutes = () => {
//   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
//   return (
//     isLoggedIn ? <Outlet /> : <Navigate to='/login' />
//   )
// }

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/SignInForm" element={<SignInForm />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/" element={<PrivateRoutes />} />
//           <Route exact path="/tourism-management-system" element={<Home />} />
//           <Route exact path="/blogs" element={<About />} />
//           <Route exact path="/destination" element={<Package />} />
//           <Route exact path="/about" element={<Gallery />} />
//           <Route exact path="/Contact" element={<Contact />} />
//           <Route exact path="/guide" element={<guide />} />
//           <Route exact path="/Blog" element={<Blog />} />
//           <Route element={<PrivateRoutes />}>
//             <Route exact path="/Roombook" element={<Roombook />} />
//           </Route>
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login';
import Package from './pages/Package';
import Roombook from './pages/Roombook';
import Guide from './pages/Guide';
import Blog from './pages/Blog';
import SignInForm from './pages/SignInForm'; // Import the sign-in page component
import PrivateRoutes from './pages/PrivateRoutes';
// const PrivateRoutes = () => {
//   const isLoggedIn = sessionStorage.getItem('isLoggedIn');
//   return (
//     isLoggedIn ? <Outlet /> : <Navigate to='/login' />
//   )
// }

// import { Navigate, Outlet } from 'react-router-dom';

// import React from 'react';
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/login' element={<SignInPage />} />
//         <Route element={<PrivateRoutes />}>
//           <Route path='/home' element={<HomePage />} />
//           {/* Add more protected routes here */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };





function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/SignInForm" element={<SignInForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />} />
          <Route exact path="/tourism-management-system" element={<Home />} />
          <Route exact path="/blogs" element={<About />} />
          <Route exact path="/destination" element={<Package />} />
          <Route exact path="/about" element={<Gallery />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/guide" element={<Guide />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/Roombook" element={<Roombook />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
