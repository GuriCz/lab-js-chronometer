class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.IntervalId = null;
  }

  start(printTimeCallback) {
    //if(printTimeCallback)
    //{printTimeCallback}

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if(printTimeCallback)
      {printTimeCallback}
    }, 1000) 
  }

  getMinutes() {
    return Math.floor(this.currentTime/60); 
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value.length < 2){
      return `0${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
   this.currentTime= 0;
  }

  split() {
    // ... your code goes here
  }
}
