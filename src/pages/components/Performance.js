import Grid from "@mui/material/Grid";
import StyledImage from "./StyledImage";
import { Typography } from "@mui/material";

function Performance() {
  return (
    <Grid
      container
      xs={12}
      id="performance"
      sx={{
        width:"1260px",
        pt: 10,
        justifyContent: { md: "center", sm: "space-between" },
        paddingX: { xs: 2 },
        margin: "auto"
      }}
    >
      <Grid
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "var(--third-color)",
            fontWeight: "500",
            fontSize: 45,
            mb: 2,
            textAlign: { xs: "center" },
          }}
        >
          Acelere o seu site e melhore sua Performance!
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ display: "flex", justifyContent: "center", pl: 5, pr: 5 }}
      >
        <StyledImage
          src="/images/Affiliate_Marketing_1.png"
          alt="Para aumentar o faturamento da sua empresa"
        />
      </Grid>
      <Grid
        item
        md={5}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          pr: { md: 5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "var(--main-color)",
            fontWeight: "500",
            fontSize: 29,
            mb: 2,
            textAlign: { md: "left", xs: "center" },
          }}
        >
          Para <span className="secondary">aumentar o faturamento</span> da sua
          empresa
        </Typography>
        <Typography className="text-content">
          Você está pronto para transformar a velocidade do seu site e oferecer
          a melhor experiência possível aos seus usuários? Nossa equipe de
          especialistas em otimização de sites está aqui para ajudar. Utilizamos
          as mais avançadas técnicas de SEO técnico e as melhores práticas de
          desenvolvimento web para garantir que seu site não só carregue
          rapidamente, mas também se mantenha seguro, acessível e otimizado para
          todos os dispositivos.
        </Typography>
      </Grid>
      <Grid
        item
        md={12}
        sx={{ display: "flex", justifyContent: "center", pt: 3 }}
      >
        <Grid item xs={4} md={2} sx={{ textAlign: "center" }}>
          <StyledImage
            src="/images/icon.png"
            alt="Melhore a Velocidade do Carregamento"
          />
          <Typography className="text-content">
            Melhore a Velocidade do Carregamento
          </Typography>
        </Grid>
        <Grid item xs={4} md={2} sx={{ textAlign: "center" }}>
          <StyledImage
            src="/images/Magnet_1.png"
            alt="Otimização para Mobile"
          />
          <Typography className="text-content">
            Otimização para Mobile
          </Typography>
        </Grid>
        <Grid item xs={4} md={2} sx={{ textAlign: "center" }}>
          <StyledImage src="/images/Analysis_1.png" alt="SEO Técnico" />
          <Typography className="text-content">SEO Técnico</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Performance;
