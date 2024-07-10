import Grid from "@mui/material/Grid";
import StyledButton from "./StyledButton";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import StyledImage from "./StyledImage";

function About() {
  return (
    <Grid
      container
      id="sobre-o-teste"
      md={12}
      xs={12}
      sx={{
        pt: 12,
        justifyContent: { md: "center", sm: "space-between" },
        paddingX: { xs: 2 },
      }}
    >
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: { md: 0, xs: 5 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "var(--main-color)", fontWeight: "500" }}
          mb={2}
        >
          Teste de desenvolvimento{" "}
          <span className="secondary">Front-end Next.JS</span>
        </Typography>
        <Typography className="text-content">
          Bem-vindo ao nosso desafio de codificação React! Este teste avalia
          suas habilidades em desenvolver aplicações web interativas com React.
          Sua tarefa é construir uma aplicação que interaja com APIs externas e
          exiba dados de forma clara e eficiente. Estamos ansiosos para ver sua
          criatividade e qualidade de código em prática.
        </Typography>
        <Link
          to="contato"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          sx={{ textDecoration: "none" }}
        >
          <StyledButton className="button-theme">Entrar em contato</StyledButton>
        </Link>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledImage
          src="/images/image1.png"
          alt="Imagem Funil de Vendas Olivas Digital"
        />
      </Grid>
    </Grid>
  );
}

export default About;
