import React from 'react'

import {useStyles} from './AllAccountList.style'

import {ProfileButton} from 'components/ProfileButton'
import {Divider} from '@material-ui/core'
import personFemIcon from '_assets/img/icn-persona-fem.svg'
import personMasIcon from '_assets/img/icn-persona-mas.svg'

import checked from '_assets/img/icn-check.svg';
import icnFixado from '_assets/img/icn-fixado.svg'




export const AllAccountList: React.FC = () => {

  const styles = useStyles();

  return (
    <div className = {styles.mainContainer}>
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

      <ProfileButton 
          icon={personMasIcon} 
          name={"Pedro Victor da Silva"} 
          accountNumber={"12344-0"} 
          accountType={"Bancão"}
          src={icnFixado}
          width="25"
          height="25"
          />

    </div>
  )
}

