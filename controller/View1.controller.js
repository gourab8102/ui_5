sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Binding",


], (Controller, MessageBox, JSONModel, BindingMode) => {
    "use strict";

    return Controller.extend("sample.project1.controller.View1", {
        // onInit() {
        //     MessageBox.success("onInit");
        // },
        onInit() {
            let oData = {
                "name": "Gourab"
            }


            /* A model is a managed storage where JSON-structured JavaScript data is 
            kept, and because it’s inside a UI5 model,
            the framework can observe it, bind to it, and update or react to changes
            automatically. */

            let oModel = new JSONModel(oData);

            /* this is like saying UI5, take this JS object
            and wrap it inside a Model so binding can work
            due to this data becomes obseravble , Ui5 can track changes */


            this.getView().setModel(oModel);
            //oModel.setDefaultBindingMode(BindingMode.Oneway);
            // attaching model to the view






        },





        onAddToTable: function () {
            const oModel = this.getView().getModel("manifestModel");
            const aData = oModel.getProperty("/Addressinfo");
            aData.push({


                "name": oModel.getProperty("/name"),
                "StreetNo": oModel.getProperty("/StreetNo"),
                "ZIPCodeCity": oModel.getProperty("/ZIPCodeCity"),
                "Status": oModel.getProperty("/Status")
                // "name": "toey",
                // "StreetNo":"APC RAY",
                // "ZIPCodeCity" : "743127",
                // "Country": "india"



            });

            oModel.refresh(true);
            // Clear form fields
            oModel.setProperty("/name", "");
            oModel.setProperty("/StreetNo", "");
            oModel.setProperty("/ZIPCodeCity", "");
            oModel.setProperty("/Status", "");

        },

        onAddToList: function () {
            const oModel = this.getView().getModel("manifestModel");

            const aList = oModel.getProperty("/Listinfo");

            aList.push({
                "name": oModel.getProperty("/name"),
                "StreetNo": oModel.getProperty("/StreetNo"),
                "ZIPCodeCity": oModel.getProperty("/ZIPCodeCity"),
                "Status": oModel.getProperty("/Status")
            });
            oModel.refresh(true);

            // Clear form fields
            oModel.setProperty("/name", "");
            oModel.setProperty("/StreetNo", "");
            oModel.setProperty("/ZIPCodeCity", "");
            oModel.setProperty("/Status", "");



        },

        // It loads the dialog fragment only once and opens it whenever needed.
        onOpenPressed: function () {
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "sample.project1.view.fragment1"
                });
            }

            this.pDialog.then(function (oDialog) {
                oDialog.open();
            });
        },

        onCloseDialog: function () {


            this.pDialog.then(function (oDialog) {
                oDialog.close();
            });
        },


        onValueHelpPress: function (oEvent) {

            var oItem = oEvent.getParameter("selectedItem");  // takes the selected item in string format
            if (!oItem) {
                return;
            }

            this.byId("name_input").setValue(oItem.getTitle());

        },

        onValueHelpSelect:function (oEvent) {

            var oItem = oEvent.getParameter("selectedItem");  // takes the selected item in string format
            if (!oItem) {
                return;
            }

            this.byId("name_input").setValue(oItem.getTitle());

        },





    });
});