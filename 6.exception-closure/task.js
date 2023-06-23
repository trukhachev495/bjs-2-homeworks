function parseCount (quantity) {
  if (isNaN(Number.parseFloat(quantity))) {
    let error = new Error('Невалидное значение');
    throw error;
  }
  return Number.parseFloat(quantity)
}
function validateCount (quantity1) {
  try {
    return parseCount(quantity1)
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter () {
    return this.a + this.b + this.c;
  }
  get area () {
    const p = (1 / 2) * (this.a + this.b + this.c);
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(square.toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch (error) {
    return {
      get area () {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter () {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}
