var AddSubscriberForm=function(d,b,a,c){this.Name=a;this.Email=b;this.CustomFields=c;this.MailingListId=d;if(!this.CustomFields){this.CustomFields=new Object()}};AddSubscriberForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.Email){a.valid=false;a.errors.push("Email is a required parameter for CreateCustomFieldForm object")}if(!this.MailingListId){a.valid=false;a.errors.push("MailingListId is a required parameter for CreateCustomFieldForm object")}return a};var CreateCampaignForm=function(a,b,d,e,c){this.Name=a;this.Subject=b;this.SenderEmail=d;this.WebLocation=c;this.MailingListId=e};CreateCampaignForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.Name){a.valid=false;a.errors.push("Name is a required parameter for CreateCampaignForm object")}if(!this.Subject){a.valid=false;a.errors.push("Subject is a required parameter for CreateCampaignForm object")}if(!this.SenderEmail){a.valid=false;a.errors.push("SenderEmail is a required parameter for CreateCampaignForm object")}if(!this.MailingListId){a.valid=false;a.errors.push("MailingListID is a required parameter for CreateCampaignForm object")}if(!this.WebLocation){a.valid=false;a.errors.push("WebLocation is a required parameter for CreateCampaignForm object")}return a};var CreateCustomFieldForm=function(c,e,a,b,d){this.Name=c;this.Options=b;this.IsRequired=d;this.MailingListId=e;this.CustomFieldType=a};CreateCustomFieldForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.Name){a.valid=false;a.errors.push("Name is a required parameter for CreateCustomFieldForm object")}if(!this.MailingListId){a.valid=false;a.errors.push("MailingListId is a required parameter for CreateCustomFieldForm object")}return a};var CreateMailingListForm=function(a,b,c){this.Name=a;this.ConfirmationPage=b;this.RedirectAfterUnsubscribePage=c};CreateMailingListForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.Name){a.valid=false;a.errors.push("Name is a required parameter for CreateMailingListForm object")}return a};var TestCampaignForm=function(a,b){this.CampaignId=a;this.TestEmails=b};TestCampaignForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.CampaignId){a.valid=false;a.errors.push("CampaignId is a required parameter for TestCampaignForm object")}if(!this.TestEmails){a.valid=false;a.errors.push("TestEmails is a required parameter for TestCampaignForm object")}return a};var UpdateCustomFieldForm=function(f,c,e,a,b,d){this.Id=f;this.Name=c;this.Options=b;this.IsRequired=d;this.MailingListId=e;this.CustomFieldType=a};UpdateCustomFieldForm.prototype.validate=function(){var a={valid:true,errors:[]};if(!this.Id){a.valid=false;a.errors.push("Id is a required parameter for UpdateCustomFieldForm object")}if(!this.MailingListID){a.valid=false;a.errors.push("MailingListID is a required parameter for UpdateCustomFieldForm object")}return a};var _Errors=[];_Errors[200]="The given mailing list id was not found. Please make sure you have provided the right id.";_Errors[201]="The given custom field id was not found. Please make sure you have provided the right id.";_Errors[202]="The given segment id was not found. Please make sure you have provided the right id.";_Errors[300]="The given subscriber id was not found. Please make sure you have provided the right id.";_Errors[400]="The given campaign id was not found. Please make sure you have provided the right id.";_Errors[401]="Could not find any statistics for the given campaign id. Please make sure the campaign provided has been sent.";_Errors[402]="The given sender email was not found. Please make sure you have provided the right email.";_Errors[501]="The given API request is not valid. Please check the reference manual on http://www.moosend.com/api for more details";var getJSON={type:"text/javascript",charset:"utf-8",head:document.getElementsByTagName("head")[0],scripts:{},callbacks:{},count:1,name:function(a){var b=this;var c="_jsonp_"+(new Date).getTime()+"_"+this.count++;this.callbacks[c]=function(d){b.head.removeChild(b.scripts[c]);delete b.callbacks[c];delete b.scripts[c];a(d)};return c},load:function(d,a){var c=this.name(a);var b=document.createElement("script");b.type=this.type;b.charset=this.charset;b.src=d.replace(/{callback}/,"getJSON.callbacks."+c);this.head.appendChild(b);this.scripts[c]=b}};function _ajax(b){if(!b){return}if(!b.type){b.type="GET"}var a=new XMLHttpRequest();a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){if(b.success){b.success(a.responseText)}}else{if(a.readyState==4){if(b.error){b.error(a,a.status,a.responseText)}}}};a.open(b.type,b.url,true);a.setRequestHeader("User-Agent","Moosend Javascript Api");a.setRequestHeader("Content-Type","application/json");a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");if(b.data){a.send(JSON.stringify(b.data))}else{a.send()}}function _perfCall(a,d,b,c){if(typeof b=="function"){c=b;b=null}if(!MoosendAPI.ApiKey){c("Please set your api key in MoosendAPI.ApiKey");return}if(a.indexOf("?")<0){a+="?format=json&apikey="+MoosendAPI.ApiKey}else{a+="&format=json&apikey="+MoosendAPI.ApiKey}_ajax({data:b,type:d,url:MoosendAPI.Endpoint+a,success:function(e){e=JSON.parse(e);if(e.Code!=0){c(_Errors[e.Code])}else{c(null,e)}},error:function(f,g,e){c(e)}})}var MoosendAPI={Endpoint:"http://api.moosend.com",Campaigns:{GetCampaign:function(a,b){if(!a){b("CampaignId is a required parameter when calling GetCampaign")}else{_perfCall("/campaigns/"+a+"/view.json","POST",b)}},GetCampaigns:function(b,a,c){if(typeof b=="function"){c=b,b=1}if(typeof a=="function"){c=a,a=100}if(!b){b=1}if(!a){a=100}_perfCall("/campaigns/"+b+"/"+a+".json","GET",c)},CreateDraft:function(b,c){if(!b){c("CreateCampaignForm is a required parameter when calling CreateDraft")}else{var a=b.validate();if(!a.valid){c("The instance of CreateCampaignForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/campaigns/create.json","POST",b,c)}}},UpdateDraft:function(a){},Clone:function(a,b){if(!a){b("CampaignId is a required parameter when calling Clone")}else{_perfCall("/campaigns/"+a+"/clone.json","POST",b)}},SendCampaignTest:function(b,c){if(!b){c("TestCampaignForm is a required parameter when calling SendCampaignTest")}else{var a=b.validate();if(!a.valid){c("The instance of AddSubscriberForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/campaigns/"+b.CampaignId+"/send_test.json","POST",b,c)}}},Send:function(a,b){if(!a){b("CampaignId is a required parameter when calling Send")}else{_perfCall("/campaigns/"+a+"/send.json","POST",b)}},Delete:function(a,b){if(!a){b("CampaignId is a required parameter when calling Delete")}else{_perfCall("/campaigns/"+a+"/delete.json","DELETE",b)}},GetCampaignSummary:function(a,b){if(!a){b("CampaignId is a required parameter when calling GetCampaignSummary")}else{_perfCall("/campaigns/"+a+"/view_summary.json","GET",b)}},GetCampaignStatistics:function(a){},GetActivityByLocation:function(a,b){if(!a){b("CampaignId is a required parameter when calling GetActivityByLocation")}else{_perfCall("/campaigns/"+a+"/stats/countries.json","GET",b)}},GetLinkActivity:function(a,b){if(!a){b("CampaignId is a required parameter when calling GetLinkActivity")}else{_perfCall("/campaigns/"+a+"/stats/links.json","GET",b)}}},Subscribers:{GetSubscriberDetails:function(d,b,c){if(!d){c("MailingListID is a required parameter when calling GetSubscriberDetails")}else{if(!b){c("Email is a required parameter when calling GetSubscriberDetails")}else{var a="/subscribers/"+d+"/subscribers/view.json?email="+b;_perfCall(a,"GET",c)}}},Subscribe:function(b,c){if(!b){c("AddSubscriberForm is a required parameter when calling AddSubscriber")}else{var a=b.validate();if(!a.valid){c("The instance of AddSubscriberForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/subscribers/"+b.MailingListId+"/subscribe.json","POST",b,c)}}},Remove:function(c,a,b){if(!a){b("Email is a required parameter when calling RemoveSubscriber")}if(!c){b("MailingListID is a required parameter when calling RemoveSubscriber")}else{_perfCall("/subscribers/"+c+"/remove.json?email="+a,"POST",b)}},Unsubscribe:function(a){},SubscribeMany:function(g,e,f){if(!g){f("MailingListID is a required parameter when calling AddMultipleSubscribers")}else{if(!e){f("Subscribers array is a required parameter when calling AddMultipleSubscribers")}else{if(e.length&&e.length>0){f("Subscribers array must have at least one entry when calling AddMultipleSubscribers")}else{var a=0;var b=0;for(var d=0;d<e.length;d++){if(!e[d].Name){a++}if(!e[d].Email){b++}}if(a>0){f(a+" entries in the Subscribers array are missing the required Name parameter when calling AddMultipleSubscribers")}else{if(b>0){f(b+" entries in the Subscribers array are missing the required Email parameter when calling AddMultipleSubscribers")}else{var c="/subscribers/"+g+"/subscribers/subscribe_many.json?email="+email;_perfCall(c,"POST",{Members:e},f)}}}}}}},MailingLists:{Create:function(b,c){if(!b){c("CreateMailingListForm is a required parameter when calling CreateCustomField")}else{var a=b.validate();if(!a.valid){c("The instance of CreateMailingListForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/lists/create.json","POST",b,c)}}},Delete:function(b,a){if(!b){a("MailingListID is a required parameter when calling Delete")}else{_perfCall("/lists/"+b+"/delete.json","DELETE",createMailingListForm,a)}},GetMailingLists:function(b,a,c){if(typeof b=="function"){c=b,b=1}if(typeof a=="function"){c=a,a=100}if(!b){b=1}if(!a){a=100}_perfCall("/lists/"+b+"/"+a+".json","GET",c)},GetMailingListDetails:function(d,b,c){if(!d){c("MailingListId is a required parameter when calling GetSubscribersForMailingList")}else{if(typeof b=="function"){c=b}var a="/lists/"+d+"/details.json";_perfCall(a,"GET",c)}},GetSubscribersForMailingList:function(f,b,d,a,e){if(typeof d=="function"){e=d,d=1}if(typeof a=="function"){e=a,a=1000}if(!d){d=1}if(!a){a=1000}if(!f){e("MailingListID is a required parameter when calling GetSubscribersForMailingList")}else{if(!b||typeof b=="function"){e=b;e("Status is a required parameter when calling GetSubscribersForMailingList")}else{var c="/lists/"+f+"/subscribers/"+b+".json?page="+d+"&pageSize="+a;_perfCall(c,"GET",e)}}},CreateCustomField:function(b,c){if(!b){c("CreateCustomFieldForm is a required parameter when calling CreateCustomField")}else{var a=b.validate();if(!a.valid){c("The instance of CreateCustomFieldForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/lists/"+b.MailingListId+"/customfields/create.json","POST",b,c)}}},UpdateCustomField:function(b,c){if(!b){c("UpdateCustomFieldForm is a required parameter when calling UpdateCustomField")}else{var a=b.validate();if(!a.valid){c("The instance of UpdateCustomFieldForm provided is not valid. The following errors have been found: "+a.errors)}else{_perfCall("/lists/"+b.MailingListId+"/customfields/"+b.Id+"/update.json","POST",b,c)}}},DeleteCustomField:function(c,b,a){if(!c){a("Id is a required parameter when calling DeleteCustomField")}else{if(!b){a("MailingListID is a required parameter when calling DeleteCustomField")}else{_perfCall("/lists/"+b+"/customfields/"+c+"/delete.json","DELETE",a)}}}}};