import './styles/style.css';
import './styles/responsive.css';
import { Image } from './components/Image';
import { Content } from './components/Content';

function App() {
  return (
    <div className="container">
      <Image />
      <Content />
    </div>
  );
}

export default App;
