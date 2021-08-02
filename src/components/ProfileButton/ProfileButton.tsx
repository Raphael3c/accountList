import React from 'react'
import {Button, Box } from "@material-ui/core";
import { useStyles } from './ProfileButton.style'



interface ProfileButtonProps{
  icon: string;
  name: string;
  accountNumber: string;
  accountType: string;
  src?: string;
  width?: string;
  height?: string;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  icon,
  name,
  accountNumber,
  accountType,
  src,
  width,
  height
}) => {

  const styles = useStyles()

  return (
    <div>
      <Button size="small" className={styles.buttonHeader}>
          <Box className={styles.activeAccount}>
            <Box className={styles.boxInformation}>
              <img src={icon} alt="Ícone" />
              <Box>
                <span className="name"><strong>{name}</strong></span>
                <Box className={styles.boxAccountType}>
                  <p className="account">Conta {accountNumber}</p>
                  <p className="type">{accountType}</p>
                </Box>
              </Box>
            </Box>
            <span className={styles.alignCheckedInCenter}><img src={src} width={width} height={height} alt="Conta atual" /></span>
          </Box>
        </Button>
    </div>
  )
}