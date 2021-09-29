/* exported Stopwatch */

class Stopwatch {

  constructor(startTimeInSeconds) {
    this.elapsedSeconds = startTimeInSeconds;
  }

  tick() {
    this.elapsedSeconds++;
  }

  getTime() {
    const secondsPerHour = 3600;
    const secondsPerMinute = 60;
    this.seconds = this.elapsedSeconds;
    this.hours = Math.floor(this.seconds / secondsPerHour);
    this.seconds -= (secondsPerHour * this.hours);
    this.minutes = Math.floor(this.seconds / secondsPerMinute);
    this.seconds -= (secondsPerMinute * this.minutes);
    this.hours = this.hours.toString().padStart(2, '0');
    this.minutes = this.minutes.toString().padStart(2, '0');
    this.seconds = this.seconds.toString().padStart(2, '0');
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  reset() {
    this.elapsedSeconds = 0;
  }
}
