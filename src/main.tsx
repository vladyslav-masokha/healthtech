import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { store } from './assets/redux/store.ts'
import { AboutPage } from './assets/screens/aboutPage/AboutPage.tsx'
import { CartPage } from './assets/screens/cartPage/CartPage.tsx'
import { ErrorPage } from './assets/screens/errorPage/ErrorPage.tsx'
import { HomePage } from './assets/screens/homePage/HomePage.tsx'
import { LoginPage } from './assets/screens/loginPage/LoginPage.tsx'
import { OrderPage } from './assets/screens/orderPage/OrderPage.tsx'
import { ProductPage } from './assets/screens/productPage/ProductPage.tsx'
import { RegisterPage } from './assets/screens/registerPage/RegisterPage.tsx'
import { ResetPasswordPage } from './assets/screens/resetPasswordPage/ResetPasswordPage.tsx'
import { UserProfilePage } from './assets/screens/userProfilePage/UserProfilePage.tsx'
import './firebase.ts'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/profile' component={UserProfilePage} />
					<Route exact path='/about' component={AboutPage} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/reset' component={ResetPasswordPage} />
					<Route exact path='/cart' component={CartPage} />
					<Route exact path='/order' component={OrderPage} />
					<Route path='/:id' component={ProductPage} />
					<Route path='*' component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
