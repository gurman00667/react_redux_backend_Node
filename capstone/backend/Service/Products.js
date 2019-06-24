class Products {
    constructor(knex){
        this.knex = knex;
    }

    //Get all of the item when Query happens
    list(){
        let query = this.knex.select('header', 'highlights', 'body')
            .from('product')
                return query.then((rows)=>{
                    // return rows
                    console.log(rows)
                    return rows.map(r => ({
                        header: r.header,
                        highlights: r.highlights,
                        body: r.body
                    }));
                });
    }

    //If the id is match. Need this for future
    // list(){
    //     let query = this.knex.select('header', 'highlights', 'body')
    //         .from('summury')
    //         .innerJoin('entrepneurs', 'summury.id', 'entrepneurs.summury');
    //             return query.then((rows)=>{
    //                 console.log(rows)
    //                 return rows.map(r => ({
    //                     header: r.header,
    //                     highlights: r.highlights,
    //                     body: r.body
    //                 }));
    //             });
    // }

    async add(summury){
        console.log(summury, "lll")
        let query2 = await this.knex
            .insert({
                header: summury.summuryHeader,
                body: summury.summuryBody
            })
            .into('product')
            .returning('id')

            .catch(err => {
                throw new Error(err);
            })
            console.log(query2)
    }

}

module.exports = Products;