const express = require('express');
const greetMiddleware = require ('./greet1.js')
class GreetService {
constructor (greeting = 'Hello')
{
    this.greeting = greeting;
}
createGreeting (name)
{
    return  `${this.greeting}, ${name}!`;
}

}
express ().use('/api/v1/service1', greetMiddleware({service : new GreetService('Hello')}))
.use('/api/v1/service2', greetMiddleware({service : new GreetService('Hi')})).listen(3000)