import random

cities = ["თბილისი", "ბათუმი", "ქუთაისი", "რუსთავი", "გორი", "ზუგდიდი", "ხაშური"]
books = ["Data Smart", "TS", "JS", "Python Intro", "The Go Programming Language", "Go Intro"]

query = lambda x, y, z: f"INSERT INTO inventories (name, location, price) VALUES ('{x}', '{y}', {z});"

with open("init.sql",  "a") as file:
    for i in range(300000):
        file.write(
            query(f"{books[random.randint(0, 5)]} V-{random.randint(10, 99)}", cities[random.randint(0, 6)], random.randint(1000, 300000)) + "\n"
        )

    file.write("COMMIT;")
