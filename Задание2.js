function primeNumb(num) {
  if (num > 1000) {
    return "Число должно быть меньше 1000";
    } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return "Составное число";
      }
    }
    return "Простое число";
  } else {
    return "Число должно быть целым и больше 1";
  }
}

primeNumb(2)