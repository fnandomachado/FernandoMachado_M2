CREATE TABLE accomplishments ( 
	accomplishments_award VARCHAR(255) NOT NULL    ,
	id_accomplishments   INTEGER NOT NULL  PRIMARY KEY  ,
	accomplishments_year VARCHAR(4) NOT NULL    ,
	accomplishments_description VARCHAR(600)     ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_accomplishments_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE adress ( 
	id_adress            INTEGER NOT NULL  PRIMARY KEY  ,
	adress_zipcode       VARCHAR(8) NOT NULL    ,
	adress_number        VARCHAR(8) NOT NULL    ,
	adress_street        VARCHAR(255) NOT NULL    ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_adress_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE education ( 
	id_education         INTEGER NOT NULL  PRIMARY KEY  ,
	education_institution VARCHAR(255) NOT NULL    ,
	education_course     VARCHAR(255) NOT NULL    ,
	education_start      VARCHAR(8) NOT NULL    ,
	education_end        VARCHAR(8) NOT NULL    ,
	education_degree     VARCHAR(255) NOT NULL    ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_education_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE experience ( 
	id_experience        INTEGER NOT NULL  PRIMARY KEY  ,
	experience_enterprise VARCHAR(255) NOT NULL    ,
	experience_role      VARCHAR(255) NOT NULL    ,
	experience_description VARCHAR(600) NOT NULL    ,
	experience_start     VARCHAR(8) NOT NULL    ,
	experience_end       VARCHAR(8) NOT NULL    ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_experience_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE personality ( 
	id_personality       INTEGER NOT NULL  PRIMARY KEY  ,
	personality_name     VARCHAR(100) NOT NULL    ,
	personality_level    VARCHAR(10) NOT NULL    ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_personality_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE skills ( 
	id_skill             INTEGER NOT NULL  PRIMARY KEY  ,
	skill_name           VARCHAR(100) NOT NULL    ,
	skil_level           VARCHAR(10) NOT NULL    ,
	id_candidate         INTEGER     ,
	CONSTRAINT unq_skills_id_candidate UNIQUE ( id_candidate )
 );

CREATE TABLE candidate ( 
	id_candidate         INTEGER NOT NULL  PRIMARY KEY  ,
	candidate_name       VARCHAR(255) NOT NULL    ,
	candidate_phone      VARCHAR(13) NOT NULL    ,
	candidate_email      VARCHAR(255) NOT NULL    ,
	candidate_description VARCHAR(600) NOT NULL    ,
	FOREIGN KEY ( id_candidate ) REFERENCES experience( id_candidate )  ,
	FOREIGN KEY ( id_candidate ) REFERENCES education( id_candidate )  ,
	FOREIGN KEY ( id_candidate ) REFERENCES accomplishments( id_candidate )  ,
	FOREIGN KEY ( id_candidate ) REFERENCES adress( id_candidate )  ,
	FOREIGN KEY ( id_candidate ) REFERENCES personality( id_candidate )  ,
	FOREIGN KEY ( id_candidate ) REFERENCES skills( id_candidate )  
 );
