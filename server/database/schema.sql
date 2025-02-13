CREATE TABLE suit (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE card (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NULL,
    card_rank VARCHAR(50) NOT NULL,
    picture_url TEXT NOT NULL,
    found_date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    suit_id INT NOT NULL,
    FOREIGN KEY (suit_id) REFERENCES suit(id) ON DELETE CASCADE
);