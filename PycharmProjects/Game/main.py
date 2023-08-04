'''from Classes.Enemy import Enemy
enemy = Enemy(200,50)
print(enemy.get_hp())'''

from Classes.Game import Colors, Person
from Classes.Magic import Spell
from Classes.Inventory import Item
import random
#Black Spell
fire = Spell("Fire",10,100,"Black")
thunder = Spell("Thunder",10,100,"Black")
blizzard = Spell("Blizzard",10,100,"Black")
metro = Spell("Metro",14,140,"Black")
quake = Spell("Quake",20,200,"Black")
#White Spell
cure = Spell("Cure",12,120,"White")
cura = Spell("Cura",18,200,"White")
#Magic Spell List
magic = [fire, thunder, blizzard, metro, quake, cura, cure]
# Magic Item
potion = Item("Poition","Potion","Heals 50 HP",50)
hi_potion = Item("Hi-Poition","Potion","Heals 100 HP",100)
super_potion = Item("Super-Poition","Potion","Heals 1000 HP",1000)
elixer = Item("Elixer","Elixer","Fully Restore HP/MP Of One Party Member",999999)
mega_elixer = Item("Mega-Elixer","Elixer","Fully Restore HP/MP Of All Party Member",9999999)
granade = Item("Granade","Attack","Deals 500 Damage",500)
#Magic Item List
magic_items = [{"Item":potion, "Quantity":5},
               {"Item":hi_potion, "Quantity":5},
               {"Item":super_potion, "Quantity":5},
               {"Item":elixer, "Quantity":5},
               {"Item":mega_elixer, "Quantity":5},
               {"Item":granade, "Quantity":5},]

player1 = Person("Fatehin",3260, 132, 300, 35, magic,magic_items)
player2 = Person("Saeed",4160, 188, 311, 35, magic,magic_items)
player3= Person("Jisan",3090, 174, 288, 35, magic,magic_items)

enemy = Person("SAS3",11200, 701, 525, 25, [],[])

players = [player1, player2, player3]

running = True
print(Colors.FAIL+Colors.BOLD+"AN ENEMY ATTACKS!"+Colors.ENDC)
while running:

    for player in players:
        print("\nNAME                  " + "HP                                       " + "MP")
        for player1 in players:
            player1.get_status()
        enemy.get_enemy_status()
        choice_worng = True
        while choice_worng is not False:
            print(player.name + ":")
            player.choose_action()
            choice = input(" Choose action:")
            if int(choice)<=0:
                continue
            if int(choice)>3:
                continue
            choice_worng=False
        index = int(choice)-1

        if index == 0:
            dmg = player.generate_damage()
            enemy.take_damage(dmg)
            print("",player.name,"attacked for "+Colors.FAIL+Colors.BOLD+str(dmg)+Colors.ENDC+" poins of damage")

        elif index == 1:
            player.choose_magic()
            magic_choice = input(" Choose Action:")
            magic_index = int(magic_choice)-1
            spell = player.get_spell(magic_index)
            cost = spell.get_mp_cost()
            magic_damage = spell.generate_damage()
            current_mp = player.get_mp()
            if cost>current_mp:
                print("",Colors.FAIL + Colors.BOLD + "\nNot Enough MP\n" + Colors.ENDC)
                continue
            elif spell.type == 'White':
                player.reduce_mp(cost)
                player.heal(spell.generate_damage())
                print(" Spell "+spell.name+" heal for " + Colors.QKBLUE+str(magic_damage)+Colors.ENDC + " HP")
            else:
                player.reduce_mp(cost)
                enemy.take_damage(magic_damage)
                print("",player.name,"attacked for " + str(magic_damage) + " poins of damage")
        elif index == 2:
            player.choose_magic_item()
            item_choice = input(" Choose Action:")
            item_index = int(item_choice)-1
            item = player.get_item(item_index)
            magic_damage = item.prop
            if player.magic_item[item_index]["Quantity"]<1:
                print("",Colors.FAIL + Colors.BOLD + "\nNot Enough item\n" + Colors.ENDC)
                continue
            else:
                if item.type == "Potion":
                    player.magic_item[item_index]["Quantity"]-=1
                    player.heal(item.prop)
                    print("",item.name + " heal for " + Colors.QKBLUE + str(magic_damage) + Colors.ENDC + " HP")
                elif item.type == "Elixer":
                    if item.name == "Elixer":
                        player.magic_item[item_index]["Quantity"] -= 1
                        player.heal(player.max_hp)
                        print("",item.name + " heal for " + Colors.QKBLUE + "Max" + Colors.ENDC + " HP")
                    elif item.name == "Mega-Elixer":
                        player.magic_item[item_index]["Quantity"] -= 1
                        for p in players:
                            p.heal(p.max_hp)
                            print("",item.name + " heal for " + Colors.QKBLUE + "Max" + Colors.ENDC + " HP to all team member")
                elif item.type == "Attack":
                    player.magic_item[item_index]["Quantity"] -= 1
                    enemy.take_damage(item.prop)
                    print("", item.name, "attacked for " + str(item.prop) + " poins of damage")

        if enemy.get_hp()>0:
            enemy_choise = random.randrange(0,3)
            enemy_dmg = enemy.generate_damage()
            players[enemy_choise].take_damage(enemy_dmg)
            print(" Enemy attacked",players[enemy_choise].name,"for " + str(enemy_dmg) + " poins of damage")


    if enemy.get_hp() == 0:
        print("\nNAME                  " + "HP                                       " + "MP")
        for player in players:
            player.get_status()
        enemy.get_enemy_status()
        print("",Colors.OKGREEN+Colors.BOLD+"YOUR TEAM WIN!"+Colors.ENDC)
        running = False
    for player in players:
         if player.get_hp() == 0:
            print("\nNAME                  " + "HP                                       " + "MP")
            for player in players:
                player.get_status()
            enemy.get_enemy_status()
            print("",Colors.FAIL + Colors.BOLD + "YOUR ENEMY HAS DEFEATED YOU!" + Colors.ENDC)
            running = False