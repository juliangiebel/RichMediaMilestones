/*jshint esversion: 6 */
// --Meine get library aus einem vorherigem Projekt-----------------------------
// ----Written is javascript using ES6

/**Requests a file as plain text from the server.
 * @param {string} url The url of the file to be loaded.
 * @returns {Promise} The Promise handling the response from the XMLHttpRequest.
 */
function get(url){
  return new Promise(function(resolve,reject){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",url,true);
    //React to response
    xhttp.onload = function() {
          if (xhttp.status == 200) {
              resolve(xhttp.responseText);
         }else{
           reject(Error(xhttp.statusText));
         }
      };
    //Handle network errors
    xhttp.onerror = function() {
      reject(Error("Network Error src: " + url));
    };
    //Make the request
    xhttp.send();
  });
}

/**Requests a JSON file from the server.
 * Adds an extra step to the {@link get} function, parsing the response into a JSON object.
 * @param {string} url The url of the file to be loaded.
 * @returns {Promise} A promise handling the response from the XMLHttpRequest.
 */
function getJson(url){
  console.log(url);
  return get(url).then(JSON.parse).catch(function(err){
    return Promise.reject(Error("Error while parsing a file. "+err.message));
  });
}

//Not needed
// function getImage(url) {
//   return new Promise(function(resolve, reject){
//     var mg = new Image();
//     mg.src = url;
//     mg.onload = function(){
//       resolve(mg);
//     }.bind(this);
//     mg.onerror = function() {
//       reject(Error("Couldn't load: "+url));
//     };
//   });
// }

function createSequence(list,promise) {
  var promises = [];
  list.forEach((item)=>{promises.push(promise(item));});
  return Promise.all(promises);
}

//------------------------------------------------------------------------------

//--Carousel.js--

const GALLERY_PATH = "../resources/gallery.json";
//Aus zeitgründen lade ich nicht eine json datei fpr die liste der bilder
class Carousel {

  constructor(imgpath ,jsonpath, leftButton, rightButton, outElement) {


    this.currentPos = 0;

    this.path = imgpath;
    this.imglist = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

    this.element = outElement;

    $(leftButton).click(this.left.bind(this));
    $(rightButton).click(this.right.bind(this));

    this.changeImg();
  }

  left(){
    console.log(Math.max((this.currentPos-1,0)));
    this.currentPos = Math.max((this.currentPos-1),0);
    this.changeImg();
  }

  right(){
    console.log("right");
    this.currentPos = Math.min((this.currentPos+1),this.imglist.length-1);
    this.changeImg();
  }

  changeImg(){
    console.log("url('"+this.path+this.imglist[this.currentPos]+"')");
    $(this.element).css("background-image", "url('"+this.path+this.imglist[this.currentPos]+"')");
  }

}

//----------------------------------

var carousel;

$("document").ready(function() {
  // Setup imglist:
  //imglist = getJson(GALLERY_PATH);
  carousel = new Carousel("resources/pictures/","","#js-carousel-left","#js-carousel-right", "#js-carousel");
});
