import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from "../components/NavBar";
import ArticulosPage from "../pages/ArticulosPage";
import ClientesPage from "../pages/ClientesPage";
import FacturacionPage from "../pages/FacturacionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundedPage from "../pages/NotFoundedPage";
import ProfilePage from "../pages/ProfilePage";
import ProveedoresPage from "../pages/ProveedoresPage";
import UsuariosPage from "../pages/UsuariosPage";


export default function AppRouter() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={ HomePage  } />
            <Route exact path="/proveedores" component={ ProveedoresPage } />
            <Route exact path="/articulos" component={ ArticulosPage } />
            
            <Route exact path="/clientes" component={ ClientesPage } />  
            <Route exact path="/facturacion" component={ FacturacionPage } />
            <Route exact path="/compras" component={ FacturacionPage } />           
            <Route exact path="/profile/:username" component= { ProfilePage } />
            
            <Route exact path="/login" component={ LoginPage } />         
            <Route exact path="/usuarios" component={ UsuariosPage } />


            <Route path="/404" component={NotFoundedPage} />
            <Route path="*" component={NotFoundedPage} />
        </Switch>
    </Router>
  )
}
