import React from 'react';
import {PageContainer} from 'components/PageContainer'
import {ProcessPageLayout} from 'components/ProcessPageLayout';
import {ProcessDescriptionHeader} from 'components/ProcessDescriptionHeader';
import { AllAccountList } from 'features/AllAccount/components/AllAccountList';
import { ProcessPageFooter } from 'components/ProcessPageFooter/ProcessPageFooter';

export const AllAccount: React.FC = () => {
  return (
    <PageContainer>
        <ProcessPageLayout 
          header={
            <ProcessDescriptionHeader 
              title={"Todas as contas"}
            />
          }

          main={
            <AllAccountList />
          }

          footer={
            <ProcessPageFooter>

            </ProcessPageFooter>
          }
        
        />
    </PageContainer> 
  );
}


//{/*startIcon={<KeyboardArrowLeft color="secondary" />}*/}
