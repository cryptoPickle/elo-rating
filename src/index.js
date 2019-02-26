class Elo {
  constructor({k = 32} = {}){
    this.k = k

  }
  setK(k){
    this.k = k;
    return this
  }
  getK(){
    return this.k
  }

  expected(a, b){
    this.expecting = 1 / (1+ Math.pow(10, (b - a) / 400))
    return this
  }

  getExpected() {
    return this.expecting
  }

  eloRating(prevRate, win) {
    return Math.round(prevRate + this.k * (win - this.expecting))
  }
}

module.exports = Elo