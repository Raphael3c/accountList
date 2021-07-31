import React from "react";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import { useStyles } from "./ProcessDescriptionHeader.style";
import personFemIcon from '_assets/img/icn-persona-fem.svg';
import checked from '_assets/img/icn-check.svg';
import searchIcon from '_assets/img/search-icon.svg'

interface TitleAndDescritionProps {
  title: string;
}

export const ProcessDescriptionHeader = ({
  title,
}: TitleAndDescritionProps) => {
  const styles = useStyles();

  return (
    <Box className={styles.header}>
      <Typography id="pd-title" variant="h6" className={styles.title}>
        {title}
      </Typography>
      <Box>
        <Button size="small" className={styles.buttonHeader}>
          <Box className={styles.activeAccount}>
            <Box className={styles.boxInformation}>
              <img src={personFemIcon} alt="Ícone Feminino" />
              <Box>
                <span className="name"><strong>Luiza Ananda Macêdo</strong></span>
                <Box className={styles.boxAccountType}>
                  <p className="account">Conta 12345-0</p>
                  <p className="type">Banquinho</p>
                </Box>
              </Box>
            </Box>
            <span className={styles.alignCheckedInCenter}><img src={checked} width="25" height="25" alt="Conta atual" /></span>
          </Box>
        </Button>

        <Divider />

        <div className={styles.inputSearchContainerReference}>
          <div className="inputSearchContainer">
            <img src={searchIcon} height="16" width="16" alt="Procurar" />
            <input type="text" placeholder="Buscar pelo nome conta"/>
          </div>
        </div>

      </Box>
    </Box>
  );
}