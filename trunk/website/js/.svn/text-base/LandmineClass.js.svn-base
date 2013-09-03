

LandmineClass = EntityClass.extend({
  zindex: 70,
  lifetime: 100,

  kill: function() {

    gGameEngine.removeEntity(this);
  },

  update: function() {
 
    this.lifetime -= 0.05;
    if (this.lifetime <= 0) {
      this.kill();
      return;
    }
  }
});

gGameEngine.factory['Landmine'] = LandmineClass;

