import React from 'react';
import CardPerson from '@bit/smart-solution-4u.ss4u-components.surfaces.card-person';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import useFetcher from '../../../utils/useFetcher'
const USER_SERVICE_URL = '/users';

function ListCustomerScreen() {

    const [data, error, isLoading] = useFetcher(USER_SERVICE_URL);

    if (isLoading) return <CircularProgress />;
    if (error) return <Snackbar open={true} autoHideDuration={6000} message={error} />

    return data.map(person => (
        <CardPerson key={person.id} person={person} />
    ))
}
export default ListCustomerScreen