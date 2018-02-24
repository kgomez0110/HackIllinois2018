import random as rand

vector_dict = {}
questions = [["Quiet","Loud"],["Eating","Starve"],["Coffee","Tea"],["Near","Faraway"],["Collaborate","Singular"],["Outdoors","Indoors"],["Modern","Traditional"],["Early Bird","Night Owl"], ["Open","Closed"], ["Unwind","Non-stop"], ["On campus","Off campus"], ["Whiteboard","Chalkboard"]]

def generate_vec(place):
    answers = []
    for ii in range (0,len(questions)) :
        answers.append(questions[ii][rand.randint(0,1)])

    vector_dict[place] = answers


input_file = "UofI_spaces.txt"
output_file = "output.txt"
with open(input_file, 'r') as stuff :
    all_places = stuff.readlines()

for line in all_places:
    generate_vec(line)

print(vector_dict)


for key in vector_dict :
    print(key)
    print(vector_dict[key])
    print('\n')
