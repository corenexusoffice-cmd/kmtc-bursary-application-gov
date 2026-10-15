'use strict';
window.FEES={1:300,2:250,3:200,4:150,5:100};
window.AMOUNTS={1:20000,2:16250,3:12500,4:8750,5:5000};
window.money=n=>'KSh '+Number(n).toLocaleString('en-KE');
window.rpc=async()=>{throw new Error('Live submissions are not enabled. No application or payment was recorded.');};
