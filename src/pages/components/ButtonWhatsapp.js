import { Box, Fab } from "@mui/material"
import Image from "next/image";

function ButtonWhatsapp(){
    return (
      <Box>
        <Fab
          color="primary"
          sx={{
            backgroundColor: "var(--third-color)",
            color: "var(--white-color)",
            position: "fixed",
            right: "50px",
            bottom: "50px",
            "&:hover": {
              backgroundColor: "var(--third-color)",
            },
          }}
        >
          <Image src="/images/ph_phone.svg" width={35} height={32} alt="SEO" />
        </Fab>
      </Box>
    );
}

export default ButtonWhatsapp