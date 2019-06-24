class Toinvestor {
    constructor(knex){
        this.knex = knex;
    }

    //Get all of the item when Query happens
    list(){
        let query = this.knex.select('header', 'highlights', 'body')
            .from('toInvestors')
                return query.then((rows)=>{
                    console.log(rows)
                    return rows.map(r => ({
                        header: r.header,
                        highlights: r.highlights,
                        body: r.body
                    }));
                });
    }
}

module.exports = Toinvestor; 