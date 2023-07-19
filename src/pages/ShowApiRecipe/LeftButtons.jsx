import React from "react";
import SimCardDownloadRoundedIcon from "@mui/icons-material/SimCardDownloadRounded";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import ShareIcon from "@mui/icons-material/Share";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { Box, IconButton } from "@mui/material";

function LeftButtons({ recipe }) {
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        right: { xs: "1px", md: "20px" },
        top: "330px",
      }}
    >
      <IconButton aria-label="add an alarm" onClick={() => {}}>
        <SimCardDownloadRoundedIcon />
      </IconButton>
      <IconButton aria-label="add an alarm" onClick={() => {}}>
        <MailRoundedIcon />
      </IconButton>
      <IconButton aria-label="add an alarm" onClick={() => {}}>
        <ShareIcon />
      </IconButton>
      <IconButton aria-label="add an alarm" onClick={() => {}}>
        <PrintRoundedIcon />
      </IconButton>
    </Box>
  );
}

export default LeftButtons;
