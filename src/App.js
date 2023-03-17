import Header from './components/Header/Header';
import Content from './pages/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
// import seed from './data/seed';
// seed();
function App() {
  return (
    <div className={ `d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
