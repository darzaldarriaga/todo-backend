SELECT 'CREATE DATABASE taskdb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'taskdb')\gexec

\c taskdb

CREATE TABLE IF NOT EXISTS Tasks
(
  id SERIAL PRIMARY KEY,
  task VARCHAR(255),
  is_done boolean NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finished_at TIMESTAMP,
  deleted_at TIMESTAMP
);

ALTER TABLE Tasks
  OWNER TO postgres;
