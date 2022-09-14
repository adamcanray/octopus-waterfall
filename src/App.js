import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/landing/HomePage';
import BerandaPage from './components/beranda/BerandaPage';
import ProfilePage from './components/beranda/ProfilePage';
import LoginPage from './components/landing/LoginPage';
import RegisterPage from './components/landing/RegisterPage';
import AboutPage from './components/landing/AboutPage';
import ContactPage from './components/landing/ContactPage';
import Footer from './components/content/ContentFooter';
import QuotesDetail from './components/quotes/QuoteDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/beranda" component={BerandaPage} />
          <Route path="/quote/:quote_id" component={QuotesDetail} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
