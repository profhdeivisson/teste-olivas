import { Grid, Typography } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <Grid
      container
      sx={{
        maxWidth: "1920px",
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
      }}
      component="footer"
    >
      <Grid
        container
        xs={12}
        md={7}
        sx={{
          maxWidth: "1260px",
          justifyContent: "space-between",
          padding: 4,
          paddingBottom: { xs: 12 },
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          pr={{ md: 2 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/Logo.png"
            width="150"
            height="43"
            alt="Logo Olivas Digital"
          />
          <Typography
            color={"#A09C9C"}
            mt={2}
            className="textContent"
            sx={{ fontSize: 12, textAlign: { xs: "center", md: "left" } }}
          >
            A Olivas Digital é uma martech (marketing technology company), que
            há mais de 10 anos ajuda empresas de todos os portes e segmentos a
            impulsionarem suas vendas no digital.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            marginTop: { xs: 5 },
          }}
          pl={1}
        >
          <Typography variant="h6" sx={{ color: "rgba(93, 93, 93, 1)", mb: 1 }}>
            Fale conosco
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Grid item md={6}>
              <Typography variant="p" className="text-content">
                <strong>Atendimento</strong>
                <div mt={2}>+55 (11) 2391-6090</div>
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              mt={{ md: 0, xs: 5 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="p" className="text-content">
                <strong>Redes Sociais</strong>
              </Typography>
              <Grid
                item
                mt={{ md: 1, xs: 2 }}
                sx={{
                  maxWidth: { md: 130, xs: "none" },
                  display: "flex",
                  justifyContent: { md: "space-between", xs: "space-evenly" },
                }}
              >
                <Image
                  src="/images/facebook.png"
                  width="32"
                  height="32"
                  alt="Facebook"
                />
                <Image
                  src="/images/instagram.png"
                  width="32"
                  height="32"
                  alt="Instagram"
                />
                <Image
                  src="/images/linkedin.png"
                  width="32"
                  height="32"
                  alt="Linkedin"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          backgroundColor: "#B1B1B1",
          padding: "10px",
          marginTop: "auto",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "var(--white-color)",
          }}
        >
          © 2014-2024 - Olivas Digital
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
