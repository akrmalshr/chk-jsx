import './App.css';
import car from "./car.jpg";

function App(){
  return (
    <div className="App">

<h1 className="title red">akram</h1>
<br />

<img src={car} />
<br/>
<img src = "./max.jpg"/>
<br/>
<img src = "./img.jpg"/>
<br/>
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>



<br/>








</div>

);
}




export default App;
 