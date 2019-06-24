const jwt = require("jwt-simple");
const config = require('../config');

class Users {
    constructor(knex){
        this.knex = knex;
    }

    list(){
        console.log('listing')
        let query = this.knex.select('id', 'email', 'password', 'entrepneurs_investors')
            .from('users')
                return query.then((rows)=>{
                    return rows
                    // console.log(rows)
                    // return rows.map(r => ({
                    //     id: r.id,
                    //     email: r.email,
                    //     password: r.password,
                    //     entrepneurs_investors: entrepneurs_investors
                    // }));
                });
    }

    login(email, password){
        console.log('Logging In')
        // console.log(users)
        if (email && password) {
            var email = email;
            var password = password;
            console.log(email, password)

            //knex query to find the user in the databse
            
            let users = this.knex.select('id', 'password', 'email', 'entrepneurs_investors').from('users').where({"email": email})

            console.log('hahaha')

            return users.then((res)=>{
                console.log(res[0].id)
                console.log(res[0].password)
                // return res.email === email
                            if (res[0].email === email && res[0].password === password) {
                                var payload = {
                                    id: res[0].id
                                    //you can add more user details
                                };
                                var token = jwt.encode(payload, config.jwtSecret);
                                console.log(token, 'working')
                                return token

                                // return the token 
                                // res.json({
                                //     token: token
                                // });
                            } else {
                                console.log('Failure')
                    
                            }


            })

 
            // var user = users.find((u)=> {
            //     return u.email === email && u.password === password;
            // });


            
        } else {
            console.log('1')    
        }
    }

}

module.exports = Users;
// In REAL world , the password must be encrypted using library like bcrypt.
// module.exports =  [
//     {
//         id:0,
//         name:"John Doe",
//         email: "john.doe@gmail.com",
//         password: "123456"
//     },
//     {
//         id:1,
//         name:"Chan Siu Ming",
//         email:"chan.siu.ming@gmail.com",
//         password: "123456"
//     },
//     {
//         id: 2,
//         name:"Juan Nadie",
//         email:"juan.nadie@gmail.com",
//         password: "123456"
//     },
//     {
//         id: 3,
//         name:"Sam",
//         email:"sam@sam.com",
//         password: "123456"
//     }
// ]