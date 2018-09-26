function ZigZagMatrix(data) {

  var zigs={};

  for(var i=0 ;i<data.length ;i++){

    if(data[i]>data[i+1]){

      zigs[i]=[">",data[i]];

    }else{
      zigs[i]=["<",data[i]];
      
    }

  }
  // Good luck!
   console.log(zigs);
  
   
    for( var i=0;i<3;i++){

      if(zigs[i][0]===zigs[i+1][0]){

        if(zigs[i][0]===">"){

          // var temp= zigs[i+2][1];
          // zigs[i+2][1]=zigs[i+1][1];
          // zigs[i+1][1]=temp ;

          zigs[i+1][0]="<";
        }
        else{

          zigs[i+1][0]==">";
        }

      }

      

   }
   console.log(zigs);
}

ZigZagMatrix([1,2,3,4]);
