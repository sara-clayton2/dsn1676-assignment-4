var blueberries = { 
    name: 'blueberries', 
    latin: 'Vaccinium corymbosum',
    growsOnShrubs: 'true', 
    energy: '240 kJ', 
    carbohydrates: '14.49 g', 
    protein: '0.74 g'
}; 

var grapes = { 
    name: 'grapes', 
    latin: 'Vitis vinifera',
    growsOnShrubs: 'false', 
    energy: '288 kJ', 
    carbohydrates: '18.1 g', 
    protein: '0.72 g'
}; 

var redcurrant = { 
    name: 'redcurrant', 
    latin: 'Ribes rubrum',
    growsOnShrubs: 'true', 
    energy: '234 kJ', 
    carbohydrates: '13.8 g', 
    protein: '1.4 g'
}; 


var writeBerries = function (allBerries) { 
 allBerries.forEach(function (item) { 
    document.write('<dl>');
    
    document.write('<dt>name:</dt>');
    document.write('<dd>' + item.name + '</dd>');
    
    document.write('<dt>latin:</dt>');
    document.write('<dd>' + item.latin + '</dd>');
    
    document.write('<dt>growsOnShrubs:</dt>');
    document.write('<dd>' + item.growsOnShrubs + '</dd>');
    
    document.write('<dt>energy:</dt>');
    document.write('<dd>' + item.energy + '</dd>');
      
    document.write('<dt>carbohydrates:</dt>');
    document.write('<dd>' + item.carbohydrates + '</dd>');
    
    document.write('<dt>protein:</dt>');
    document.write('<dd>' + item.protein + '</dd>');
    
    document.write('</dl>');
}); 

}; 

writeBerries ( [blueberries, grapes, redcurrant] ); 
