
fetch('Resume.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data); 
    for (let key in data) {
        console.log(key + ':', key); // Printing key words alone 
      }
    
    for (let languages of data.languages) {
        console.log('languages:');
        for (let key in languages) {
          console.log('\t' + key + ':', languages[key]);
        }
      }
      data.interests.forEach((interests) => {
        console.log('interests:');
        for (let key in interests) {
          console.log('\t' + key + ':', interests[key]);
        }
      });
 
  })
  
