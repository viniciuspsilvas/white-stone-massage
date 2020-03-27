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
export const useFetcher = (query, { filter, onComplete, onError }) => {

  const { actions } = useContext( AppContext )
  const [ state ] = useState({ variables: { ...filter }, onComplete, onError })
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      actions.setUseLoader( true )
      setLoading( true )
      client.query({ query: query, variables: state.variables })
        .then(res => {
          const result = Object.keys(res.data).map(key => res.data[key])[0]
          setData(result)
          state.onComplete && state.onComplete(result)
        })
        .catch(err => {
          state.onError && state.onError(err)
        })
        .finally(() => {
          actions.setUseLoader( false )
          setLoading( false )
        })
    }

    fetchData()

  }, [ actions, query, state ])

  return { loading, data }
}

/**
 * 
 * @param { DocumentNode } query - Receives the query thats gonna be executed
 * @param { Function } onComplete - Receives a method that is executed to manage the data
 * @param { Function } onError - Receives a method that is executed in case of error
 */
export const useLazyFetcher = (query, { onComplete, onError } = () => {} ) => {

  const { actions } = useContext( AppContext )
  const [ state ] = useState({ onComplete, onError })
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const fetchData = (filter) => {
    const operation = query.definitions[0].operation === 'query' ? 'query' : 'mutate'
    
    actions.setUseLoader( true )
    setLoading( true )
    client[operation]({ [query.definitions[0].operation] : query, variables: filter })
      .then(res => {
        const result = Object.keys(res.data).map(key => res.data[key])[0]
        setData(result)
        state.onComplete && state.onComplete(result)
      })
      .catch(err => {
        state.onError && state.onError(err)
      })
      .finally(() => {
        actions.setUseLoader( false )
        setLoading( false )
      })
  }

  return [ fetchData, { data, loading } ]
}