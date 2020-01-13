const App = function () {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function () {
  // Zadanie 7
  for(let domain of this.websites) {
    this.links.push(`https://${domain}.com`);
  }
}


let app = new App();
app.generateLinks();
console.log(app.links)
