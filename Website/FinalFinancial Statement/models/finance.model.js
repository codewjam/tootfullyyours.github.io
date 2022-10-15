const { Int32 } = require('mongodb');
const mongoose= require('mongoose');
const bodyparser = require('body-parser');

var financeSchema = new mongoose.Schema({

patientRevenue:{

    type:Number
},

totalIncome:{

    type:Number
},

grossProfit:{

    type:Number
},



dentalSupplies:{

    type:Number
},

laboratoryfee:{

    type:Number
},

staffPayroll:{

    type:Number
},

Marketing:{

    type:Number
},


rent:{

    type:Number
},


generalAdmin:{

    type:Number
},

totalExpense:{

    type:Number
},

interestIncome:{

    type:Number
},

totalOtherIncome:{

    type:Number
},

otherExpenses:{

    type:Number
},

totalOtherExpenses:{

    type:Number
},


netIncome:{

    type:Number
},


});


mongoose.model('Finance',financeSchema)
