    var listName = req.body["listName"] ;
    var taskName=req.body["taskName"];
    var todayList=[];
    var workList=[];

    if(listName=="Today"){
        todayList.push(taskName);
    }
    else{
        workList.push(taskName);
    }
    console.log(todayList);
    console.log(workList);