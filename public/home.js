function Home(){
  return (
    <Card
          txtcolor="success"
      header="SW Bank home page"
      title="Welcome to the bank"
      text="A backend bank demo"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
