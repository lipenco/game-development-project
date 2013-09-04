GameEngineClass = Class.extend({

    gPlayer0: {
        pos: {
            x: 100,
            y: 100
        }
    },

    init: function () {},

    //----------------------------
    // Parameters:
    //  1) soundURL: a string representing the path to the sound
    //               file.
    //  2, 3) x, y:  The position within the game world where the
    //               sound should be playing from.
    //----------------------------
    playWorldSound: function (soundURL, x, y) {

        // First we check if the player exists. If not, then we
        // don't need to bother playing sounds.
        if (gGameEngine.gPlayer0 === null) return;

        // We set a shorthand for gGameEngine.gMap for ease of use.
        var gMap = gGameEngine.gMap;

        // Grab the maximum of half the width and height of the viewRect
        // for calculating screen distance from player.
        var viewSize = Math.max(gMap.viewRect.w, gMap.viewRect.h) * 0.5;

        // Grab the player's position.
        var oCenter = gGameEngine.gPlayer0.pos;

    
        // Calculate the distance from the player's position to the
        // sound's position. 
        
        var dx = Math.abs(oCienter.x -x);
        var dy = Math.abs(oCenter.y-y);
        var distToObsterver = Math.sqrt(dx*dx + dy * dy);



        // Normalize the distance from the player to the sound based
        // on the viewSize we calculated earlier.
        
        var normDist = distToObsterver / viewSize;
        if (normDist > 1) normDist =1;
        if (normDist<0 ) return; //don't play

        var volume = 1.0 - normDist;
  
        // Play the sound found at soundURL at the specified volume.
      
        var sound = gSM.loadAsync(soundURL, function (sObj) {
            gSM.playSound(sObj.path, {
                looping : false,
                volume: volume,
            });
        });
    
        
    }
});

gGameEngine = new GameEngineClass();

