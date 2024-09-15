import React from "react";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title title="TalkWave" />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { sx: "none", sm: "block" } }}
            height={"100%"}
          >
            {/* left side */}
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { sx: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            {/* right side */}
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
