function setup(){
  createCanvas(135, 135);
  var game1 = new solitaireGame('solitaire1',document.getElementById('putgamehere'));
  game1.addImagePack('cardsets/h135/',[['orcaspyhop1','Orca spy-hop 1'],['orcaspyhop2','Orca spy-hop 2'],['orcajump','Orca jump'],['dolphin','Dolphin'],['puffin','Puffin'],['puffingrass','Puffin lookout'],['puffingroup','Puffin group'],['lizard','Lizard'],['turtle','Turtle'],['cloud','Shroud of cloud'],['redwine','Red wine'],['horse','Horseback'],['mouldings','Mouldings']],'.png',90,135,'Orca');
  game1.startGame();
}
