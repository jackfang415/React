import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 constructor(props) {
   super(props);
 }

 handleImgClick() {
   console.log("you got clicked")
 }

shuffle(a) {
   //looping and moving objects from being next to eachother to shuffle/sorting
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
 }

  render() {
    let parkPicture = ["http://img12.deviantart.net/0270/i/2011/121/9/9/mysterion_by_xxjo_11xx-d3fbdll.png", "http://pre00.deviantart.net/bd30/th/pre/f/2013/288/6/8/south_park_action_pose___the_coon_3_by_megasupermoon-d6qkkm1.jpg", "http://t.wallpaperweb.org/wallpaper/miscellaneous/1024x768/APBSouthParkProfessorChaos.jpg", "https://vignette.wikia.nocookie.net/southpark/images/b/b8/Professor-chaos.png/revision/latest?cb=20170304221320", "https://vignette.wikia.nocookie.net/spsot/images/e/e9/Spfbw-humankite.png/revision/latest?cb=20171020183945", "https://vignette.wikia.nocookie.net/southpark/images/9/92/Latest-24.png/revision/latest?cb=20170530124855"]

     const imageArray = []

      parkPicture.map((links) => {

        const pushArray = (<img src = {links} onClick = {this.handleImgClick}></img>)

        imageArray.push(pushArray)

      });

    return (

      <div>
        
        {imageArray}

      </div>
    );
  }
}

export default App;
