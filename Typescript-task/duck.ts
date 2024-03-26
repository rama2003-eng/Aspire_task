class Pigeon { 
    sound = "coos"; 
  } 
    
  class Owl { 
    sound = "hoots"; 
  } 
    
  class Penguin { 
    sound = "peeps"; 
    swim() { 
      console.log("I'm a bird and i can swim"); 
    } 
  } 
    
  let pigeon: Pigeon = new Owl();       
  let owl: Owl = new Pigeon();          
  let pigeon2: Pigeon = new Penguin();  
 // let penguin: Penguin = new Pigeon(); Compile time error 
    
  // Printing values 
  console.log("A pigeon " + pigeon.sound); 
  console.log("An owl " + owl.sound); 
  console.log("A pigeon " + pigeon2.sound); 
 // console.log("A penguin " + penguin.sound);