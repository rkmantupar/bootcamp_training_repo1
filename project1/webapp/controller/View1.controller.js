sap.ui.define([
    "sap/ui/core/mvc/Controller"
], 

function(Controller) {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onSaveBtn: function(oEvent) {
            var oView    = this.getView();
            var sName    = oView.byId("NameInput").getValue();
            var sStreet  = oView.byId("StreetInput").getValue();
            var sNo      = oView.byId("NoInput").getValue();
            var sZipCode = oView.byId("ZipCodeInput").getValue();
            var sCity    = oView.byId("CityInput").getValue();
            var oCountry = oView.byId("CountryInput").getValue();
            
            console.log(oView);
            console.log(sName);
            console.log(sStreet);
            console.log(sNo);
            console.log(sZipCode);
            console.log(sCity);
            console.log(oCountry);
        },

        onClearBtn: function (oEvent) {
            var oDelete = this.getView();
            oDelete.byId("NameInput").setValue();
            oDelete.byId("StreetInput").setValue();
            oDelete.byId("StreetInput").setValue();
            oDelete.byId("NoInput").setValue();
            oDelete.byId("ZipCodeInput").setValue();
            oDelete.byId("CityInput").setValue();
            oDelete.byId("CountryInput").setValue(); 
        }
    });
});
