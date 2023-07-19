const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        backgroundColor: "#E5D3D3",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video autoPlay muted width="80%" loop>
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
