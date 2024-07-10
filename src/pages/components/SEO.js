import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import StyledImage from "./StyledImage";

const seoItems = [
  { src: "/images/users.svg", text: "Visitas do seu site" },
  { src: "/images/mdi_leads.svg", text: "Mais leads gerados por mês" },
  { src: "/images/mdi_chart-line.svg", text: "Oportunidades geradas por mês" },
  { src: "/images/bi_cart-plus-fill.svg", text: "Vendas realizadas por mês" },
  { src: "/images/f7_timer.svg", text: "Tempo de carregamento do site" },
];

function SEO() {
  return (
    <Grid
      container
      id="seo"
      xs={12}
      sx={{ pt: 12, justifyContent: { md: "center", sm: "space-between" } }}
    >
      <Grid md={8} p={4} className="cardSEO">
        <Grid
          md={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: { xs: 5 },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "var(--main-color)", fontWeight: "500" }}
          >
            SEO, ou <span className="secondary">otimização</span>
          </Typography>
        </Grid>
        <Grid
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography className="text-content">
            É uma estratégia crucial para melhorar a visibilidade e o ranking de
            um site nos resultados de pesquisa orgânica de motores de busca como
            Google, Bing e Yahoo. A prática de SEO envolve uma série de técnicas
            e metodologias que visam otimizar aspectos internos e externos de um
            website para torná-lo mais atrativo
            <br />
            <br />O que pode ajudar com os seguintes resultados:
          </Typography>
          <List>
            {seoItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemIcon>
                  <Image
                    src={item.src}
                    width={20}
                    height={16}
                    alt={item.text}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className="text-content"
                  sx={{
                    padding: 0,
                    marginLeft: -3,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid md={6} p={4} xs={12}>
          <StyledImage src="/images/imagem.png" alt="SEO" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SEO;
