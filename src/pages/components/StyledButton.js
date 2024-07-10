import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
const ContactButton = styled(Button)({
  backgroundColor: "var(--secondary-color)",
  textTransform: "none",
  padding: "10px 50px",
  borderRadius: "50px",
  color: "var(--white-color)",
  "&:hover": {
    backgroundColor: "var(--dark-secondary-color)",
  },
});

export default ContactButton;
