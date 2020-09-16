function oddEven(range){
    for(i=0;i<=range;i++){
        let message= (i%2==0) ? ' even':' odd';
        console.log(i,message);
    }
  
}
            oddEven(30);