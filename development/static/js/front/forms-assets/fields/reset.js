(function(f){f.Reset=function(a){this.a=null;this.Name=a};f.Reset.prototype={Init:function(a){var b=this;b.a=a;this.a.i(this.a.f[this.Name],"click",function(a){b.ta(a)})},ta:function(a){var b={submit:0,button:0,reset:1,radio:1,checkbox:1};this.a.g(this.a.f,function(a,c){a=c.type;"string"==typeof a&&"number"==typeof b[a]?1!=!b[a]&&(c.checked=!1):c.value=""});a.preventDefault()}}})(window.MvcCoreForm);