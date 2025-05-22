sap.ui.define([
    "sap/ui/core/mvc/Controller"
], 

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onSaveBtn: function( ) {
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

        onClearBtn: function( ) {
            var oClear = this.getView();
            oClear.byId("NameInput").setValue("");
            oClear.byId("StreetInput").setValue("");
            oClear.byId("NoInput").setValue("");
            oClear.byId("ZipCodeInput").setValue("");
            oClear.byId("CityInput").setValue("");
            oClear.byId("CountryInput").setValue("");

        }
    });
});