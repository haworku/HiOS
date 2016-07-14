Viewz.prototype.display = function(state) {
  Viewz.state = state

  switch (state) {
    case 'HOME':
    console.log(this.home)
        this.container.appendChild(this.home);
    break;

    case 'MINI':
        this.container.appendChild(this.mini);
    break;

    case 'FULL':
        this.container.appendChild(this.full);
    break;

    default:
      console.warn('not a valid state');
    break;
  }
};


