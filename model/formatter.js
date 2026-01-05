
sap.ui.define([], function () {


    "use strict";




    return {

        // Formatter using single parameter
        statusChange: function (sStatus,Sname) {

            // Convert status to uppercase
            let CapsStatus = sStatus.toLocaleUpperCase();


            // what text to show based on status code
            switch (CapsStatus) {

                case "C":
                    return Sname+" is Cancelled";

                case "D":
                    return Sname+" has been Delivered";

                case "P":
                    return Sname+" is Pending";

                default:
                    // If status is not anything like p,c,d, return original value
                    return sStatus;
            }
        }
    };
});
