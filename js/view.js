var Viewz = function () {
    this.container = document.querySelector('#main-container');
    this.state = 'HOME';
    this.home = '<h1> Home Is Where The Heart Is </h1>';
    this.mini = '<p> Minizzz </p>';
    this.full = '<p> FULL </p>';
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

