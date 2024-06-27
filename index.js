require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


const githubData = {
  "login": "shubh-151",
  "id": 60954538,
  "node_id": "MDQ6VXNlcjYwOTU0NTM4",
  "avatar_url": "https://avatars.githubusercontent.com/u/60954538?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shubh-151",
  "html_url": "https://github.com/shubh-151",
  "followers_url": "https://api.github.com/users/shubh-151/followers",
  "following_url": "https://api.github.com/users/shubh-151/following{/other_user}",
  "gists_url": "https://api.github.com/users/shubh-151/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shubh-151/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shubh-151/subscriptions",
  "organizations_url": "https://api.github.com/users/shubh-151/orgs",
  "repos_url": "https://api.github.com/users/shubh-151/repos",
  "events_url": "https://api.github.com/users/shubh-151/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shubh-151/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shubham Shukla",
  "company": "smc insurance broker pvt ltd",
  "blog": "",
  "location": "Delhi,Bharat",
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 2,
  "following": 0,
  "created_at": "2020-02-12T04:06:40Z",
  "updated_at": "2024-06-23T13:58:21Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('Mai twitter pe nhi hun')
})

app.get('/login',(req, res)=>{
    res.send('<h1>Welcome in login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome in my youtube channel</h2>')
})

app.get('/signup',(req,res)=>{
    res.send('<h2>Welcome in my youtube channel</h2>')
})

app.get('/github',(req, res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})