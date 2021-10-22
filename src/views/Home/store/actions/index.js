import axios from 'axios'

// ** Get data
export const getData = params => {
  return dispatch => {
    axios.get('/pages/knowledge-base/knowledgeBase', params).then(response => {
      console.log(response)
      dispatch({
        type: 'GET_DATA',
        allData: response.data.allData,
        data: response.data.knowledgeBase,
        totalPages: response.data.total,
        params
      })
    })
  }
}

// ** Delete Invoice
// export const deleteInvoice = id => {
//   return (dispatch, getStore) => {
//     axios
//       .delete('/apps/invoice/delete', { id })
//       .then(response => {
//         dispatch({
//           type: 'DELETE_INVOICE'
//         })
//       })
//       .then(() => dispatch(getData(getStore().invoice.params)))
//   }
// }
