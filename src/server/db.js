async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:SENHAROOT31057489@localhost:3306/base_local");
    console.log("Conected in Mysql localhost! base_local:3306");
    global.connection = connection;
    return connection;
}


async function insertArticle(artigo){
    const conn = await connect();
    const sql = 'INSERT INTO articles(id,featured,title,url,imageurl,newsSite,summary,publishedAt,idLau, lauProv, idEve, eveProv) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);';
    const values = [artigo.id,
                    artigo.featured,
                    artigo.title, 
                    artigo.url, 
                    artigo.imageUrl, 
                    artigo.newsSite, 
                    artigo.summary, 
                    artigo.publishedAt, 
                    artigo.launches[0].id, 
                    artigo.launches[0].provider,
                    artigo.events[0].id, 
                    artigo.events[0].provider,]
    await conn.query(sql, values);
    const resultado = '{"Status":200", "msg": "Artigo Inserido com sucesso!"}';
    return JSON.parse(resultado);
};

async function returnArticle(id){
    const conn = await connect();
    const sql = 'SELECT * FROM articles WHERE id=?;';
    const [resultado] = await conn.query(sql, id);
    return JSON.stringify(resultado);
};

async function returnPagedArticle(start, limit){
    const conn = await connect();
    const sql = 'SELECT * FROM articles WHERE id >= ? LIMIT '+limit+';';
    const [resultado] = await conn.query(sql, start);
    return JSON.stringify(resultado);
};

async function deleteArticle(id){
    const conn = await connect();
    const sql = 'DELETE FROM articles WHERE id=?;';
    await conn.query(sql, id);
    const resultado = '{"Status":"200", "msg": "Artigo removido com sucesso"}';
    return JSON.parse(resultado);
};

async function updateArticle(id, artigo){
    const conn = await connect();
    const valores = Object.values(artigo)
    var contador = 0;
    
    for(chave in artigo){
        
        if(chave == 'launches'){
            const launches = valores[contador] 
             
            if(launches.length > 0){
                
                for(chave in launches){
                    var val  = Object.values(launches[chave])
                    var cont = 0;
                    const jsonFixo = { idLau: '', lauProv: ''};
                    for(chave in jsonFixo){
                        const sql  = 'UPDATE articles SET '+chave+'=? where id=?;';
                        const values = [val[cont],id]
                        await conn.query(sql, values);
                        cont++
                    }
                }
            }
            contador++;

        }else if(chave == 'events'){
            const events = valores[contador] 
            
            if(events.length > 0){
                
                for(chave in events){
                    var val  = Object.values(events[chave])
                    var cont = 0;
                    const jsonFixo = { idEve: '', eveProv: ''};
                    
                    for(chave in jsonFixo){
                        const sql  = 'UPDATE articles SET '+chave+'=? where id=?;';
                        const values = [val[cont],id]
                        await conn.query(sql, values);
                        cont++
                    }
                }
            }
            
            contador++;

        }else{
            const sql  = 'UPDATE articles SET '+chave+'=? where id=?;';
            const values = [valores[contador], id]
            await conn.query(sql, values);
            contador++;
        };
    };
    
    const resultado = '{"Status":"200", "msg": "Artigo atualizado com sucesso"}';
    return JSON.parse(resultado);
    
};

module.exports = {insertArticle, returnArticle, deleteArticle, updateArticle, returnPagedArticle}


/* 
// VERSÃO DA FUNÇÃO QUE ATUALIZA APENAS OS CAMPOS PASSADOS NA REQUISIÇÃO E SETA OS DEMAIS COMO 'NULL'

async function updateArticle(id, artigo){  
    const conn = await connect();
    
    if(artigo.launches){
        var array = artigo.launches
        if(array.length > 0){
            var idLau   = array[0].id;
            var lauProv = array[0].provider;
        }else{
            var idLau, lauProv = null;
        }
    }else{
        var idLau, lauProv = null;
    };
    
    if(artigo.events){
        var array = artigo.events
        if(array.length > 0){
            var idEve   = array[0].id;
            var eveProv = array[0].provider
        }else{
            var idEve, eveProv = null;
        }
    }else{
        var idEve, eveProv = null
    };
    
    const sql  = 'UPDATE articles SET title=?, url=?, imageurl=?, newsSite=?, summary=?, publishedAt=?, featured=?, idLau=?, lauProv=?, idEve=?, eveProv=? WHERE idArt=?;'
    const values = [artigo.title, 
        artigo.url, 
        artigo.imageUrl, 
                    artigo.newsSite, 
                    artigo.summary, 
                    artigo.publishedAt, 
                    artigo.featured,
                    idLau, 
                    lauProv,
                    idEve, 
                    eveProv,
                    id]; 

    await conn.query(sql, values);
    const resultado = '{"Status":"200", "msg": "Artigo atualizado com sucesso"}';
    return JSON.parse(resultado);
}; */