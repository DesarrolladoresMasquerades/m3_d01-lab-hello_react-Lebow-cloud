import "./4images.css"
import image1 from "../../images/icon1.png"
import image2 from "../../images/icon2.png"
import image3 from "../../images/icon3.png"
import image4 from "../../images/icon4.png"



export default function LittleImages (){
    return(

      <ul className = "ulContainer">
        <div>
          <img src={image1}/>
            <h2>Declarative</h2>
              <p>React Makes it paintless to create interactive UIs</p>
        </div>
        <div>
          <img src={image2}/>
            <h2>Components</h2>
              <p>Build encapsulated components that mage their state</p>
        </div>
        <div>
          <img src={image3}/>
            <h2>Single-Way</h2>
              <p> A ser of immutable values are passed to the component's</p>
        </div>
        <div>
          <img src={image4}/>
            <h2>JSX</h2>
              <p>Statically-typed designed to run on modern browsers</p>
        </div>
     
          
      </ul>
    )
}