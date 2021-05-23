
//Tell user what to do
let welcome ="Hello! Here you can learn about 3 different families in the Sims lore.";
alert(welcome);
//Allow user to choose a family
let choice= "Please enter Goth, Pleasant, or Landgraab.";
prompt(choice);
//Validation
while(choice===""){
    choice = prompt("Please do not leave blank! Please enter Goth, Pleasant, or Landgraab")
}
//Family Histories
let Goth ="The Goth Family is a well-known family in The Sims series, consisting of:\n" +
    "\n" +
    "Mortimer Goth \n" +
    "Bella Goth\n" +
    "Cassandra Goth\n" +
    "Alexander Goth\n" +
    "They appear as one of the starting families in the original The Sims. The family is featured in all four main games (The Sims, The Sims 2, The Sims 3, and The Sims 4), The Sims 2 for GameBoy Advance, and The Sims: Bustin' Out for console.";

let Pleasant="Members:\n" +
    "Daniel Pleasant\n" +
    "Mary-Sue Pleasant\n" +
    "Angela Pleasant\n" +
    "Lilith Pleasant\n" +
    "The Pleasant family has grown bigger in the years following The Sims. Jeff and Diane Pleasant are deceased, Jennifer Pleasant marries John Burb and has one child, Lucy. Daniel Pleasant marries Mary-Sue Oldie and they have twin girls, Angela and Lilith.\n" +
    "\n" +
    "The Pleasants have been featured in The Sims, The Sims 2, and The Sims 3.";

let Landgraab ="Members\n" +
    "Malcolm Landgraab\n" +
    "Nancy Landgraab\n" +
    "Mimi Landgraab\n" +
    "Dudley Landgraab\n" +
    "\n" +
    "The Landgraab family is a wealthy family dynasty that resides in Sunset Valley in The Sims 3; Bluewater Village in The Sims 2; and Oasis Springs in The Sims 4. The family name is occasionally spelt \"Landgrabb\", mostly in The Sims. Which spelling is used depends on which game or expansion pack introduced the object or place or Sim that used it.";
//Display selection
if(choice ==="Goth"){
    console.log(Goth);
}
else if(choice === "Pleasant"){
  console.log(Pleasant);
}
else {
    console.log(Landgraab);
}
