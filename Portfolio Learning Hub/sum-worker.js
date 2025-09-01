
self.onmessage = (e)=>{
  const n = e.data || 5000000;
  let s = 0;
  for(let i=1;i<=n;i++) s+=i;
  postMessage({n, sum:s});
};
