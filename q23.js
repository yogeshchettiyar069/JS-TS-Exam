let accounts = [
    {Account : 1, balance : 10000},
    {Account : 2, balance : 5000},
    {Account : 3, balance : 8000},
]

    
function filterHighValue(err){
    return err.filter((value) => value.balance > 6000);
}
 console.log(filterHighValue(accounts));
  