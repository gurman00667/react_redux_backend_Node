// import * as passport from 'passport'
// import * as passportJWT from 'passport-jwt';
// import config from './config';
// import users from './users';

const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');

const ExtractJwt = passportJWT.ExtractJwt;

module.exports = function(){
    const strategy = new passportJWT.Strategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },(payload,done)=>{
        //knex user to return id which matches the payload.id
        let user = this.knex.select('id', 'email', 'entrepneurs_investors').from('users').where('id', payload.id)
           return user.then((res)=>{
                console.log(res)
                if (res[0].id == payload.id ) {
                    return done(null, {id: user.id});
                } else {
                    return done(new Error("User not found"), null);
                }
            })
        // const user = users.find((user)=>{
        //     return user.id == payload.id
        // });
        
    });
    passport.use(strategy);

    return {
        initialize: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", config.jwtSession);
        }
    };
}