const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');



const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = knex({
  client: 'pg',
  connection: {
    host : 'ec2-23-20-129-146.compute-1.amazonaws.com',
    user : 'ykgpcyycoqfomb',
    password : '9cf1304cc99d4678a8f550eee347fa8527a67c0f1347b50cb32fe4d7b9fad942',
    database : 'd3glnq4oi3lk34'
  }
});

app.get('/', (req, res)=>{
	res.send('it is working');
});

app.post('/signin', (req, res) =>{
	db('users').where({
				  email: req.body.email,
				  password: req.body.password
				}).select('id')
		.then((respond) =>{
			if(respond.length){
				return res.json({signIn: 'success', userId: respond[0].id});
			}else{
				return res.json({signIn: 'failed'});
			}
		}).catch((error) =>{
			return res.json({signIn: 'failed'});
	});
});

app.post('/register', (req, res) =>{
	db('users').insert({name: req.body.name, email: req.body.email, password: req.body.password})
	  .then((respond) =>{
	  		res.json({registration: 'success'});
	  }).catch((error) =>{
	  		res.status(400).json({registration: 'failed'});
	});
});

app.post('/user', (req,res) =>{
	db('users').where('id', '=', req.body.id)
		.then((respond) =>{
			if(respond.length){
				res.json({userFound: true, name:respond[0].name, entries: respond[0].entries});
			}else{
				res.json({userFound: false});
			}
		}).catch((error) =>{
			res.json({userFound: false});
	});
});

app.put('/updatescore',(req,res) =>{
  	db('users')
		.where('id', '=', req.body.id)
	    .increment('entries', 1)
	    .then((respond) =>{
	    	if(respond)
	  			res.json({userFound: true, entries: req.entries+1});
	  		else
	  			res.json({userFound: false});
	  	}).catch((error) =>{
		  	res.json({userFound: false});
    })
});

app.listen(process.env.PORT || 3000, () =>{
	console.log('app is listening at port ',process.env.PORT)
});