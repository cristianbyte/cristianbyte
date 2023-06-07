import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

addEventListener('fetch', event =>  event.respondWith(handleRequest(event.request)) )  

const handleRequest = async request => {  
  let url = new URL(request.url)     
  let requestUrl = request.url.replace(`${url.origin}/`, '');  
  request = new Request(requestUrl, request)  
  if (request.headers.has('origin')) request.headers.delete('origin')  
  if (request.headers.has('referer')) request.headers.delete('referer')  
  let response = await fetch(request)  
  response = new Response(response.body, response)  
  response.headers.set('access-control-allow-origin', '*')  
  response.headers.set('access-control-allow-headers', '*')  
  return response }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
