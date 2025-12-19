function Home() {
  return (
    <div className="container">
      <div className="profile">
        <img src={`${import.meta.env.BASE_URL}dika.jpg`} alt="My Photo" />
      </div>

      <div className="card">
        <h2>About Me</h2>
        <p>
          Passionate individual who enjoys playing guitar and football.
          Always eager to learn new things and grow both personally and professionally.
        </p>
      </div>
    </div>
  );
}

export default Home;
