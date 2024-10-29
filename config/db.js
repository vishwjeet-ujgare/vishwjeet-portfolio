import pkg from 'pg'; 
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jeet_portfolio_db',
    password: 'pass',
    port: 5432,
});


pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('Unexpected error: ', err);
    process.exit(-1); //This is simply the exit status of the progress.
});

const query = async (text, params) => {
    const client = await pool.connect();
    try {
        const res = await client.query(text, params);
        return res;
    } catch (error) {
        console.error('Query error:', error.stack);
        throw error;
    } finally {
        client.release();  // Ensure the client is released back to the pool
    }
};


export { query };