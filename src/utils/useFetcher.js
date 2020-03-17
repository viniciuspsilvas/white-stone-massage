import client from '../api';
import AppContext from '../AppContext';
import { useContext, useState, useEffect } from 'react';

/**
 * 
 * @param { DocumentNode } query - Receives the query thats gonna be executed
 * @param { Object } filter - Receives the filter thats gonna be send to the server 
 * @param { void } onComplete - Receives a method that is executed to manage the data
 * @param { void } onError - Receives a method that is executed in case of error
 */
export const useFetcher = (query: DocumentNode, { filter, onComplete, onError }) => {

  const { actions } = useContext( AppContext )
  const [ state ] = useState({ variables: { ...filter }, onComplete, onError })
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      actions.setUseLoader( true )
      setLoading( true )
      client.query({query: query, variables: state.variables })
        .then(res => {
          const result = Object.keys(res.data).map(key => res.data[key])[0]
          setData(result)
          state.onComplete && state.onComplete(result)
        })
        .catch(err => {
          console.log(err)
          state.onError && state.onError(err)
        })
        .finally(() => {
          actions.setUseLoader( false )
          setLoading( false )
        })
    }

    fetchData()

  }, [ actions, query, state ])

  return { loading, data };
}

/**
 * 
 * @param { DocumentNode } query - Receives the query thats gonna be executed
 * @param { Object } filter - Receives the variables thats gonna be send to the server
 * @param { Function } onComplete - Receives a method that is executed to manage the data
 * @param { Function } onError - Receives a method that is executed in case of error
 */
export const useLazyFetcher = (query: DocumentNode, { filter, onComplete, onError }) => {

  const { actions } = useContext( AppContext )
  const [ state ] = useState({ ...filter }, onComplete, onError )
  const [ data, setData ] = useState([])

  const fetchData = () => {
    actions.setUseLoader( true )
    client.query({query: query, variables: state.filter })
      .then(res => {
        Object.keys(res.data).filter(key => setData(res.data[key]))
        state.onComplete && state.onComplete(res)
      })
      .catch(err => {
        console.log(err)
        state.onError && state.onError(err)
      })
      .finally(() => {
        actions.setUseLoader( false )
      })
  }

  return [ fetchData, { data } ];
}

// export const useLazyFetcher = (query, filter) => {

//   const { actions } = useContext( AppContext )
//   const [ state, setState ] = useState({ variables: { ...filter } })
//   const [ data, setData ] = useState([])

//   const fetchData = () => {
//     actions.setUseLoader( true )
//     client.query({query: query, variables: state.variables })
//       .then(res => {
//         Object.keys(res.data).filter(key => setData(res.data[key]))
//       })
//       .catch(err => console.log(err))
//       .finally(() => {
//         actions.setUseLoader( false )
//       })
//   }

//   return [ fetchData, { data } ];
// }