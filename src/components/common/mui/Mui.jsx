import { Grid } from "@mui/material";

const Mui = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{ background: { xs: "red", sm: "blue" } }}
          xs={12}
          sm={6}
          md={4}
        >
          <h1>Col 1</h1>
        </Grid>
        <Grid
          item
          sx={{ background: "blue", padding: { xs: "40px", sm: "4px" } }}
          xs={12}
          sm={6}
          md={4}
        >
          <h1>Col 2</h1>
        </Grid>
        <Grid item sx={{ background: "green" }} xs={12} sm={6} md={4}>
          <h1>Col 3</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Mui;
