import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose, combineReducers } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
// import { IndexRoute } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import App from './App';

import Customers from './pages/customers';
import Products from './pages/products';
import Invoices from './pages/invoices';
import SelectInvoiceCustomer from './pages/set_invoice_customer';
import CreateInvoiceCustomer from './pages/create_invoice_customer';
import AddInvoiceItems from './pages/add_invoice';

import reducers from './reducers';
// import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import invoicesReducer from './reducers/invoices';
import currentInvoiceReducer from './reducers/current_invoice';
import invoiceItemsReducer from './reducers/invoice_items';
import customersReducer from './reducers/customers';
import productsReducer from './reducers/products';
import product from './reducers/product';
import selectedCustomerReducer from './reducers/selected_customer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  customers: customersReducer,
  products: productsReducer,
  currentInvoice: currentInvoiceReducer,
  selectedCustomer: selectedCustomerReducer,
  product: product,
  invoiceItems: invoiceItemsReducer,
  form
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={BrowserRouter}>
//       <Route path="/" component={App}>
//         <Route component={Invoices}/>
//
//         <Route path="invoices" component={Invoices}></Route>
//         <Route path="customers" component={Customers}></Route>
//         <Route path="products" component={Products}></Route>
//         <Route path="add-invoice/select-customer" component={SelectInvoiceCustomer}></Route>
//         <Route path="add-invoice/create-customer" component={CreateInvoiceCustomer}></Route>
//         <Route path="add-invoice/items" component={AddInvoiceItems}></Route>
//       </Route>
//     </Router>
//   </Provider>
//   , document.querySelector('.container'));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
