var ionicApp = angular.module('starter',[]);
//var db = null;

ionicApp.controller('MainController', ['$scope', function($scope) {
 var btnstring="";
 var userid;
 var cmdstring=" USER ID:";
 var mode=0;
 var cntrlstring="text";
 $scope.btnpress= function(btnid) 
    {	
		btnstring=$scope.btnstring;//Required if mixing both type of inputs at same time in same box
		btnstring+=btnid
	   	$scope.btnstring=btnstring;
    }
 $scope.cncpress= function() 
    {
		btnstring=btnstring.substring(0,btnstring.length-1);
		$scope.btnstring=btnstring;
    }
 $scope.cancelpress= function() 
    {
		btnstring="";
		$scope.btnstring=btnstring;
    }
 $scope.okpress= function() 
    {
		if($scope.btnstring==="")
		{
		alert("Blank Fields Not Allowed");
		$scope.cancelpress();
		return;
		}
		// If planning to use input box type as text
		if(/^[a-zA-Z]+$/.test($scope.btnstring))
		{
			alert("Alphabets not allowed. Only Numbers");
			$scope.cancelpress();
		
		}
		if(mode==0)
		{
			userid=$scope.btnstring;
			btnstring="";
			cmdstring="PASSWORD:";
			cntrlstring="password";
			mode=1;
			$scope.btnstring=btnstring;
			$scope.cmdstring=cmdstring;
			$scope.cntrlstring=cntrlstring;
		}
		else if(mode==1)
		{
			btnstring+=$scope.btnstring;
			var pflag=0;
			
			var paswd=$scope.btnstring;
			/*
			var query = "SELECT UserID, Password FROM User";
            $cordovaSQLite.execute(db, query, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    if((res.rows.item(i).UserID==userid)&& (res.rows.item(i).Password==paswd))
					{
						window.location="1.html";
						pflag=1;
						break;
					}
                }
            }
			if(pflag==0)
			{ 
				alert("UserID or Password is wrong");
			}
        }, function (err) {
            confirm(err);
        });
		*/
			if(userid==paswd)
					{
						window.location="index_main.html";
						pflag=1;
						
					}
			mode=0;
			cmdstring="USER ID";
			$scope.cmdstring=cmdstring;
			btnstring="";
			$scope.btnstring=btnstring;
			cntrlstring="text";
			$scope.cntrlstring=cntrlstring;
		}
	}
 $scope.btnstring=btnstring;
 $scope.cmdstring=cmdstring;
}]);