import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";
import StyledButton from "./StyledButton";

const roles = [
  { value: "ceo", label: "CEO" },
  { value: "diretor", label: "Diretor de Marketing" },
  { value: "socialmedia", label: "Social Media" },
  { value: "designer", label: "Designer Gráfico" },
  { value: "dev", label: "Desenvolvedor/Programador" },
];

function Contact() {
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Grid
      container
      id="contato"
      md={12}
      pt={5}
      pb={3}
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        paddingX: 2,
      }}
    >
      <Grid
        md={6}
        xs={12}
        pt={5}
        pb={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "var(--main-color)", fontWeight: "500" }}
          mb={2}
        >
          Entre em contato e{" "}
          <span className="secondary">receba atendimento</span>
        </Typography>
        <Typography className="text-content" pl={7} pr={7}>
          Por favor, preencha o formulário abaixo com suas informações e a sua
          mensagem. Nossa equipe entrará em contato com você o mais breve
          possível.
        </Typography>
      </Grid>
      <Grid container md={6}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="fullName" sx={{ fontWeight: 500 }}>
                Nome completo
                <span style={{ color: "var(--secondary-color)" }}> *</span>
              </InputLabel>
              <TextField
                id="fullName"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className="fieldForm"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="email" sx={{ fontWeight: 500 }}>
                E-mail Corporativo
                <span style={{ color: "var(--secondary-color)" }}> *</span>
              </InputLabel>
              <TextField
                id="email"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                className="fieldForm"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="phone" sx={{ fontWeight: 500 }}>
                Telefone
                <span style={{ color: "var(--secondary-color)" }}> *</span>
              </InputLabel>
              <MuiPhoneNumber
                id="phone"
                defaultCountry="br"
                margin="normal"
                required
                variant="outlined"
                fullWidth
                className="fieldForm"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="role" sx={{ fontWeight: 500 }}>
                Qual a sua função na empresa?
                <span style={{ color: "var(--secondary-color)" }}> *</span>
              </InputLabel>
              <TextField
                id="role"
                value={select}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                className="fieldForm"
                margin="normal"
                select
                label="Selecione uma opção"
              >
                {roles.map((role) => (
                  <MenuItem key={role.value} value={role.value}>
                    {role.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <InputLabel sx={{ fontWeight: 500 }}>
            Mensagem
            <span style={{ color: "var(--secondary-color)" }}> *</span>
          </InputLabel>
          <TextField
            variant="outlined"
            required
            fullWidth
            multiline
            className="fieldForm"
            rows={4}
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "var(--secondary-color)" }} />}
            label="Ao informar meus dados, eu concordo com a política de Privacidade e concordo em receber comunicações."
            sx={{ alignItems: "flex-start", pt: 2 }}
          />
          <Grid item pt={3} pb={8} sx={{ textAlign: "center" }}>
            <StyledButton>Receber atendimento</StyledButton>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Contact;
