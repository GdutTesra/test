function PasswordStrength(passwordID,strengthID){
    this.init(strengthID);
    var _this = this;
    document.getElementById(passwordID).onkeyup = function(){
        _this.checkStrength(this.value);
    }    
};
PasswordStrength.prototype.init = function(strengthID){
    var id = document.getElementById(strengthID);
    var div = document.createElement('div');
    var strong = document.createElement('strong');
    this.oStrength = id.appendChild(div);
    this.oStrengthTxt = id.parentNode.appendChild(strong);
};
PasswordStrength.prototype.checkStrength = function (val){
    var Safe = ['less then 6 numbers','weak','medium','high'];
        var safety = 0 ;    //定义初始安全等级为0，每符合条件安全等级+1       
        var parn1 = /[A-Z]/g.test(val)  //判断是否含大写字母
           if( parn1 ) safety++;        
        var parn2 = /[a-z]/g.test(val)  //判断是否含小写字母
           if( parn2 ) safety++;        
        var parn3 = /\d+/g.test(val)    //判断是否含数字
           if( parn3 ) safety++;        
        var parn4 = /\W+/g.test(val)    //判断是否含有殊符号
           if( parn4 ) safety++;    
    if(val.length < 6){safety=0;}       //密码长度最小6位
    if(safety > 3){safety=3;}
    this.oStrengthTxt.innerHTML ='safety level: '+ Safe[safety];
    this.oStrength.className = 'strengthLv' + safety;
    
};