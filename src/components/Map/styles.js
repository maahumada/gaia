const mapStyles = {
  container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height
  },
  map: {
      width: "90%",
      aspectRatio: 1,
      border: "5px solid #333",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  customIcon: (imageUrl) => ({
      width: "100px",
      height: "100px",
      backgroundImage: `url('${imageUrl}')`,
      backgroundSize: "cover",
      border: "3px solid black",
      borderRadius: "50%",
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
  }),
};

export default mapStyles;
