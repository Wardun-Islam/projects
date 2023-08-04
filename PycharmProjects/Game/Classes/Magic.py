import random


class Spell:
    def __init__(self, name, cost, damage, type):
        self.name = name;
        self.cost = cost;
        self.damage = damage;
        self.type = type;

    def generate_damage(self):
        return random.randrange(int(self.damage) - 5, int(self.damage) + 5)

    def get_mp_cost(self):
        return self.cost

    def get_name(self):
        return self.name
