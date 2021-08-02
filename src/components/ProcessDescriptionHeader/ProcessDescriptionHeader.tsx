import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import { useStyles } from "./ProcessDescriptionHeader.style";
import personFemIcon from '_assets/img/icn-persona-fem.svg';
import searchIcon from '_assets/img/search-icon.svg';
import checked from '_assets/img/icn-check.svg';


import { ProfileButton } from 'components/ProfileButton'

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
        
        <ProfileButton 
          icon={personFemIcon} 
          name={"Luiza Ananda Macêdo"} 
          accountNumber={"12345-0"} 
          accountType={"Banquinho"}
          src={checked}
          width="25"
          height="25"
          />

        <Divider className={styles.divider}/>

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