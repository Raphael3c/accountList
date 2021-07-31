import React from 'react';
import {PageContainer} from 'components/PageContainer'
import {ProcessPageLayout} from 'components/ProcessPageLayout';
import {ProcessDescriptionHeader} from 'components/ProcessDescriptionHeader';
import './App.scss'

export const App: React.FC = () => {
  return (
    <PageContainer>
        <ProcessPageLayout 
          header={
            <ProcessDescriptionHeader 
              title={"Todas as contas"}
            />
          }
        
        />
    </PageContainer> 
  );
}