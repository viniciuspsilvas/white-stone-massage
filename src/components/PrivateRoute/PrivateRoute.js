import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import AppLayout from "../Layouts/appLayout";
import AppContext from "../../AppContext";
import { GET_USER_BY_TOKEN } from "../../api/user";
import { useLazyQuery } from "@apollo/react-hooks";

const PrivateRoute = ({ component: Component, path, ...rest }) => {

  const { actions, state } = React.useContext( AppContext )

  // TODO - loading
  const [ getUser, { userLoading }] = useLazyQuery(GET_USER_BY_TOKEN, {
    onCompleted: (res) => {
      let type = res.userByToken.staff.firstname ? 'staff' : 'customer'
      res.userByToken.profile = res.userByToken[type]
      actions.setUser(res.userByToken)
    },
    onError: (err) => {
      rest.history.push('/login')
    }
  })

  React.useEffect(() => {
    if (!state.user.id) {
      getUser()
    }
  }, [ state.user, getUser ])  

  return (
    <Route {...rest} render={ props => (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    )} />
  )
}

export default withRouter(PrivateRoute);
