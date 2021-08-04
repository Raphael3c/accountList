import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "components/Button";
import { useStyles } from "./ProcessPageFooter.style";

import backIcon from '_assets/img/backIcon.svg'

interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const ProcessPageFooter: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const styles = useStyles();

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<img src={backIcon} alt="Voltar"/>}
      >
        Voltar
      </Button>
      {primaryButton}
    </Box>
  );
};