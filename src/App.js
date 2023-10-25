import './App.css';
import Routing from './Routing';
import "bootstrap/dist/css/bootstrap.min.css";
import './Styles/index.scss'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "lightgallery.js/dist/css/lightgallery.css";
// import "lightgallery.js/dist/css/lightgallery.min.css";
import 'lightgallery.js/src/sass/lightgallery.scss'
import LayoutIndex from './pages/layout/LayoutIndex';
function App() {
  return (
    <div className="app sidebar-mini ltr light-mode">
      <div className="page">
        <div className="page-main">
        <LayoutIndex />
          <Routing />
        </div>
      </div >
    </div>
  );
}

export default App;
