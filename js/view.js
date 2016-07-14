var Viewz = function () {
    this.container = document.querySelector('#main-container');
    this.state = 'HOME';
    this.home = '<h1> Home Is Where The Heart Is </h1>';
    this.mini = '<p> Minizzz </p>';
    this.full = '<p> FULL </p>';
var View = function () {
  this.HTML = '<p> The HTML Skeleton</p';
};

View.prototype.buildHTML = function () {
  document.querySelector('body').appendChild('<div id="hios-main-container"></div>');
  document.querySelector('hios-app-container').innerHTML = this.HTML;
};
};

Viewz.prototype.display = function(state) {
  Viewz.state = state;

  switch (state) {
    case 'MINI':
          this.container.querySelector('.mini');
    break;

    case 'FULL':
          this.container.querySelector('.full');
    break;

    default:
      console.warn('not a valid state');
    break;
  }
};

