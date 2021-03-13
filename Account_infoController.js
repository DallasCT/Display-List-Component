({
	doInit : function(component, event, helper) { //the method "doInit" in our lighting controller
        var action = component.get('c.getAccount'); //the variable "action" is linked up to the method "getAccount" in our apex class
        var rid = component.get('v.recordId'); //the variable "rid" is linked up to force:hasRecordId, or the current record we are looking at
        action.setParams({AccId : rid}); //setting a param for "AccId" to equal "rid" for the method "getAccount" that is linked to "action"
        action.setCallback(this,function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                component.set('v.returnresponse', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})
