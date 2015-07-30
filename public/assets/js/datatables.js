$.fn.dataTableExt.oApi.fnReloadAjax=function(e,t,n,r){if(t!==undefined&&t!==null){e.sAjaxSource=t}if(e.oFeatures.bServerSide){this.fnDraw();return}this.oApi._fnProcessingDisplay(e,true);var i=this;var s=e._iDisplayStart;var o=[];this.oApi._fnServerParams(e,o);e.fnServerData.call(e.oInstance,e.sAjaxSource,o,function(t){i.oApi._fnClearTable(e);var o=e.sAjaxDataProp!==""?i.oApi._fnGetObjectDataFn(e.sAjaxDataProp)(t):t;for(var u=0;u<o.length;u++){i.oApi._fnAddData(e,o[u])}e.aiDisplay=e.aiDisplayMaster.slice();i.fnDraw();if(r===true){e._iDisplayStart=s;i.oApi._fnCalculateEnd(e);i.fnDraw(false)}i.oApi._fnProcessingDisplay(e,false);if(typeof n=="function"&&n!==null){n(e)}},e)}
$.fn.dataTableExt.sErrMode="throw";$.extend(true,$.fn.dataTable.defaults,{sDom:"<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",sPaginationType:"bootstrap",oLanguage:{sLengthMenu:"_MENU_ records per page"}});$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline"});$.fn.dataTableExt.oApi.fnPagingInfo=function(e){return{iStart:e._iDisplayStart,iEnd:e.fnDisplayEnd(),iLength:e._iDisplayLength,iTotal:e.fnRecordsTotal(),iFilteredTotal:e.fnRecordsDisplay(),iPage:e._iDisplayLength===-1?0:Math.ceil(e._iDisplayStart/e._iDisplayLength),iTotalPages:e._iDisplayLength===-1?0:Math.ceil(e.fnRecordsDisplay()/e._iDisplayLength)}};$.extend($.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(e,t,n){var r=e.oLanguage.oPaginate;var i=function(t){t.preventDefault();if(e.oApi._fnPageChange(e,t.data.action)){n(e)}};$(t).append('<ul class="pagination">'+'<li class="prev disabled"><a href="#">&larr; '+r.sPrevious+"</a></li>"+'<li class="next disabled"><a href="#">'+r.sNext+" &rarr; </a></li>"+"</ul>");var s=$("a",t);$(s[0]).bind("click.DT",{action:"previous"},i);$(s[1]).bind("click.DT",{action:"next"},i)},fnUpdate:function(e,t){var n=5;var r=e.oInstance.fnPagingInfo();var i=e.aanFeatures.p;var s,o,u,a,f,l,c=Math.floor(n/2);if(r.iTotalPages<n){f=1;l=r.iTotalPages}else if(r.iPage<=c){f=1;l=n}else if(r.iPage>=r.iTotalPages-c){f=r.iTotalPages-n+1;l=r.iTotalPages}else{f=r.iPage-c+1;l=f+n-1}for(s=0,o=i.length;s<o;s++){$("li:gt(0)",i[s]).filter(":not(:last)").remove();for(u=f;u<=l;u++){a=u==r.iPage+1?'class="active"':"";$("<li "+a+'><a href="#">'+u+"</a></li>").insertBefore($("li:last",i[s])[0]).bind("click",function(n){n.preventDefault();e._iDisplayStart=(parseInt($("a",this).text(),10)-1)*r.iLength;t(e)})}if(r.iPage===0){$("li:first",i[s]).addClass("disabled")}else{$("li:first",i[s]).removeClass("disabled")}if(r.iPage===r.iTotalPages-1||r.iTotalPages===0){$("li:last",i[s]).addClass("disabled")}else{$("li:last",i[s]).removeClass("disabled")}}}}});if($.fn.DataTable.TableTools){$.extend(true,$.fn.DataTable.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info modal"},select:{row:"active"}});$.extend(true,$.fn.DataTable.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}})}
function styledt(e){$(e+"-container .dataTables_filter label").addClass("pull-right");$(e+"-container .dataTables_filter input").attr("placeholder","Search");$(e+"-container .dataTables_filter input").addClass("form-control");$(e+"-container .dataTables_length select").addClass("form-control");$(e+"-container .dt-pop-control").detach().prependTo(".dataTables_filter");$(e+"-container .dataTables_paginate").addClass("pull-right")}

function dtLoad(e,t,n,r,i,s,o,u){var a=[];var f=$(e).dataTable({sDom:"<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",sPaginationType:"bootstrap",bAutoWidth:false,bProcessing:true,"bSort": true,bServerSide:true,sAjaxSource:t,bRetrieve:true,fnInitComplete:function(t){styledt(e)},aoColumns:u,aaSorting:[[0,"desc"]],oLanguage:{sLengthMenu:"Limit _MENU_",sSearch:"",oPaginate:{sPrevious:"",sNext:""}},fnRowCallback:function(e,t,n){if($.inArray(t[0],a)!==-1)$(e).find("td").not(":last-child").toggleClass("highlight")},fnDrawCallback:function(t){if(o)f.fnSetColumnVis(0,false,false);$(e+" tr").find(n).addClass("hidden-sm hidden-xs");$(e+" tr").find(r).addClass("hidden-xs");$(e+" tr").find(i).addClass("hidden");$(".datatable-loading").fadeOut("fast");$(e+"-container").fadeIn("fast")}});$(document).on("click",e+" tbody td:not(:last-child)",function(e){var t=$(this).find("a");if($(t).attr("href")&&$(t).hasClass("modalfy"))modalfyRun(t,$(t).attr("href"))});if(s!="false"){$(document).on("click",e+" tbody tr td:last-child",function(e){return false});$(document).on("click",e+" tbody tr ",function(t){var n=f.fnGetData(this);var r=n[0];var i=$.inArray(r,a);if(i===-1){a.push(r)}else a.splice(i,1);if(a.length>0){$(e+"-container .dt-pop-control").fadeIn()}else $(e+"-container .dt-pop-control").fadeOut();$(this).find("td").not(":last-child").toggleClass("highlight")})}$(document).on("click",e+"-container .dt-mass",function(e){e.preventDefault();var t=$(this).attr("data-action");var n=$(this).attr("data-table");var r=$(this).attr("data-method");var i=false;var s="";$.each(a,function(e,t){s+=t+","});if(r=="modal"){modalfyRun(this,$(this).attr("data-action")+"?ids="+s)}else if($(this).attr("data-confirm")=="true"){if(t=="user/mass/merge"){$.ajax({type:"GET",url:"user/mass/merge?ids="+s}).done(function(e){if(e){bootbox.confirm(e,function(e){if(e)fnRunMass(t,n,r,a)})}else{console.log(e);bootbox.alert(lang_unable_to_exec)}}).fail(function(e,t){console.log(e);bootbox.alert(lang_unable_to_exec+t)})}else{bootbox.confirm(lang_areyousure,function(e){if(e)fnRunMass(t,n,r,a)})}}else fnRunMass(t,n,r,a);a = [];return false})}function fnRunMass(e,t,n,r){if(!n)n="POST";$.ajax({type:n,url:e,dataType:"json",data:{rows:JSON.stringify(r)}}).done(function(e){if(e.result=="success"){r=[];oTable=$("#"+t).dataTable();oTable.fnReloadAjax();$(".dt-pop-control").fadeOut()}else{console.log(e);bootbox.alert(lang_unable_to_exec+e.error)}}).fail(function(e,t){console.log(e);bootbox.alert(lang_unable_to_exec+t)})}