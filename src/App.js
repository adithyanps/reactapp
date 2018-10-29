import React, { Component } from 'react';
import { Route, Switch, withRouter , Redirect,BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './components/app/app';
import Customers from './pages/customers';
import Products from './pages/products';
import Invoices from './pages/invoices';
import SelectInvoiceCustomer from './pages/set_invoice_customer';
import CreateInvoiceCustomer from './pages/create_invoice_customer';
import AddInvoiceItems from './pages/add_invoice';
import { Router, Link, browserHistory, IndexRoute } from 'react-router'

class App1 extends Component {
  render () {
    return (
        <div>
        <Router history={BrowserRouter}>
          <Route path="/" component={App}>
            <Route component={Invoices}/>

            <Route path="invoices" component={Invoices}></Route>
            <Route path="customers" component={Customers}></Route>
            <Route path="products" component={Products}></Route>
            <Route path="add-invoice/select-customer" component={SelectInvoiceCustomer}></Route>
            <Route path="add-invoice/create-customer" component={CreateInvoiceCustomer}></Route>
            <Route path="add-invoice/items" component={AddInvoiceItems}></Route>
          </Route>
        </Router>
        </div>
    );
  }
}
export default App1;
