
function orderSandwich(...items: string[]): void {
    console.log(`Sandwich with ${items.join(', ')} is being ordered.`);
  }
  
  orderSandwich('cheese', 'lettuce', 'tomato');
  orderSandwich('ham', 'mustard');
  orderSandwich('turkey', 'bacon', 'avocado', 'onion');
  