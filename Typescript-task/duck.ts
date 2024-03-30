class SBI { 
    interest= 1000; 
  } 
    
  class HDFC { 
    interest= 2000; 
  } 
    
  class ICICI { 
    interest= 3000; 
    display() { 
      console.log("ICICI bank"); 
    } 
  } 
    
  let sbi: SBI = new HDFC();       
  let hdfc: HDFC = new SBI();          
  //let icici: ICICI = new SBI();  
    
  
  console.log("Interest in SBI " + sbi.interest); 
  console.log("Interest in HDFC " + hdfc.interest); 
  //console.log("Interest in ICICI " + icici.interest); 
 