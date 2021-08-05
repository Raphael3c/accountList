import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AllAccount } from 'features/AllAccount/pages/AllAccount'


export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AllAccount}/>        
      </Switch>
    </BrowserRouter>
  )
}