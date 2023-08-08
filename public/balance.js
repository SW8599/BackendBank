


function Balance() {
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Login"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Log Out
    </button>
  </>);

     

}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [passwordd, setPasswordd] = React.useState('');  


  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            var data = JSON.parse(text);
            //var balanceData = JSON.stringify({ data });
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data );
        } catch (err) {
            props.setStatus("account data:     \n"+ "\nName:" + data.name + "\nEmail:" + data.email + "\nBalance:" + data.balance);
            console.log('err:', text);


             


        }
    });
  }

  return (<>







    email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)} /><br />


      password<br />
      <input type="password"
          className="form-control"
          placeholder="Enter password"
          value={passwordd}
          onChange={e => setPasswordd(e.currentTarget.value)} /><br />



    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
          Log In
    </button>


       



  </>);


}




///////////////////


