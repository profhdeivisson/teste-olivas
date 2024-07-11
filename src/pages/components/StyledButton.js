import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const ContactButton = styled(Button)({
  backgroundColor: "var(--secondary-color)",
  textTransform: "none",
  fontSize: "20px",
  padding: "10px 60px",
  borderRadius: "50px",
  color: "var(--white-color)",
  "&:hover": {
    backgroundColor: "var(--dark-secondary-color)",
  },
  fontWeight: "bold",
  width: "auto",
});

export default ContactButton;
