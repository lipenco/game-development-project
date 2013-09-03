
var gCachedAssets = {};

function loadAssets(assetList, callbackFcn) {
  // All the information we need to keep track of
  // for this batch.
  var loadBatch = {
    count: 0,
    total: assetList.length,
    cb: callbackFcn
  };

  for(var i = 0; i < assetList.length; i++) {
    if(gCachedAssets[assetList[i]] === null) {
      var assetType = getAssetTypeFromExtension(assetList[i]);

      if(assetType === 0) { // Asset is an image
        var img = new Image();
        img.onload = function () {
          onLoadedCallback(img, loadBatch);
        };
        img.src = assetList[i];
        gCachedAssets[assetList[i]] = img;

      } else if(assetType === 1) { // Asset is Javascript
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.onload = function (e){
          onLoadedCallback(fileref,loadBatch);
        };
        fileref.setAttribute("src", filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
        gCachedAssets[assetList[i]] = fileref;
      }

    } else { // Asset is already loaded
      onLoadedCallback(gCachedAssets[assetList[i]], loadBatch);
    }
  }
}

function onLoadedCallback(asset, batch) {
  // If the entire batch has been loaded,
  // call the callback.
  batch.count++;
  if(batch.count == batch.total) {
    batch.cb(asset);
  }
}

// We've provided you a handy function for determining the
// asset type from the file extension.
// Images return 0, javascript returns 1, and everything
// else returns -1.
function getAssetTypeFromExtension(fname) {
  if(fname.indexOf('.jpg') != -1 || fname.indexOf('.jpeg') != -1 || fname.indexOf('.png') != -1 || fname.indexOf('.gif') != -1 || fname.indexOf('.wp') != -1) {
    // It's an image!
    return 0;
  }

  if(fname.indexOf('.js') != -1 || fname.indexOf('.json') != -1) {
    // It's javascript!
    return 1;
  }

  // Uh Oh
  return -1;
}

