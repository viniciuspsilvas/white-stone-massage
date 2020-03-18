import React from "react";
import { Route, withRouter } from "react-router-dom";
import AppLayout from "../Layouts/appLayout";
import AppContext from "../../AppContext";
import { GET_USER_BY_TOKEN } from "../../api/user";
import { useLazyFetcher } from "../../utils/useFetcher";

const PrivateRoute = ({ component: Component, path, ...rest }) => {

  const { actions, state } = React.useContext( AppContext )

  // TODO - loading
  const [ getUser, { loading } ] = useLazyFetcher(GET_USER_BY_TOKEN, {
    onComplete: (res) => {
      if (!res) return rest.history.push('/login')

      let type = res.staff.firstname ? 'staff' : 'customer'
      res.profile = res[type]
      actions.setUser(res)
    },
    onError: (err) => {
      rest.history.push('/login')
    }
  })

  React.useEffect(() => {
    if (!state.user.id && !loading) {
      getUser()
    }
  }, [ state.user, loading, getUser ])  

  return (
    <Route {...rest} render={ props => (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    )} />
  )
}

export default withRouter(PrivateRoute);
