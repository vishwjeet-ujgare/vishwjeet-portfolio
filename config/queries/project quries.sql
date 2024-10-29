-- create table 

	-- CREATE TABLE projects (
	--     id SERIAL PRIMARY KEY,
	--     title VARCHAR(80) NOT NULL,
	--     description TEXT, 
	--     techs TEXT[],           -- Array of technologies 
	--     developers TEXT[] NOT NULL,      -- Array of developer names 
	--     date_completed DATE,    -- Date of project completion
	--     github_link VARCHAR(255),  -- Link to the GitHub repository
	--     live_link VARCHAR(255)     -- Link to the live project
	-- );

-- Insert into 

	-- INSERT INTO projects (title, description, techs, developers, date_completed, github_link, live_link)
	-- VALUES 
	--     ('Portfolio Website', 
	--      'A personal portfolio website showcasing projects and skills.',
	--      ARRAY['HTML', 'CSS', 'JavaScript', 'PostgreSQL'], 
	--      ARRAY['Vishwjeet'], 
	--      '2024-10-29', 
	--      'https://github.com/username/portfolio-website', 
	--      'https://username.github.io/portfolio-website'),

	--     ('E-commerce App', 
	--      'A full-featured e-commerce application with payment integration and user management.',
	--      ARRAY['React'], 
	--      ARRAY['Vishwjeet', 'Jeet'], 
	--      '2024-08-15', 
	--      'https://github.com/username/e-commerce-app', 
	--      'https://ecommerce-username.herokuapp.com'),

	--     ('Chat Application', 
	--      'A real-time chat application with WebSocket integration.',
	--      ARRAY['Python', 'Flask', 'Socket.IO', 'PostgreSQL'], 
	--      ARRAY['Vishwjeet', 'Suhas','Abhishek'], 
	--      '2024-09-10', 
	--      'https://github.com/username/chat-app', 
	--      'https://chatapp-username.herokuapp.com');


-- ALTER 
	-- 	ADD
	
		-- ALTER  TABLE projects
		-- ADD COLUMN start_date DATE NOT NULL DEFAULT '2024-01-01',
		-- ADD COLUMN end_date DATE,
		-- ADD COLUMN isActive Boolean default true;
		
	-- DROP
	
		-- Alter table projects
		-- drop column date_completed;






select * from projects