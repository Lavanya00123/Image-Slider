import ImgSlider from './Components/ImgSlider';
import './App.css';
import Img1 from './Images/Img1.jpg' 
import Img2 from './Images/Img2.jpg'
import Img3 from './Images/Img3.jpg'

const slides=[
  {
    id: 1,
    src: Img1
  }, 
  {
    id: 2,
    src: Img2
  }, 
  {
    id: 3,
    src: Img3
  }, 
]


function App() {
  return (
    <div>
     <ImgSlider slides={slides}/>
    </div>
  );
}

export default App;
