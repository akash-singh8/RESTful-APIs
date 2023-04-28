# Developing Restful API using Node.js and Express

Demo project to learn about Rest APIs by developing one

## Web Applications: Has three things

- Frontend (UI) which users interact to
- Backend is where all the logics and confidential code were written and which also acts as a intermediate b/w Frontend and Database.
- Database is where all the data about users, products is stored.

## APIs

### SOAP - Simple Object Access Protocol

- Uses XML - Slow due to redundant meta data

### REST - Representational State Transfer

- Uses JSON - Fast and accessiable accross multiple languages
- It's called REST as The representation of the Data State changes when transferred from one state to other.
- Initially the data was stored as binary i.e. 010110 in memory then changes to Tables in Database then changes to JSON in Backend and then can be accessed as JS objects on frontend/backend.

## REST API - CRUD

In order to perform CRUD operation to some Resources or Data, we need the exact location of it which's IP Address : PORT

- IP Address tells which computer
- PORT tells which application

## Express - Middleware

- Client -------->(requests) App -> Server -> Processing
- Before Server's starts processing it do some checks such as:

1. Valid Client
2. Registered Client
3. Valid Request

- only when these checks comes out to be right then the actual processing will start.
- So all the things that comes before actual processing are known as middlewares

- Middleware is basically a javascript function which has control over three thing

1. request object
2. response object
3. next (which middleware to call next)

## Backend - Best practices for development, divide it into three layers

- Routes: Where we'll be doing all the initial validation checks
- Controller: Where all the logics will be written
- Model: Here we'll be performing databases operation

It's best to work in the flow: Model -> Controller -> Routes
