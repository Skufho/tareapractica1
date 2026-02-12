import pg from 'pg';    

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "Trabajopractico1",
    port: "5432"
});