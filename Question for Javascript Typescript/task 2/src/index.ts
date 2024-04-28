class ActionManager {
    comment: any[];
    constructor() {
      this.comment = [];
    }
  
    subscribe(cb:any) {
      this.comment.push(cb);
    }
  
    dispatch(action:PerformAction) {
      this.comment.forEach(comment => {
        comment(action);
      });
    }
  }

  interface PerformAction {
    action: string
  }


  
  const actionManager = new ActionManager();
  

  actionManager.subscribe((comment: any) => {
    console.log("Nowy komentarz:", comment);
  });
  

  const performAction: PerformAction = {
    action: "notifyObservers"
};

  actionManager.dispatch(performAction);
