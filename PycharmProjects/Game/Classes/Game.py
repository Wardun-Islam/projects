import random
from Classes.Magic import Spell

class Colors:
    HEADER = '\033[95m'
    QKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNINGS = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


class Person:
    def __init__(self,name, hp, mp, atk, df, magic, magic_item):
        self.name = name
        self.max_hp = hp
        self.hp = hp
        self.mp = mp
        self.max_mp = mp
        self.atkl = atk - 10
        self.atkh = atk + 10
        self.df = df
        self.magic = magic
        self.action = ["Attack", "Action","Item"]
        self.magic_item = magic_item

    def generate_damage(self):
        return random.randrange(self.atkl, self.atkh)

    def take_damage(self, damage):
        self.hp = self.hp - damage
        if self.hp < 0:
            self.hp = 0
        return self.hp
    def heal(self, damage):
        self.hp = self.hp + damage
        if self.hp > self.get_max_hp():
            self.hp = self.get_max_hp()
        return self.hp
    def get_item(self, i):
        return self.magic_item[i]["Item"]

    def get_hp(self):
        return self.hp

    def get_max_hp(self):
        return self.max_hp

    def get_mp(self):
        return self.mp

    def get_max_mp(self):
        return self.max_mp

    def reduce_mp(self, cost):
        self.mp -= cost

    def get_spell(self, i):
        return self.magic[i]


    def choose_action(self):
        print(Colors.QKBLUE + Colors.BOLD + "ACTION" + Colors.ENDC)
        i = 1
        for item in self.action:
            print("",str(i) + ": ", item)
            i += 1

    def choose_magic(self):
        print(Colors.QKBLUE+Colors.BOLD+"MAGIC"+Colors.ENDC)
        i = 1
        for item in self.magic:
            print("",str(i) + ":",item.get_name(), "(Cost: " + str(item.get_mp_cost())+")")
            i += 1

    def choose_magic_item(self):
        print("",Colors.QKBLUE + Colors.BOLD + "Item" + Colors.ENDC)
        i = 1
        for item in self.magic_item:
            print(str(i) + ":", item["Item"].name, "(Description: " + item["Item"].description + ")")
            i += 1

    def get_status(self):
        bar_status = ""
        hp_tricks = int(self.hp)/int(self.max_hp)*25
        while len(bar_status)<hp_tricks:
            bar_status+="█"
        while len(bar_status)<25:
            bar_status+=" "
        mp_bar_status = ""
        mp_tricks = int(self.mp) / int(self.max_mp) * 10
        while len(mp_bar_status) < mp_tricks:
            mp_bar_status += "█"
        while len(mp_bar_status) < 10:
            mp_bar_status += " "
        hp_len = str(self.hp)+"/"+str(self.max_hp)
        mp_len = str(self.mp)+"/"+str(self.max_mp)
        name_len = self.name+":"
        while len(name_len)<11:
            name_len+=" "
        while len(hp_len)<9:
            hp_len = " "+hp_len
        while len(mp_len) < 8:
            mp_len = " " + mp_len
        print(Colors.BOLD+"                      _________________________               __________"+Colors.ENDC)
        print(name_len+hp_len+" |"+Colors.OKGREEN+Colors.BOLD
              +bar_status+Colors.ENDC+"|    "+mp_len+" |"+Colors.QKBLUE+Colors.BOLD
              +mp_bar_status+Colors.ENDC+"|")

    def get_enemy_status(self):
        enemy_bar_status = ""
        enemy_hp_tricks = int(self.hp) / int(self.max_hp) * 40
        while len(enemy_bar_status) < enemy_hp_tricks:
            enemy_bar_status += "█"
        while len(enemy_bar_status) < 40:
            enemy_bar_status += " "
        enemy_hp_len = str(self.hp) + "/" + str(self.max_hp)
        enemy_name_len = self.name + ":"
        while len(enemy_name_len) < 9:
            enemy_name_len += " "
        while len(enemy_hp_len) < 11:
            enemy_hp_len = " " + enemy_hp_len

        print(Colors.BOLD+"                      ________________________________________"+Colors.ENDC)
        print(enemy_name_len+enemy_hp_len+" |"+Colors.FAIL+Colors.BOLD
              +enemy_bar_status+Colors.ENDC+"|")