import React from "react";


function P1(props){
    let a=1020306;
    function count(a){
    let ans=0;
    while(a){
        ans++;
        a=Math.trunc(a/10);
    }
    return ans;
}
function zerocount(a){
    let ans=0;
    while(a){
        if(a%10==0)
          ans++;
        a=Math.trunc(a/10);
    }
    return ans;
  }
  function evencount(a){
    let ans=0;
    while(a){
        if(a%2==0)
          ans++;
        a=Math.trunc(a/10);
    }
    return ans;
  }
  function sum(a){
    let ans=0;
    while(a){
        var r=a%10;
        ans=ans+r;
        a=Math.trunc(a/10);
    }
    return ans;
  }
    return (
       <div>
        <p>Number is : {a}</p>
        <p>Count of digits is: {count(a)}</p>
        <p>Count of zero is given number is: {zerocount(a)}</p>
        <p>Count of even digits is: {evencount(a)}</p>
        <p>Sum of digits: {sum(a)}</p>
        Msg:{props.msg}
       </div> 
    )
}
export default P1;