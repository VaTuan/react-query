import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function usePosts() {

  /**
   * useQuery nhận vào 2 tham số, 1 là key, 2 là func return ra 1 Promise 
   * TODO : useQuery thường được dùng để fecth api từ server, nếu là Post thì nên là Mutation
   */
return useQuery('posts', () =>
    axios.get('/api/posts').then((res) => res.data)
  )
}
