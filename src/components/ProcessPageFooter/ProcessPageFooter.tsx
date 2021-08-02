import React from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();

  const onPreviousButtonClick = () => history.goBack();

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<img src={backIcon} alt="Voltar"/>}
        onClick={onPreviousButtonClick}
      >
        Voltar
      </Button>
      {primaryButton}
    </Box>
  );
};