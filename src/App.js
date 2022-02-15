import React from "react";
import Welcome from "./1.components/class/Welcome";
import { WelcomeOne } from "./1.components/class/WelcomeOne";
import Greet from "./1.components/function/Greet";
import { Named } from "./1.components/function/Named";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";

function App() {
  function sample(){
    return "Hello"
  }
  return (
    <div>
      <Greeting title="Mr.Scott" skill="Great Boss" />
      <Greeting title="Mr.Adam" skill="Business Analyst"/>
      <Greeting title="Mr.Tuan" skill="Tech Boss"/>
      <GreetingOne title="Mr.Uma" skill="Javascript Developer" />
      <GreetingTwo title="Mr.Scott" 
                    skill="Great Boss" 
                    sample={sample} 
                    count={2}
                    isAdmin={true}
                    colors = {["red", "blue", "green"]}
      />
      {/* <Greet />
      <Named />
      <Welcome />
      <WelcomeOne />
      <Hello /> */}
    </div>
  );
}

export default App;
