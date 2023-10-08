const floorpathfind = (start, target, flooradjacencylist) =>{
    let queue = []; //Initalize queue which keeps track of the paths generated
    let path = [start]; //Initialize a path with just the starting node
    queue.push(path); //Push the path with just the starting node into the queue
  
    //this loop actually just returns final path
    while(queue.length != 0){
      path = queue.shift(); //Take out the first path in the queue

      //If the path ends with the target node and is valid path (only goes through path nodes), return that path
      
        // checks if the node at the end of the path is the target node
        // validpath checks to make sure we don't phase through rooms. checks if path between a and b only contains hallway tiles
      if(path[path.length-1][0] == target[0] && path[path.length-1][1] == target[1] && validpath(path)){
        let result = "";
        //rendering the line on the map
        for(let i = 0; i < path.length; i++){
            if(i == 0){
                result = result + "M" + (path[i][0] + boxsize/2) + " " + (path[i][1] + boxsize/2) + " ";
            }
            else{
                result = result + "L" + (path[i][0] + boxsize/2) + " " + (path[i][1] + boxsize/2) + " ";
            }
            
        }
        return result;
      }


      let adjnodes = [];//Initialize an array to store all of the adjacent nodes that are travelable 
      for(let i = 0; i < flooradjacencylist.length; i++){
        // going through nodes of adjacency list to find the last node in the
        if(path[path.length-1][0] == flooradjacencylist[i][0][0] && path[path.length-1][1] == flooradjacencylist[i][0][1]){
          //Once the last node in the path is found in adjacency list push all adjacenct nodes into adjnodes 
          flooradjacencylist[i].forEach(x => adjnodes.push(x));
          adjnodes.shift();//Takes out the first node which is the last node of the path, so adjnodes only contains adjacent nodes
        }
      }
      //Loop through each of the adjnodes
      for(let i = 0; i < adjnodes.length; i++){
        let checked = false;
        //Loop though the path to see if the node is already in the path
        for(let j = 0; j < path.length; j++){
          if(path[j][0] == adjnodes[i][0] && path[j][1] == adjnodes[i][1]){
            checked = true;
          }
        }
        //If the node is not already in the path then we want to create a new path with tha node
        if(checked == false){
          let newpath = [];//Initialize newpath
          //Create a new path with the new adjacent node. making a deep copy of the already existing path
          path.forEach(x => newpath.push(x));
          newpath.push(adjnodes[i]);
          if(nocycle(newpath))
            queue.push(newpath);//Push the new path into the queue to be checked
        }
  
      }
    }
}