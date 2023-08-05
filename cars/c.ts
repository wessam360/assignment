interface Car {
    manufacturer: string;
    model: string;
    [key: string]: string;
  }
  
  function createCar(manufacturer: string, model: string, ...options: [string, string][]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    options.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  const carInfo: Car = createCar('Toyota', 'Camry', ['color', 'blue'], ['feature', 'sunroof']);
  console.log(carInfo);
  